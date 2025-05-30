/**********************Rodando*************************** */

    function calcular() {
      const pt = parseFloat(document.getElementById('pt').value);
      const tm = parseFloat(document.getElementById('tm').value);
      const dauto = parseFloat(document.getElementById('dauto').value);
      const vsist = parseFloat(document.getElementById('vsist').value);
      const dod = parseFloat(document.getElementById('dod').value);
      const cbc = parseFloat(document.getElementById('cbc').value);
      const hsp = parseFloat(document.getElementById('hsp').value);
      const pmod = parseFloat(document.getElementById('pmod').value);

      const cd = pt * tm;
      const cdps = cd * 1.25;
      const cwh = cdps * dauto;
      const cah = cwh / vsist;
      const cdod = cah / dod;
      const nbat = Math.ceil(cdod / cbc);

      const parr = cdps / hsp;
      const parrAj = parr * 1.2;
      const nmod = Math.ceil(parrAj / pmod);

      document.getElementById('saida').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Consumo diário (Cd):</strong> ${cd.toFixed(2)} Wh/dia</p>
        <p><strong>Consumo com perdas (Cdps):</strong> ${cdps.toFixed(2)} Wh/dia</p>
        <p><strong>Banco de baterias:</strong> ${cdod.toFixed(2)} Ah → ${nbat} baterias de ${cbc} Ah</p>
        <p><strong>Potência do arranjo:</strong> ${parrAj.toFixed(2)} Wp → ${nmod} módulos de ${pmod} Wp</p>
      `;
    }
  
function dimensDisjCondutor() {
    function pegando(pego) {
      const radios = pego;
      let Selecionado = null;
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          Selecionado = radios[i].value;
          break;
        }
      }
      return Selecionado;
    }
  
    //formElements reune as variáveis como objetos dele.
    const formElements = {
      nomeCircuito: document.querySelector("#nCirc").value,
      potencia: Number(document.querySelector("#nCircPotencia").value),
      distancia: Number(document.querySelector("#nCircDist").value),
      tempoCurto: Number(document.querySelector("#ntempoCurto").value),
      kConstante: Number(document.querySelector("#nkConstanteCondutor").value),
      tipo: document.getElementsByName("nCircTipo"),
      tensao: document.getElementsByName("nCircTensao"),
      paredeSolo: document.getElementsByName("nk1ps"),
      temperatura: document.getElementsByName("nk1"),
      agrupamento: document.getElementsByName("nk2"),
      curtoCircuito: document.getElementsByName("ncorrenteCurto")
    };
  
    if (!formElements.nomeCircuito) {
      alert("Insira um nome para o circuito!!!!");
      return;
    }
  
    const circTipo = pegando(formElements.tipo);
    const nivelTensao = Number(pegando(formElements.tensao));
    const nK1ps = pegando(formElements.paredeSolo);
    const nK1 = pegando(formElements.temperatura);
    const nK2 = pegando(formElements.agrupamento);
    const correnteCurto = pegando(formElements.curtoCircuito);
  
    let K1 = 1;
    let K2 = 1;
  
    if (nK1ps === "Parede") {
      switch (nK1) {
        case "10": K1 = 1.22; break;
        case "15": K1 = 1.17; break;
        case "20": K1 = 1.12; break;
        case "25": K1 = 1.06; break;
        case "30": K1 = 1; break;
        case "35": K1 = 0.94; break;
        case "40": K1 = 0.87; break;
        case "45": K1 = 0.79; break;
        case "50": K1 = 0.71; break;
        case "55": K1 = 0.61; break;
        case "60": K1 = 0.5; break;
        default: return;
      }
    } else if (nK1ps === "Solo") {
      switch (nK1) {
        case "10": K1 = 1.10; break;
        case "15": K1 = 1.05; break;
        case "20": K1 = 1.05; break;
        case "25": K1 = 0.95; break;
        case "30": K1 = 0.89; break;
        case "35": K1 = 0.84; break;
        case "40": K1 = 0.77; break;
        case "45": K1 = 0.71; break;
        case "50": K1 = 0.63; break;
        case "55": K1 = 0.55; break;
        case "60": K1 = 0.45; break;
        default: return;
      }
    }
  
    switch (nK2) {
      case "1": K2 = 1; break;
      case "2": K2 = 0.8; break;
      case "3": K2 = 0.7; break;
      case "4": K2 = 0.65; break;
      case "5": K2 = 0.6; break;
      case "6": K2 = 0.57; break;
      case "7": K2 = 0.54; break;
      case "8": K2 = 0.52; break;
      default: return;
    }
  // Resistividade do cobre corrigida para 30º = 0.0179... foi usada a corrente de projeto
  //para o criterio de queda de tensão, segundo Hilton, para preservar a consistência do calculo.
    let In, IB, condutorQueda, condutorCritCurto;
    if (nivelTensao === 220 || nivelTensao === 380) {
      In = Number(formElements.potencia / (1.73 * nivelTensao));
      IB = Number(In / (K1 * K2));
      condutorQueda = Number(1.73 * 100 * (0.018) * formElements.distancia * IB / (nivelTensao * 4));
    } else {
      In = Number(formElements.potencia / (nivelTensao));
      IB = Number(In / (K1 * K2));
      condutorQueda = Number(2 * 100 * (0.018) * formElements.distancia * IB / (nivelTensao * 4));
    }
  
    if (correnteCurto === "B") {
      condutorCritCurto = (In * 5 * Math.sqrt(formElements.tempoCurto)) / formElements.kConstante;
    } else if (correnteCurto === "C") {
      condutorCritCurto = (In * 10 * Math.sqrt(formElements.tempoCurto)) / formElements.kConstante;
    } else if (correnteCurto === "D") {
      condutorCritCurto = (In * 20 * Math.sqrt(formElements.tempoCurto)) / formElements.kConstante;
    }
  
    let condutorMinimo = (circTipo === "forca") ? 2.5 : 1.5;
  
    let condutorAmpacidade;
    if (nivelTensao === 220 || nivelTensao === 380) {
      if (IB <= 15.5) condutorAmpacidade = 1.5;
      else if (IB <= 21) condutorAmpacidade = 2.5;
      else if (IB <= 28) condutorAmpacidade = 4;
      else if (IB <= 36) condutorAmpacidade = 6;
      else if (IB <= 50) condutorAmpacidade = 10;
      else if (IB <= 68) condutorAmpacidade = 16;
      else if (IB <= 89) condutorAmpacidade = 25;
      else if (IB <= 110) condutorAmpacidade = 35;
      else if (IB <= 134) condutorAmpacidade = 50;
      else { alert("Condutor acima de 50mm² não suportado."); return; }
    } else {
      if (IB <= 17.5) condutorAmpacidade = 1.5;
      else if (IB <= 24) condutorAmpacidade = 2.5;
      else if (IB <= 32) condutorAmpacidade = 4;
      else if (IB <= 41) condutorAmpacidade = 6;
      else if (IB <= 57) condutorAmpacidade = 10;
      else if (IB <= 76) condutorAmpacidade = 16;
      else if (IB <= 101) condutorAmpacidade = 25;
      else if (IB <= 125) condutorAmpacidade = 35;
      else if (IB <= 151) condutorAmpacidade = 50;
      else { alert("Condutor acima de 50mm² não suportado."); return; }
    }
  
    let condutorMaior = Math.max(condutorQueda, condutorMinimo, condutorCritCurto, condutorAmpacidade);
    let condutorAjustado;
    if (condutorMaior <= 1.5) condutorAjustado = 1.5;
    else if (condutorMaior <= 2.5) condutorAjustado = 2.5;
    else if (condutorMaior <= 4) condutorAjustado = 4;
    else if (condutorMaior <= 6) condutorAjustado = 6;
    else if (condutorMaior <= 10) condutorAjustado = 10;
    else if (condutorMaior <= 16) condutorAjustado = 16;
    else if (condutorMaior <= 25) condutorAjustado = 25;
    else if (condutorMaior <= 35) condutorAjustado = 35;
    else if (condutorMaior <= 50) condutorAjustado = 50;
    else { alert("Condutor acima de 50mm² não suportado."); return; }
  
    let Disjuntor;
    const InNum = Number(In);
    if (InNum <= 6.1) Disjuntor = 6;
    else if (InNum <= 10.1) Disjuntor = 10;
    else if (InNum <= 16.1) Disjuntor = 16;
    else if (InNum <= 20.1) Disjuntor = 20;
    else if (InNum <= 25.1) Disjuntor = 25;
    else if (InNum <= 32.1) Disjuntor = 32;
    else if (InNum <= 40.1) Disjuntor = 40;
    else if (InNum <= 50.1) Disjuntor = 50;
    else if (InNum <= 63.1) Disjuntor = 63;
    else if (InNum <= 70.1) Disjuntor = 70;
    else if (InNum <= 80.1) Disjuntor = 80;
    else if (InNum <= 100.1) Disjuntor = 100;
    else if (InNum <= 125.1) Disjuntor = 125;
    else if (InNum <= 150.1) Disjuntor = 150;
    else { alert("Disjuntor maior que 150A, não suportado."); return; }
  
    // Continuação para ajuste de condutorFinal...
    // (Pode ser copiado conforme o restante do seu código)
  
    alert(`Considerando o fator de temperatura k1 = ${K1.toFixed(2)}, o fator de agrupamento k2 = ${K2.toFixed(2)}, e fator de correção de resistividade térmica do solo k3 = 2,5 K.m/W:  onde  In = ${In.toFixed(2)}A,  Ib = ${IB.toFixed(2)}A, a queda de tensão percentual e% = 4%, para uma distancia de ${formElements.distancia.toFixed(2)}m, determinou-se o condutor pelos critérios de: \nMáxima queda de tensão admissivel: ${condutorQueda.toFixed(2)}mm²,\nCritério de curto circuito: ${condutorCritCurto.toFixed(2)}mm²,\nCondutor Minimo para circuito de ${circTipo}: ${condutorMinimo.toFixed(2)}mm²,\nCritério de Ampacidade: ${condutorAmpacidade.toFixed(2)}mm².\n\nAssim Conhecemos o condutor final, que é o maior entre os critérios adotados: ${condutorAjustado.toFixed(2)}mm²; e o Disjuntor: ${Disjuntor}A`);
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
    return `Esta usina teve como parâmetro inicial o consumo médio mensal de ${consMedio.toFixed(2)} kWh.mês. Necessitando de ${nMod} módulos de ${potMod} Wp, e inversor (ou inversores somados), de ${PotINVajustado.toFixed(2)} kWp, onde a energia gerada estimada será de: ${energia.toFixed(2)} kWh.mês.

A área aproximada, necessária para a instalação dos painéis é de ${ArMod.toFixed(2)} m², não tendo sido inserido os 20cm ao redor e entre duas carreiras sucessivas de módulos, para manutenção e segurança. Se a usina for no solo ou em uma laje, a fim de evitar o sombreamento usamos dois métodos para garantir o distanciamento das fileiras de painéis: 

Método 01 para mínimo:  D = L x cos@; h = L x sen@; d = (3,5 x h) – D = ${distancia.toFixed(2)} m, entre as carreiras de módulos.
Método 02 para máximo: d = FS + (3,5 x h) – D, onde FS. d = ${(distancia + 1).toFixed(2)} m, entre as carreiras de módulos`;
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
  alert(gerarMensagemUsina({
    consMedio,
    nMod,
    potMod: formElements.potMod,
    PotINVajustado,
    energia,
    ArMod,
    distancia
  }));
}

/*******rodando - Busca por Certificado */
// Arquivo: app.js

// Simulando o JSON (em um cenário real, você poderia carregar o JSON de um arquivo externo)
const alunos = [
  { "cod": "pv0000002", 
    "Nome": "Certificamos que ALICE ARAÚJO DO ESPÍRITO SANTO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000003", 
    "Nome": "Certificamos que ÂNGELLO MIGUEL ARCANJO MENDES SALERMO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000004", 
    "Nome": "Certificamos que ATHYLLA GUILHERME GOMES, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000005", 
    "Nome": "Certificamos que EDIELE VITÓRIA ARAÚJO PORTELA, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000006", 
    "Nome": "Certificamos que MARIA CLARA MONTEIRO DOS SANTOS, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000007", 
    "Nome": "Certificamos que MOISÉS DA SILVA DE CARVALHO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000008", 
    "Nome": "Certificamos que SAMUEL SOARES DE AZEVEDO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000009", 
    "Nome": "Certificamos que VITÓRIA SOARES DE AZEVEDO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000010", 
    "Nome": "Certificamos que ALISON SOARES DE AZEVEDO, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000011", 
    "Nome": "Certificamos que DANIELA DA SILVA, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000012", 
    "Nome": "Certificamos que MATEUS LUCAS DOS SANTOS OLIVEIRA, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000013", 
    "Nome": "Certificamos que RAFAEL SOARES DE AZEVEDO, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000014", 
    "Nome": "Certificamos que RAIANE           , participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000015", 
    "Nome": "Certificamos que THALITA DA SILVA DE CARVALHO, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000016", 
    "Nome": "Certificamos que VICTÓRIA DA SILVA, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000017", 
    "Nome": "Certificamos que Martina Munita Silva de Oliveira, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
      "Projeto":"Projeto social Brisa Mar.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000018", 
    "Nome": "Certificamos que Jean Gonçalves Melegário, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
      "Projeto":"Projeto social Brisa Mar.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000019", 
    "Nome": "Certificamos que Lucas Nunes Batista da Silva, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
      "Projeto":"Projeto social Brisa Mar.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },

   { "cod": "pv0000020", 
    "Nome": "Certificamos que Richard Gonçalves Melegário, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
    "Projeto":"Projeto social Brisa Mar.",
    "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000021", 
    "Nome": "Certificamos que Pedro Henrique de Souza Moraes, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
      "Projeto":"Projeto social Brisa Mar.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000001", 
    "Nome": "Certificamos que TESTE, participou das Oficinas XXXXXXXXXXXX",
    "Carga_horaria": "xxh.",
    "Periodo": "xxxxxxxxxxxxxx de 2020.",
    "Local": "xxxxxxxxxxxxxxxxxxxx.",
    "Projeto":"xxxxxxxxxxxxxxxxxxxx.",
    "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
  {  "cod": "pb0000002", 
      "Nome": "Certificamos que Jose Manoel das graças Silva das Oficinas de Edição de textos com LibreOffice: WRITER",
      "Carga_horaria": "10h.",
      "Periodo": "Setembro a Outubro de 2024.",
      "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10." }
];

// Função para buscar o contato
function buscarCertificado() {
  const codBusca = document.getElementById('cod').value.trim();
  const resultadoDiv = document.getElementById('result');
  
  // Limpar resultados anteriores
  resultadoDiv.innerHTML = '';

  // Verificar se o nome foi informado
  if (codBusca === '') {
    resultadoDiv.innerHTML = 'Por favor, insira um código válido para buscar.';
    return;
  }

  // Procurar no JSON
  const codEncontrado = alunos.find(aluno => aluno.cod.toLowerCase() === codBusca.toLowerCase());

  // Exibir o resultado
  if (codEncontrado) {
    resultadoDiv.innerHTML = `Código: ${codEncontrado.cod} <br> Nome: ${codEncontrado.Nome} <br> Carga horária: ${codEncontrado.Carga_horaria} <br> Período: ${codEncontrado.Periodo} <br> Local: ${codEncontrado.Local} <br> Projeto: ${codEncontrado.Projeto} <br> Realização: ${codEncontrado.Realizacao}`;
  } else {
    resultadoDiv.innerHTML = 'Nenhum Certificado encontrado. Insira o código que consta abaixo do QRCode no verso do Certificado.';
  }
}

