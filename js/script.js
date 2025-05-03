var consMedio1 = 0;
var consMedio2 = 0;
var consMedio3 = 0;
var consMedio4 = 0;
var consMedio5 = 0;
var consMedio6 = 0;
var consMedio7 = 0;
var consMedio8 = 0;
var consMedio9 = 0;
var consMedio10 = 0;
var consMedio11 = 0;
var consMedio12 = 0;
var consMedio13 = 0;
var consMedio14 = 0;
var consMedio = 0;
var irrad = 0;
var nomeUsina;
var consDia = 0;
var kWp = 0;
var potMod = 0;
var nMod = 0;
var ajPlacas = 0;
var areaFoto = 0;
var padrao = 0;
var latitude = 0;
var angulo = 0;
var Ldistancia = 0;
var distancia = 0;
var direcao = 0;
var Pa = 0;
var Ead = 0;
var Eadf = 0;
var largMod = 0;
var CompMod = 0;
var ArMod = 0;
var difAnLat = 0;
var Angradianos = 0;
var Latradianos = 0;
var fdi;
var PotINV;
var AJDIRRESUL;
var Paaaa;
var tMod;
var tPotInv;
var tMod2;
var direcaoNome;
function media() {
  nomeUsina = window.document.querySelector("#nCircf").value;
  if(!nomeUsina){
    alert("Insira um nome para a Usina!!!!")  
  }else{
  consMedio1 = Number(window.document.querySelector("#nMes1").value);
  consMedio2 = Number(window.document.querySelector("#nMes2").value);
  consMedio3 = Number(window.document.querySelector("#nMes3").value);
  consMedio4 = Number(window.document.querySelector("#nMes4").value);
  consMedio5 = Number(window.document.querySelector("#nMes5").value);
  consMedio6 = Number(window.document.querySelector("#nMes6").value);
  consMedio7 = Number(window.document.querySelector("#nMes7").value);
  consMedio8 = Number(window.document.querySelector("#nMes8").value);
  consMedio9 = Number(window.document.querySelector("#nMes9").value);
  consMedio10 = Number(window.document.querySelector("#nMes10").value);
  consMedio11 = Number(window.document.querySelector("#nMes11").value);
  consMedio12 = Number(window.document.querySelector("#nMes12").value);
  consMedio13 = Number(window.document.querySelector("#nMes13").value);
  consMedio14 = Number(window.document.querySelector("#nMes14").value);

  irrad = Number(window.document.querySelector("#nIrr").value);
 
  potMod = Number(window.document.querySelector("#nCircPotMod").value);
  padrao = Number(window.document.querySelector("#npad").value);
  //fdi = Number(window.document.querySelector("#nCircFDI").value);

  consMedio =
    (consMedio1 +
      consMedio2 +
      consMedio3 +
      consMedio4 +
      consMedio5 +
      consMedio6 +
      consMedio7 +
      consMedio8 +
      consMedio9 +
      consMedio10 +
      consMedio11 +
      consMedio12 +
      consMedio13) /
      13 +
    consMedio14;

  if (padrao === 1) {
    consMedio = consMedio - 30;
  } else if (padrao === 2) {
    consMedio = consMedio - 50;
  } else if (padrao === 3) {
    consMedio = consMedio - 100;
  }
  consDia = (consMedio*12)/365;
  kWp = consDia / (irrad * 0.75);

  /***********************************/
  largMod = Number(window.document.querySelector("#nLargMod").value);
  CompMod = Number(window.document.querySelector("#nCompMod").value);
  latitude = Number(window.document.querySelector("#nAjLat").value);
  angulo = Number(window.document.querySelector("#nAjAng").value);
  Ldistancia = Number(window.document.querySelector("#nAjDist").value);
  direcao = Number(window.document.querySelector("#nAjDir").value);

  if (direcao === 2) {
    Ead = kWp;
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    AJDIRRESUL=0.85;
    Ead = Ead / AJDIRRESUL;
    Pa = 1 - Math.cos(difAnLat);
  } else if (direcao === 3) {
    Ead = kWp;
    //angulo = -180 - (latitude + angulo);
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    AJDIRRESUL=0.41;
    Ead = Ead / AJDIRRESUL;
    Pa = 1 - Math.cos(difAnLat);
  } else if (direcao === 4) {
    Ead = kWp;
    //angulo = -180 - (latitude + angulo);
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    AJDIRRESUL=0.5;
    Ead = Ead / AJDIRRESUL;
    Pa = 1 - Math.cos(difAnLat);
  } else if (direcao === 5) {
    Ead = kWp;
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    AJDIRRESUL=0.95;
    Ead = Ead / AJDIRRESUL;
    Pa = 1 - Math.cos(difAnLat);
  } else if (direcao === 6) {
    Ead = kWp;
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    AJDIRRESUL=0.9;
    Ead = Ead / AJDIRRESUL;
    Pa = 1 - Math.cos(difAnLat);
  } else {
    Ead = kWp;
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    AJDIRRESUL=1;
    Ead = Ead / AJDIRRESUL;
    Pa = 1 - Math.cos(difAnLat);
  }
  Eadf = Ead + Ead * Pa;
  nMod = Math.ceil((Eadf * 1000) / potMod);
  ArMod = CompMod * largMod * nMod;
  ajPlacas = nMod * potMod;
  

  distancia =
    3.5 * Ldistancia * Math.sin(Latradianos) -
    Ldistancia * Math.cos(Latradianos);


	//fdi = 0.70;
		
    PotINV =  Math.ceil(nMod*potMod*0.0007);
    ajPlacas =  nMod*potMod*0.001;
    PotINV = Math.floor((ajPlacas+PotINV)/2);
    fdi = (PotINV/ajPlacas).toFixed(2);
    

   if(Pa==0)
  {
    Paaaa=1;
  }else{
    Paaaa=Math.cos(difAnLat);
  }

  /**Energia Gerada tMod2 */
tMod2 = ((irrad +(irrad*(1-fdi)))*0.75*Paaaa*AJDIRRESUL*30.416666667*PotINV);
i=0;
while(consMedio>tMod2){
  nMod+=1;  	
  PotINV =  Math.ceil(nMod*potMod*0.0007);
  ajPlacas =  nMod*potMod*0.001;
  PotINV = Math.floor((ajPlacas+PotINV)/2);
  fdi = (PotINV/ajPlacas).toFixed(2);
  tMod2 = ((irrad +(irrad*(1-fdi)))*0.75*Paaaa*AJDIRRESUL*30.416666667*PotINV);

  i++
}
if(direcao==1){
  direcaoNome= "Norte";
}else if(direcao==2){
  direcaoNome= "Leste ou Oeste";
}else if(direcao==3){
  direcaoNome= "Sul";
}else if(direcao==4){
  direcaoNome= "Sudeste ou Sudoeste";
}else if(direcao==5){
  direcaoNome= "Nordeste ou Noroeste";
}else if(direcao==6){
  direcaoNome= "Horizontal - 0º";
}else { direcaoNome= "Indeterminada - Ajustada para 0º"; }

    //ajPlacas = nMod*potMod;
  alert(
    `Esta Usina, nomeada de ${nomeUsina}, orientada para a direção ${direcaoNome}, com inclinação de ${angulo} Graus, foi projetada para atender o consumo médio mensal de  ${consMedio.toFixed( 2 )} kWh.mês e consumo diário de ${consDia.toFixed( 2 )}Kwh. Considerando a irradiação média-diária-anual de ${irrad} kWh/m².dia, demandará uma potência de geração de ${ajPlacas.toFixed(2)} kWp. Necessitando de ${nMod} módulos de ${potMod} Wp.`); 
     alert(`Segundo Zilles, R. (2012), a potência do Inversor (ou MicroInversores), deve considerar a potência de máxima potência do Gerador e o fator de dimensionamento do inversor (FDI), a fim de minorar as perdas provocadas pelo inversor.\n\nAssim sendo, encontramos a potência do inversor (ou dos inversores somados):\n\nPotência do Inversor = ${PotINV}kWp, que resultará um FDI = ${fdi}. \n\nComo regra geral o FDI = PotInv / Pfv, ficará entre 0,7 (Oversizing, sobrecarregamento ou sobrecarga, overload) e 1,05 (Previsão de aumento futuro de produção), no nossos ensaios. Contudo, cada inversor possui sua indicação de FDI, que varia, em média, de 0,5 até 2. \n\nA área aproximada, necessária para a instalação dos painéis é de ${ArMod.toFixed( 2 )} m².`);
  alert(`Esta usina foi projetada para atender o consumo médio mensal de  ${consMedio.toFixed( 2 )} kWh.mês. \n\nPara esse projeto a estimativa de energia gerada pelos ${nMod} módulos de ${potMod} Wp, associados ao inversor (ou inversores somados), de ${PotINV}kWp, será encontrada em função da fórmula: \n\nMÉDIA DE ENERGIA QUE SERÁ GERADA POR MÊS = (ISDMM (ou HSP) + Ajuste de overside) x ajuste de perdas do sistema (PR) x Ajuste de perdas por angulação x Ajuste de perdas por direção x média anual de dias por mês x potência do inversor = (${irrad.toFixed(2)} + (${irrad.toFixed(2)} x ${1-fdi}) x 0,75 x ${Paaaa.toFixed(2)} x ${AJDIRRESUL.toFixed(2)}x (365/12) x ${PotINV.toFixed(2)} = ${((irrad +(irrad*(1-fdi)))*0.75*Paaaa*AJDIRRESUL*30.416666667*PotINV).toFixed(2)} kWh.mês.`);
  alert(`Se a usina for no solo ou em uma laje, a fim de evitar o sombreamento usamos dois métodos para garantir o distanciamento das fileiras de painéis: \n\nMétodo 01 para mínimo:  D = L x cos@; h = L x sen@; d = (3,5 x h) – D = ${distancia.toFixed( 2 )} m.\n\nMétodo 02 para máximo: d = FS + (3,5 x h) – D, onde FS. d = ${(distancia + 1 ).toFixed(2)} m. `);
  alert("NÃO ESQUEÇA! A USINA É DIMENSIONADA PELO INTERESSE, LOGO, ESSE CALCULO FRIO PODE SER AJUSTADO PARA MAIOR OU MENOR APÓS CONFRONTAR A TÉCNICA AO INTERESSE DO CLIENTE.\n\nCONVERSE BASTANTE ANTES DE INICIAR A COMPRA DOS MATERIAIS!\n\nReferencia: ZILLES, R. et al. Sistemas fotovoltaicos conectados à rede elétrica. 1. ed. São Paulo: Oficina de Textos, 2012. E-book. Disponível em: https://plataforma.bvirtual.com.br. Acesso em: 20 maio 2024.");

}
}

/************************************************* */

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
  