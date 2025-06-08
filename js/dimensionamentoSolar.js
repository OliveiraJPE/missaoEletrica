/**********************Rodando*************************** */
      function calcular() {
  // Entrada de dados
  const pt = parseFloat(document.getElementById('pt').value);
  const tm = parseFloat(document.getElementById('tm').value);
  const dauto = parseFloat(document.getElementById('dauto').value);
  const vsist = parseFloat(document.getElementById('vsist').value);
  const dod = parseFloat(document.getElementById('dod').value);
  const dodm = parseFloat(document.getElementById('dodm').value);
  const capacidadeBateria = parseFloat(document.getElementById('cbc').value);
  const hsp = parseFloat(document.getElementById('hsp').value);
  const potenciaModulo = parseFloat(document.getElementById('pmod').value);
  const Ctipo = parseFloat(document.getElementById('taxaC').value);
  const tipoInversor = parseFloat(document.getElementById('inversor').value); // 1 = senoidal pura

  // Validação
  if ([pt, tm, dauto, vsist, dod, dodm, capacidadeBateria, hsp, potenciaModulo, Ctipo, tipoInversor].some(isNaN)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Consumo e energia
  const consumoDiario = pt * tm;
  const consumoComPerdas = consumoDiario * 1.25;
  const energiaTotal = consumoComPerdas * dauto;
  const energiaUmDia = consumoComPerdas;

  // Capacidade do banco necessária (Ah)
  const capacidadeAutonomia = (energiaTotal / vsist) / dodm;
  const capacidadeUsoDiario = (energiaUmDia / vsist) / dod;
  const capacidadeFinalAh = Math.max(capacidadeAutonomia, capacidadeUsoDiario);

  // Banco de baterias
  const bateriasPorRamo = vsist / 12;
  const numRamos = Math.ceil(capacidadeFinalAh / capacidadeBateria / bateriasPorRamo);
  const numBaterias = numRamos * bateriasPorRamo;
  const capacidadeTotalAh = numRamos * capacidadeBateria;

  // Energia descarregada e corrente recomendada
  const Fcarregamento = 1.1;
  const energiaBateriasDescarregadas = numRamos * capacidadeBateria * dod * vsist * Fcarregamento;
  const AjCarga = capacidadeBateria * Ctipo * numRamos;

  // Módulos FV
  const potenciaArranjoBruta = energiaUmDia / hsp;
  const potenciaArranjoCorrigida = potenciaArranjoBruta * 1.2;
  let numModulos = Math.ceil(potenciaArranjoCorrigida / potenciaModulo);

  // Energia gerada pelos módulos e corrente fornecida
  let PotenciaGeradaModulos = numModulos * potenciaModulo * 0.75;
  let correnteRecargaMod = PotenciaGeradaModulos / vsist;

  // Corrente do controlador
  let iRecarga = Math.max(correnteRecargaMod, AjCarga);
  let controladorA = Math.ceil(iRecarga / 10) * 10;

  // Tempo de recarga e ajuste automático
  let tempoRecarga = energiaBateriasDescarregadas / PotenciaGeradaModulos;
  let tentativas = 0;
  const maxTentativas = 100;

  while ((tempoRecarga > hsp || correnteRecargaMod < AjCarga) && tentativas < maxTentativas) {
    numModulos++;
    PotenciaGeradaModulos = numModulos * potenciaModulo * 0.75;
    correnteRecargaMod = PotenciaGeradaModulos / vsist;
    iRecarga = Math.max(correnteRecargaMod, AjCarga);
    controladorA = Math.ceil(iRecarga / 10) * 10;
    tempoRecarga = energiaBateriasDescarregadas / PotenciaGeradaModulos;
    tentativas++;
  }

  // Inversor
  const potenciaInversor = tipoInversor === 1
    ? Math.ceil(potenciaArranjoCorrigida / 100) * 100
    : Math.ceil((potenciaArranjoCorrigida * 1.5) / 100) * 100;

  // Resultado final
  document.getElementById('saida').innerHTML = `
    <h2>Resultado - 👍:</h2>
    <p><strong>Consumo diário (Cd):</strong> ${consumoDiario.toFixed(2)} Wh/dia</p>
    <p><strong>Consumo com perdas (Cdps):</strong> ${consumoComPerdas.toFixed(2)} Wh/dia</p>
    <p><strong>Banco de baterias:</strong> ${capacidadeTotalAh.toFixed(2)} Ah → ${numBaterias} baterias (em ${numRamos} ramos de ${bateriasPorRamo} em série)</p>
    <p>⚠️ Atenção! Adotar uma tensão maior para o banco pode diminuir o número de baterias.
    <p><strong>Potência do arranjo FV:</strong> ${potenciaArranjoCorrigida.toFixed(2)} Wp → ${numModulos} módulos de ${potenciaModulo} Wp</p>
    <p>⚠️ Atenção! Adotar módulos de potência menor ou maior, pode ajustar a capacidade do controlador e o tempo de recarga, gerando economia na compra.
    <p><strong>Controlador adotado:</strong> ${controladorA} A</p>
    <p><strong>Potência do inversor:</strong> ${potenciaInversor} W - Potência real</p>
    <p>⚠️ Atenção! Informe-se se a potência do inversor é a real. Para vendas é usual usar a potência de pico na face e a real apresentada apenas no Data Sheet.
    <p><strong>Tempo estimado de recarga:</strong> ${tempoRecarga.toFixed(2)} horas</p>
    <p><strong>⚠️Atenção! Verifique Voc e Isc dos módulos em relação ao controlador!</strong></p>
  `;
}

  /*******Rodando ********/

function media() {
  // --- Funções auxiliares ---
  function pegando(radios) {
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) return radios[i].value;
    }
    return null;
  }

  function calcularPerdaClipping(razao) {
    if (razao <= 1) return 0;
    else if (razao <= 1.1) return 0.005;
    else if (razao <= 1.2) return 0.015;
    else if (razao <= 1.3) return 0.03;
    else if (razao <= 1.4) return 0.05;
    else if (razao <= 1.5) return 0.07;
    else if (razao <= 1.6) return 0.09;
    else if (razao <= 1.7) return 0.11;
    else if (razao <= 1.8) return 0.13;
    else if (razao <= 2) return 0.15;
    else return -1; // Inviável economicamente
  }

  function calcularEnergiaGerada(nMod, potMod, ajIrrad, perdaClipping) {
    const kWpTotal = (nMod * potMod) / 1000;
    const energiaBruta = kWpTotal * 30 * ajIrrad;
    return energiaBruta - (energiaBruta * perdaClipping);
  }

  function gerarMensagemUsina({ consMedio, nMod, potMod, PotINVajustado, energia, ArMod, distancia }) {
    return `<h2>Resultado - 👍:</h2>
    <p>Esta usina teve como parâmetro inicial o consumo médio mensal de ${consMedio.toFixed(2)} kWh.mês. Necessitando de ${nMod} módulos de ${potMod} Wp, e inversor (ou inversores somados), de ${PotINVajustado.toFixed(2)} kWp, onde a energia gerada estimada será de: ${energia.toFixed(2)} kWh.mês. </p>

 <p>A área aproximada, necessária para a instalação dos painéis é de ${ArMod.toFixed(2)} m², não tendo sido inserido os 20cm ao redor e entre duas carreiras sucessivas de módulos, para manutenção e segurança.  </p>
  <p>Se a usina for no solo ou em uma laje, a fim de evitar o sombreamento usamos dois métodos para garantir o distanciamento das fileiras de painéis:  </p>

 <p>Método 01 para mínimo:  D = L x cos@; h = L x sen@; d = (3,5 x h) – D = ${distancia.toFixed(2)} m, entre as carreiras de módulos. </p>
 <p>Método 02 para máximo: d = FS + (3,5 x h) – D, onde FS. d = ${(distancia + 1).toFixed(2)} m, entre as carreiras de módulos </p>`;
  }

  // --- Coleta de dados ---
  const formElements = {
    nomeUsina: document.querySelector("#nCircf").value,
    cons: [...Array(14).keys()].map(i => Number(document.querySelector(`#nMes${i + 1}`).value)),
    irrad: Number(document.querySelector("#nIrr").value),
    potMod: Number(document.querySelector("#nCircPotMod").value),
    padrao: document.getElementsByName("npad"),
    largMod: Number(document.querySelector("#nLargMod").value),
    compMod: Number(document.querySelector("#nCompMod").value),
    latitude: Number(document.querySelector("#nAjLat").value),
    angulo: Number(document.querySelector("#nAjAng").value),
    Ldistancia: Number(document.querySelector("#nAjDist").value),
    direcao: document.getElementsByName("nAjDir")
  };

  if (!formElements.nomeUsina) return alert("Insira um nome para a Usina!");
  const ajpadrao = Number(pegando(formElements.padrao));
  const ajdirecao = Number(pegando(formElements.direcao));
  if (!ajpadrao && ajpadrao !== 0) return alert("Selecione um padrão de consumo!");
  if (!ajdirecao && ajdirecao !== 0) return alert("Selecione a direção de orientação dos módulos!");

  // --- Cálculo consumo ajustado ---
  let consMedio = (formElements.cons.slice(0, 13).reduce((a, b) => a + b, 0) / 13) + formElements.cons[13];
  if (ajpadrao === 1) consMedio -= 30;
  else if (ajpadrao === 2) consMedio -= 50;
  else if (ajpadrao === 3) consMedio -= 100;

  const consDia = consMedio / 30;

  // --- Correções climáticas e de orientação ---
  const direcaoCorrecao = [1, 0.85, 0.41, 0.5, 0.95, 0.9];
  const AJDIRRESUL = direcaoCorrecao[ajdirecao - 1] || 1;

  const difAnLat = Math.abs(formElements.latitude - formElements.angulo);
  let ajAngulo = 1;
  if (difAnLat >= 40) ajAngulo = 0.65;
  else if (difAnLat >= 30) ajAngulo = 0.75;
  else if (difAnLat >= 20) ajAngulo = 0.85;
  else if (difAnLat >= 15) ajAngulo = 0.9;
  else if (difAnLat >= 10) ajAngulo = 0.95;
  else if (difAnLat >= 5) ajAngulo = 0.98;

  const PRatio = 0.75;
  const ajIrrad = formElements.irrad * AJDIRRESUL * ajAngulo * PRatio;

  if (!ajIrrad || ajIrrad <= 0) return alert("A Irradiação corrigida não pode ser zero!");
  if (formElements.potMod === 0) return alert("A potência do módulo não pode ser zero!");

  // --- Dimensionamento inicial ---
  const kWp = (1000 * consDia) / ajIrrad;
  let nMod = Math.ceil(kWp / formElements.potMod);
  let PotINVajustado = Math.round((nMod * formElements.potMod) / 1000);

  // --- Ajuste do número de módulos para gerar energia >= consumo ---
  let energia = 0;
  let perda = 0;
  while (true) {
    const razao = (nMod * formElements.potMod) / (PotINVajustado * 1000);
    perda = calcularPerdaClipping(razao);
    if (perda === -1) return alert("Perdas muito altas; Overload é inviável economicamente!");
    energia = calcularEnergiaGerada(nMod, formElements.potMod, ajIrrad, perda);
    if (energia >= consMedio) break;
    nMod++;
  }

  // --- Cálculo de distanciamento e área ---
  const anguloRad = formElements.angulo * (Math.PI / 180);
  const distancia = (3.5 * formElements.Ldistancia * Math.sin(anguloRad)) -
                    (formElements.Ldistancia * Math.cos(anguloRad));
  const ArMod = ((formElements.compMod + 0.03) * (formElements.largMod + 0.03) * nMod);

  // --- Mensagem final ---
  const saidaEl = document.getElementById("saidaResultados");
  saidaEl.innerHTML=gerarMensagemUsina({
    consMedio,
    nMod,
    potMod: formElements.potMod,
    PotINVajustado,
    energia,
    ArMod,
    distancia
  });
}



