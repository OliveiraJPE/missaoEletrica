//Declaração de variáveis de escopo global
//Variáveis de raiz , Variáveis que recebem de caixas e botões
var registro;
var tabDim;
var nome;
var ERRO;
ERRO =
  "ERR.: DIMENSINAMENTO SEM ERROS. APLICATIVO RECEBEU PARÂMETROS CORRETOS. ";
var ender;
var data;
var depend;
var dependTempo;
var padrao;
var nCondutores1;
var nCondutores2;
var nCondutores3;
var caso;
var caso2;
var caso3;
var selTue;

//Variáveis de dimensões
var area = 0;
var perim = 0;
var perimetroCasa = 0;
var kvaM2 = 0;
var aCasa = 0;
var tensaoC = 0;
var tensaoIlumf = 0;
var tensaoTugf = 0;
var tensaoC1f = 0;
var tensaoC2f = 0;
var tensaoC3f = 0;
var tensaoC4f = 0;
var tensaoC5f = 0;
var tensaoC6f = 0;

var tensaoResIlum1 = 0;
var tensaoResIlum2 = 0;
var tensaoResIlum3 = 0;
var tensaoResIlum4 = 0;
var tensaoResIlum5 = 0;
var tensaoResIlum6 = 0;
var tensaoResIlum7 = 0;
var tensaoResIlum8 = 0;
var tensaoResIlum9 = 0;
var tensaoResTug1 = 0;
var tensaoResTug2 = 0;
var tensaoResTug3 = 0;
var tensaoResTug4 = 0;
var tensaoResTug5 = 0;
var tensaoResTug6 = 0;
var tensaoResTug7 = 0;
var tensaoResTug8 = 0;
var tensaoResTug9 = 0;
var tensaoC1fI = [];
var tensaoC2fI = [];
var tensaoC3fI = [];
var tensaoC4fI = [];
var tensaoC5fI = [];
var tensaoC6fI = [];
var tensaoResC21,
  tensaoResC22,
  tensaoResC23,
  tensaoResC24,
  tensaoResC25,
  tensaoResC26,
  tensaoResC27,
  tensaoResC28,
  tensaoResC29;
var tensaoResC31,
  tensaoResC32,
  tensaoResC33,
  tensaoResC34,
  tensaoResC35,
  tensaoResC36,
  tensaoResC37,
  tensaoResC38,
  tensaoResC39;
var tensaoResC41, tensaoResC42, tensaoResC43, tensaoResC44, tensaoResC45;
var tensaoResC51, tensaoResC52, tensaoResC53, tensaoResC54, tensaoResC55;
var tensaoResC61, tensaoResC62, tensaoResC63, tensaoResC64, tensaoResC65;

var tensaoC1IIlum = 0;
var tensaoC1ITug = 0;
var tensaoC1I = 0;
var tensaoC2I = 0;
var tensaoC3I = 0;
var tensaoC4I = 0;
var tensaoC5I = 0;
var tensaoC6I = 0;

var tensaoIlum = 0;
var tensaoTug = 0;
var tensaoC1 = 0;
var tensaoC2 = 0;
var tensaoC3 = 0;
var tensaoC4 = 0;
var tensaoC5 = 0;
var tensaoC6 = 0;

var quartoP_1 = 0;
var quartoP_2 = 0;
var quartoP_3 = 0;
var quartoP_4 = 0;
var quartoP_5 = 0;
var salaP_1 = 0;
var salaP_2 = 0;
var salaP_3 = 0;
var banheiroP_1 = 0;
var banheiroP_2 = 0;
var banheiroP_3 = 0;
var banheiroP_4 = 0;
var banheiroP_5 = 0;
var banheiroP_6 = 0;
var cozinhaCopaP_1 = 0;
var cozinhaCopaP_2 = 0;
var areaServicoP_1 = 0;
var areaServicoP_2 = 0;
var varandaP_1 = 0;
var varandaP_2 = 0;
var garagemStonPoraoP_1 = 0;
var garagemStonPoraoP_2 = 0;
var terracoSala_FestaArea_LazerP_1 = 0;
var terracoSala_FestaArea_LazerP_2 = 0;
var escritorioBilbioltecaP = 0;

var EscCarga;
var EscCargaf;

var quartoA_1 = 0;
var quartoA_2 = 0;
var quartoA_3 = 0;
var quartoA_4 = 0;
var quartoA_5 = 0;
var salaA_1 = 0;
var salaA_2 = 0;
var salaA_3 = 0;
var banheiroA_1 = 0;
var banheiroA_2 = 0;
var banheiroA_3 = 0;
var banheiroA_4 = 0;
var banheiroA_5 = 0;
var banheiroA_6 = 0;
var cozinhaCopaA_1 = 0;
var cozinhaCopaA_2 = 0;
var areaServicoA_1 = 0;
var areaServicoA_2 = 0;
var varandaA_1 = 0;
var varandaA_2 = 0;
var garagemStonPoraoA_1 = 0;
var garagemStonPoraoA_2 = 0;
var terracoSala_FestaArea_LazerA_1 = 0;
var terracoSala_FestaArea_LazerA_2 = 0;
var escritorioBilbioltecaA = 0;

//Variáveis de quantidades
var tugQuarto_1 = 0;
var tugQuarto_2 = 0;
var tugQuarto_3 = 0;
var tugQuarto_4 = 0;
var tugQuarto_5 = 0;
var tugSala_1 = 0;
var tugSala_2 = 0;
var tugSala_3 = 0;
var tugBanheiro_1 = 0;
var tugBanheiro_2 = 0;
var tugBanheiro_3 = 0;
var tugBanheiro_4 = 0;
var tugBanheiro_5 = 0;
var tugBanheiro_6 = 0;
var tugCozinhaCopa_1 = 0;
var tugCozinhaCopa_2 = 0;
var tugAreaServico_1 = 0;
var tugAreaServico_2 = 0;
var tugVaranda_1 = 0;
var tugVaranda_2 = 0;
var tugGaragemStonPorao_1 = 0;
var tugGaragemStonPorao_2 = 0;
var tugTerracoSala_FestaArea_Lazer_1 = 0;
var tugTerracoSala_FestaArea_Lazer_2 = 0;
var tugEscritorioBilbiolteca = 0;

//Variaveis de Potencia
var potTugQuarto_1 = 0;
var potTugQuarto_2 = 0;
var potTugQuarto_3 = 0;
var potTugQuarto_4 = 0;
var potTugQuarto_5 = 0;
var potTugSala_1 = 0;
var potTugSala_2 = 0;
var potTugSala_3 = 0;
var potTugBanheiro_1 = 0;
var potTugBanheiro_2 = 0;
var potTugBanheiro_3 = 0;
var potTugBanheiro_4 = 0;
var potTugBanheiro_5 = 0;
var potTugBanheiro_6 = 0;
var potTugCozinhaCopa_1 = 0;
var potTugCozinhaCopa_2 = 0;
var potTugAreaServico_1 = 0;
var potTugAreaServico_2 = 0;
var potTugVaranda_1 = 0;
var potTugVaranda_2 = 0;
var potTugGaragemStonPorao_1 = 0;
var potTugGaragemStonPorao_2 = 0;
var potTugTerracoSala_FestaArea_Lazer_1 = 0;
var potTugTerracoSala_FestaArea_Lazer_2 = 0;
var potTugEscritorioBilbiolteca = 0;

var potEsp;
var pot1Esp;

var FPEsp;

var Fagrup;
var Fagrupf;

var distCirc;

var nCarregados;

var condutorCCirc;
var condutorIlumCirc1;
var condutorIlumCirc2;
var condutorIlumCirc3;
var condutorIlumCirc4;
var condutorIlumCirc5;
var condutorIlumCirc6;
var condutorIlumCirc7;
var condutorIlumCirc8;
var condutorIlumCirc9;

var condutorTugCirc1;
var condutorTugCirc2;
var condutorTugCirc3;
var condutorTugCirc4;
var condutorTugCirc5;
var condutorTugCirc6;
var condutorTugCirc7;
var condutorTugCirc8;
var condutorTugCirc9;

var condutorC2Circ1;
var condutorC2Circ2;
var condutorC2Circ3;
var condutorC2Circ4;
var condutorC2Circ5;
var condutorC2Circ6;
var condutorC2Circ7;
var condutorC2Circ8;
var condutorC2Circ9;

var condutorC3Circ1;
var condutorC3Circ2;
var condutorC3Circ3;
var condutorC3Circ4;
var condutorC3Circ5;
var condutorC3Circ6;
var condutorC3Circ7;
var condutorC3Circ8;
var condutorC3Circ9;

var condutorC4Circ1;
var condutorC4Circ2;
var condutorC4Circ3;
var condutorC4Circ4;
var condutorC4Circ5;

var condutorC5Circ1;
var condutorC5Circ2;
var condutorC5Circ3;
var condutorC5Circ4;
var condutorC5Circ5;

var condutorC6Circ1;
var condutorC6Circ2;
var condutorC6Circ3;
var condutorC6Circ4;
var condutorC6Circ5;

var condutorCCircA;
var condutorCCircB;

var disjTue;

var disjIlum1;
var disjIlum2;
var disjIlum3;
var disjIlum4;
var disjIlum5;
var disjIlum6;
var disjIlum7;
var disjIlum8;
var disjIlum9;

var disjTug1;
var disjTug2;
var disjTug3;
var disjTug4;
var disjTug5;
var disjTug6;
var disjTug7;
var disjTug8;
var disjTug9;

var disjTueC21;
var disjTueC22;
var disjTueC23;
var disjTueC24;
var disjTueC25;
var disjTueC26;
var disjTueC27;
var disjTueC28;
var disjTueC29;

var disjTueC31;
var disjTueC32;
var disjTueC33;
var disjTueC34;
var disjTueC35;
var disjTueC36;
var disjTueC37;
var disjTueC38;
var disjTueC39;

var disjTueC41;
var disjTueC42;
var disjTueC43;
var disjTueC44;
var disjTueC45;

var disjTueC51;
var disjTueC52;
var disjTueC53;
var disjTueC54;
var disjTueC55;

var disjTueC61;
var disjTueC62;
var disjTueC63;
var disjTueC64;
var disjTueC65;

var ilumQuarto_1 = 0;
var ilumQuarto_2 = 0;
var ilumQuarto_1 = 0;
var ilumQuarto_2 = 0;
var ilumQuarto_3 = 0;
var ilumQuarto_4 = 0;
var ilumQuarto_5 = 0;
var ilumSala_1 = 0;
var ilumSala_2 = 0;
var ilumSala_3 = 0;
var ilumBanheiro_1 = 0;
var ilumBanheiro_2 = 0;
var ilumBanheiro_3 = 0;
var ilumBanheiro_4 = 0;
var ilumBanheiro_5 = 0;
var ilumBanheiro_6 = 0;
var ilumCozinhaCopa_1 = 0;
var ilumCozinhaCopa_2 = 0;
var ilumAreaServico_1 = 0;
var ilumAreaServico_2 = 0;
var ilumVaranda_1 = 0;
var ilumVaranda_2 = 0;
var ilumGaragemStonPorao_1 = 0;
var ilumGaragemStonPorao_2 = 0;
var ilumTerracoSala_FestaArea_Lazer_1 = 0;
var ilumTerracoSala_FestaArea_Lazer_2 = 0;
var ilumEscritorioBilbiolteca = 0;

//Variáveis de Carga instalada, Demanda de TUE, TUG e ILUMINAÇÃO.

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c6 = 0;
var c5 = 0;

var c2t1 = 0;
var c2t2 = 0;
var c2t3 = 0;
var c2t4 = 0;
var c2t5 = 0;
var c2f = 0;

var c3t1 = 0;
var c3t2 = 0;
var c3t3 = 0;
var c3t4 = 0;
var c3t5 = 0;
var c3f = 0;

var c4t1 = 0;
var c4t2 = 0;
var c4t3 = 0;
var c4t4 = 0;
var c4t5 = 0;
var c4f = 0;

var c5t1 = 0;
var c5t2 = 0;
var c5t3 = 0;
var c5t4 = 0;
var c5t5 = 0;
var c5f = 0;

var c6t1 = 0;
var c6t2 = 0;
var c6t3 = 0;
var c6t4 = 0;
var c6t5 = 0;
var c6f = 0;

var qC2 = 0;
var qC3 = 0;
var qC4 = 0;
var qC6 = 0;
var qC5 = 0;
var qC1Ilum = 0;
var qC1Tug = 0;

var qC2t1 = 0;
var qC3t1 = 0;
var qC4t1 = 0;
var qC6t1 = 0;
var qC5t1 = 0;

var qC2f = 0;
var qC3f = 0;
var qC4f = 0;
var qC6f = 0;
var qC5f = 0;

var qC2t2 = 0;
var qC3t2 = 0;
var qC4t2 = 0;
var qC6t2 = 0;
var qC5t2 = 0;

var qC2t3 = 0;
var qC3t3 = 0;
var qC4t3 = 0;
var qC6t3 = 0;
var qC5t3 = 0;

var qC2t4 = 0;
var qC3t4 = 0;
var qC4t4 = 0;
var qC6t4 = 0;
var qC5t4 = 0;

var qC2t5 = 0;
var qC3t5 = 0;
var qC4t5 = 0;
var qC6t5 = 0;
var qC5t5 = 0;

var iterarIlum = 0;
var iterarTug = 0;
var iterarqC2 = 0;
var iterarqC3 = 0;
var iterarqC4 = 0;
var iterarqC5 = 0;
var iterarqC6 = 0;

var cEsp;
var qCEsp;

var DG;
var DR;
var d1 = 0;
var d2 = 0;
var d3 = 0;
var d4 = 0;
var d5 = 0;
var d6 = 0;

var d2Tipo1 = 0;
var d2Tipo2 = 0;
var d2Tipo3 = 0;
var d2Tipo4 = 0;
var d2Tipo5 = 0;

var d3Tipo1 = 0;
var d3Tipo2 = 0;
var d3Tipo3 = 0;
var d3Tipo4 = 0;
var d3Tipo5 = 0;

var d4Tipo1 = 0;
var d4Tipo2 = 0;
var d4Tipo3 = 0;
var d4Tipo4 = 0;
var d4Tipo5 = 0;

var d5Tipo1 = 0;
var d5Tipo2 = 0;
var d5Tipo3 = 0;
var d5Tipo4 = 0;
var d5Tipo5 = 0;

var d6Tipo1 = 0;
var d6Tipo2 = 0;
var d6Tipo3 = 0;
var d6Tipo4 = 0;
var d6Tipo5 = 0;

//Variaveis de Soma, potencia e demanda.
var numeroTugs = 0;
var potTugs = 0;
var potTugsDem = 0;
var numeroTues = 0;
var potIlum = 0;
var potTotalDem = 0;
var potFinalInst = 0;
var numeroCirc = 0;

//Variáveis da função cases
var retornoCase;
var P = 0;
var A = 0;
var tug = 0;
var potTug = 0;
var ilum = 0;
var iterar = 0;
var iterarCarga = 0;
var somaCirc = 0;

//Calculo direto para maquinas e circuitos
var tabDimCirc;
var nomeCirc;
var nomeTensao = 0;
var nomeCCarregado = 0;
var nomeDistancia = 0;
var nomePotenciaVA = 0;
var nomeFio = 0;
var nomeDisj = 0;
var nomeIB = 0;
var K1 = 1;
var K2 = 1;
var K3 = 1;
var VAkm = 0;
var nomeFio2 = 0;
var nomeFio3 = 0;
var nomeResFio = 0;
var fases;
var nomeTipo = 0;


/************** */
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
function media() {
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
  irrad = Number(window.document.querySelector("#nIrr").value);
  nomeUsina = window.document.querySelector("#nCircf").value;
  potMod = Number(window.document.querySelector("#nCircPotMod").value);
  padrao = Number(window.document.querySelector("#npad").value);

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
      consMedio12) /
      12 +
    consMedio13;

  if (padrao === 1) {
    consMedio = consMedio - 30;
  } else if (padrao === 2) {
    consMedio = consMedio - 50;
  } else if (padrao === 3) {
    consMedio = consMedio - 100;
  }
  consDia = consMedio / 30;
  kWp = consDia / (irrad * 0.75);
  nMod = Math.round((kWp * 1000) / potMod);
  ajPlacas = nMod * potMod;
  areaFoto = Math.round(nMod * 3.15);

  alert(
    "A Usina nomeada de " +
      nomeUsina +
      " projetada para atender o consumo médio mensal de " +
      consMedio.toFixed(2) +
      " kW e consumo diário de " +
      consDia.toFixed(2) +
      " Kw. Considerando a irradiação média de " +
      irrad +
      " kWh/m².dia, demandará uma potência de geração de " +
      kWp.toFixed(2) +
      " kWp. Necessitando de " +
      nMod +
      " Módulos  de " +
      potMod +
      " Wp. O Inversor deve ser de " +
      ajPlacas +
      " Wp (Podendo ser superior ou inferior a esse valor em função de seu DATASHEET. Aconselha-se não variar 20%).\n\nA área aproximada, necessária para a instalação dos painéis é de " +
      areaFoto +
      " m² \n\nAGORA VOCÊ DEVE PESQUISAR AS OPÇÕES DE KITs COM A POTÊNCIA CALCULADA E EM FUNÇÃO DO TIPO DE TELHADO. "
  );
}

/******************** */
function dimensCirc() {
  tabDimCirc = window.document.querySelector("div#fioDisjuntor");
  nomeCirc = window.document.querySelector("input#nCirc").value;
  nomeTipo = window.document.querySelector("input#nCircTipo").value;
  nomeTensao = window.document.querySelector("input#nCircTensao").value;
  nomeCCarregado = window.document.querySelector("input#nCircNCond").value;
  nomeDistancia = window.document.querySelector("input#nCircDist").value;
  nomePotenciaVA = window.document.querySelector("input#nCircPotencia").value;
  K1 = window.document.querySelector("input#nk1").value;
  K2 = window.document.querySelector("input#nk2").value;
  K3 = window.document.querySelector("input#nk3").value;

  if (!nomeCirc) {
    alert("Dê um nome para o Circuito. Ex.: Iluminação, Força, Motor...");
  } else if (!nomePotenciaVA) {
    alert("Escreva um valor de potência em Volt-Amperes. Ex.: 1500VA");
  } else if (!nomeTensao) {
    alert("Escreva um valor de tensão: 110, 127, 220, 380...");
  } else if (!nomeCCarregado) {
    alert("Escreva o tipo de circuito: 2, 3 ou 4");
  } else if (!nomeDistancia) {
    alert("Escreva a distancia entre a carga e o quadro de luz e/ou força.");
  }

  if (nomeCCarregado == 1) {
    fases = "Monofásico";
    nomeIB = nomePotenciaVA / (nomeTensao * K1 * K2 * K3);
    VAkm = (nomeTensao * 0.04) / (nomeIB * (nomeDistancia / 1000));
    nomeResFio =
      (0.0345 * nomePotenciaVA * nomeDistancia) /
      (0.04 * nomeTensao * nomeTensao);

    /******* */
    if (nomeIB < 6) {
      nomeDisj = Number.parseFloat(6);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 10) {
      nomeDisj = Number.parseFloat(10);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 16) {
      nomeDisj = Number.parseFloat(16);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 20) {
      nomeDisj = Number.parseFloat(20);
      nomeFio = Number.parseFloat(2.5);
    } else if (nomeIB < 25) {
      nomeDisj = Number.parseFloat(25);
      nomeFio = Number.parseFloat(4);
    } else if (nomeIB < 32) {
      nomeDisj = Number.parseFloat(32);
      nomeFio = Number.parseFloat(6);
    } else if (nomeIB < 40) {
      nomeDisj = Number.parseFloat(40);
      nomeFio = Number.parseFloat(6);
    } else if (nomeIB < 50) {
      nomeDisj = Number.parseFloat(50);
      nomeFio = Number.parseFloat(10);
    } else if (nomeIB < 63) {
      nomeDisj = Number.parseFloat(63);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 70) {
      nomeDisj = Number.parseFloat(70);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 80) {
      nomeDisj = Number.parseFloat(80);
      nomeFio = Number.parseFloat(25);
    } else if (nomeIB < 90) {
      nomeDisj = Number.parseFloat(90);
      nomeFio = Number.parseFloat(25);
    } else if (nomeIB < 100) {
      nomeDisj = Number.parseFloat(100);
      nomeFio = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Ampacidade - Condutor maior do que 25mm², procure um Técnico ou refaça a operação ou Disjuntor maior do que  a capacidade do condutor de 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeTipo == 2) {
      if (nomeFio == 1.5) {
        nomeFio = 2.5;
      }
    }
    if (VAkm >= 27.4) {
      nomeFio2 = Number.parseFloat(1.5);
    } else if (VAkm >= 16.8) {
      nomeFio2 = Number.parseFloat(2.5);
    } else if (VAkm >= 10.5) {
      nomeFio2 = Number.parseFloat(4);
    } else if (VAkm >= 7) {
      nomeFio2 = Number.parseFloat(6);
    } else if (VAkm >= 4.2) {
      nomeFio2 = Number.parseFloat(10);
    } else if (VAkm >= 2.7) {
      nomeFio2 = Number.parseFloat(16);
    } else if (VAkm >= 1.72) {
      nomeFio2 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: V/A.km - Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeResFio <= 1.5) {
      nomeFio3 = Number.parseFloat(1.5);
    } else if (nomeResFio <= 2.5) {
      nomeFio3 = Number.parseFloat(2.5);
    } else if (nomeResFio <= 4) {
      nomeFio3 = Number.parseFloat(4);
    } else if (nomeResFio <= 6) {
      nomeFio3 = Number.parseFloat(6);
    } else if (nomeResFio <= 10) {
      nomeFio3 = Number.parseFloat(10);
    } else if (nomeResFio <= 16) {
      nomeFio3 = Number.parseFloat(16);
    } else if (nomeResFio <= 25) {
      nomeFio3 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Watt x metro -Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if(nomeDisj==0||nomeFio==0|| nomeFio2==0||nomeFio3==0){
        alert("ERRO: Condutor superou 25mm² em, pelo menos, um dos critérios de dimensionamento. Consulte um técnico ou refaça o dimensionamento.")}
        else{
    alert(
      `ATENÇÃO: A NBR 5410 indica que o menor condutor para iluminação é o de 1.5mm² e para força o de 2.5mm².\n\nEste dimensionamento considera: Condutores e cabos de cobre isolados de PVC 70, em eletroduto magnético embutido em alvenaria à 30ºC(ar), 20ºC(solo) e queda de tensão entre o quadro e a carga de 4%. \n\nPara o Circuito nomeado de ${nomeCirc}, com ${nomePotenciaVA} VA e a corrente de projeto IB = ${nomeIB} A, ${fases} , com ${nomeDistancia} metros de comprimento entre o quadro e a carga, pelo critério de máxima corrente (QUE NÃO CONSIDERA DISTÂNCIA NO CALCULO), encontramos: ${nomeFio} mm². Pelo critério de queda de tensão V/A.km, encontramos: ${nomeFio2} mm². Já pelo critério de watt x metros, encontramos: ${nomeFio3} mm² e Disjuntor termo magnético de curva "C" : ${nomeDisj}A, para o circuito , quando submetida a tensão de ${nomeTensao} Volts. \n\nUTILIZE O MAIOR CONDUTOR ENCONTRADO.`
    );}

  } else if (nomeCCarregado == 2) {
    fases = "Bifásico";
    nomeIB = nomePotenciaVA / (nomeTensao * K1 * K2 * K3);
    VAkm = (nomeTensao * 0.04) / (nomeIB * (nomeDistancia / 1000));
    nomeResFio =
      (0.0345 * nomePotenciaVA * nomeDistancia) /
      (0.04 * nomeTensao * nomeTensao);

    if (nomeIB < 6) {
      nomeDisj = Number.parseFloat(6);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 10) {
      nomeDisj = Number.parseFloat(10);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 16) {
      nomeDisj = Number.parseFloat(16);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 20) {
      nomeDisj = Number.parseFloat(20);
      nomeFio = Number.parseFloat(2.5);
    } else if (nomeIB < 25) {
      nomeDisj = Number.parseFloat(25);
      nomeFio = Number.parseFloat(4);
    } else if (nomeIB < 32) {
      nomeDisj = Number.parseFloat(32);
      nomeFio = Number.parseFloat(6);
    } else if (nomeIB < 40) {
      nomeDisj = Number.parseFloat(40);
      nomeFio = Number.parseFloat(6);
    } else if (nomeIB < 50) {
      nomeDisj = Number.parseFloat(50);
      nomeFio = Number.parseFloat(10);
    } else if (nomeIB < 63) {
      nomeDisj = Number.parseFloat(63);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 70) {
      nomeDisj = Number.parseFloat(70);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 80) {
      nomeDisj = Number.parseFloat(80);
      nomeFio = Number.parseFloat(25);
    } else if (nomeIB < 90) {
      nomeDisj = Number.parseFloat(90);
      nomeFio = Number.parseFloat(25);
    } else if (nomeIB < 100) {
      nomeDisj = Number.parseFloat(100);
      nomeFio = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Ampacidade - Condutor maior do que 25mm², procure um Técnico ou refaça a operação ou Disjuntor maior do que  a capacidade do condutor de 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeTipo == 2) {
      if (nomeFio == 1.5) {
        nomeFio = 2.5;
      }
    }

    if (VAkm >= 27.4) {
      nomeFio2 = Number.parseFloat(1.5);
    } else if (VAkm >= 16.8) {
      nomeFio2 = Number.parseFloat(2.5);
    } else if (VAkm >= 10.5) {
      nomeFio2 = Number.parseFloat(4);
    } else if (VAkm >= 7) {
      nomeFio2 = Number.parseFloat(6);
    } else if (VAkm >= 4.2) {
      nomeFio2 = Number.parseFloat(10);
    } else if (VAkm >= 2.7) {
      nomeFio2 = Number.parseFloat(16);
    } else if (VAkm >= 1.72) {
      nomeFio2 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: V/A.km - Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeResFio <= 1.5) {
      nomeFio3 = Number.parseFloat(1.5);
    } else if (nomeResFio <= 2.5) {
      nomeFio3 = Number.parseFloat(2.5);
    } else if (nomeResFio <= 4) {
      nomeFio3 = Number.parseFloat(4);
    } else if (nomeResFio <= 6) {
      nomeFio3 = Number.parseFloat(6);
    } else if (nomeResFio <= 10) {
      nomeFio3 = Number.parseFloat(10);
    } else if (nomeResFio <= 16) {
      nomeFio3 = Number.parseFloat(16);
    } else if (nomeResFio <= 25) {
      nomeFio3 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Watt x metro -Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    
    if(nomeDisj==0||nomeFio==0|| nomeFio2==0||nomeFio3==0){
        alert("ERRO: Condutor superou 25mm² em, pelo menos, um dos critérios de dimensionamento. Consulte um técnico ou refaça o dimensionamento.")}
        else{
    alert(
      `ATENÇÃO: A NBR 5410 indica que o menor condutor para iluminação é o de 1.5mm² e para força o de 2.5mm².\n\nEste dimensionamento considera: Condutores e cabos de cobre isolados de PVC 70, em eletroduto magnético embutido em alvenaria à 30ºC(ar), 20ºC(solo) e queda de tensão entre o quadro e a carga de 4%. \n\nPara o Circuito nomeado de ${nomeCirc}, com ${nomePotenciaVA} VA e a corrente de projeto IB = ${nomeIB} A, ${fases} , com ${nomeDistancia} metros de comprimento entre o quadro e a carga, pelo critério de máxima corrente (QUE NÃO CONSIDERA DISTÂNCIA NO CALCULO), encontramos: ${nomeFio} mm². Pelo critério de queda de tensão V/A.km, encontramos: ${nomeFio2} mm². Já pelo critério de watt x metros, encontramos: ${nomeFio3} mm² e Disjuntor termo magnético de curva "C" : ${nomeDisj}A, para o circuito , quando submetida a tensão de ${nomeTensao} Volts. \n\nUTILIZE O MAIOR CONDUTOR ENCONTRADO.`
    );}

  } else if (nomeCCarregado == 3) {
    fases = "Bifásico + Neutro";
    nomeIB = nomePotenciaVA / (nomeTensao * Math.sqrt(3) * K1 * K2 * K3 * 0.86);
    VAkm = (nomeTensao * 0.04) / (nomeIB * (nomeDistancia / 1000));
    nomeResFio =
      (0.0298 * nomePotenciaVA * nomeDistancia) /
      (0.04 * nomeTensao * nomeTensao);

    if (nomeIB < 6) {
      nomeDisj = Number.parseFloat(6);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 10) {
      nomeDisj = Number.parseFloat(10);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 16) {
      nomeDisj = Number.parseFloat(16);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 20) {
      nomeDisj = Number.parseFloat(20);
      nomeFio = Number.parseFloat(2.5);
    } else if (nomeIB < 25) {
      nomeDisj = Number.parseFloat(25);
      nomeFio = Number.parseFloat(4);
    } else if (nomeIB < 32) {
      nomeDisj = Number.parseFloat(32);
      nomeFio = Number.parseFloat(6);
    } else if (nomeIB < 40) {
      nomeDisj = Number.parseFloat(40);
      nomeFio = Number.parseFloat(10);
    } else if (nomeIB < 50) {
      nomeDisj = Number.parseFloat(50);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 63) {
      nomeDisj = Number.parseFloat(63);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 70) {
      nomeDisj = Number.parseFloat(70);
      nomeFio = Number.parseFloat(25);
    } else if (nomeIB < 80) {
      nomeDisj = Number.parseFloat(80);
      nomeFio = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Ampacidade - Condutor maior do que 25mm², procure um Técnico ou refaça a operação ou Disjuntor maior do que  a capacidade do condutor de 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeTipo == 2) {
      if (nomeFio == 1.5) {
        nomeFio = 2.5;
      }
    }

    if (VAkm >= 27.4) {
      nomeFio2 = Number.parseFloat(1.5);
    } else if (VAkm >= 16.8) {
      nomeFio2 = Number.parseFloat(2.5);
    } else if (VAkm >= 10.5) {
      nomeFio2 = Number.parseFloat(4);
    } else if (VAkm >= 7) {
      nomeFio2 = Number.parseFloat(6);
    } else if (VAkm >= 4.2) {
      nomeFio2 = Number.parseFloat(10);
    } else if (VAkm >= 2.7) {
      nomeFio2 = Number.parseFloat(16);
    } else if (VAkm >= 1.72) {
      nomeFio2 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: V/A.km - Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeResFio <= 1.5) {
      nomeFio3 = Number.parseFloat(1.5);
    } else if (nomeResFio <= 2.5) {
      nomeFio3 = Number.parseFloat(2.5);
    } else if (nomeResFio <= 4) {
      nomeFio3 = Number.parseFloat(4);
    } else if (nomeResFio <= 6) {
      nomeFio3 = Number.parseFloat(6);
    } else if (nomeResFio <= 10) {
      nomeFio3 = Number.parseFloat(10);
    } else if (nomeResFio <= 16) {
      nomeFio3 = Number.parseFloat(16);
    } else if (nomeResFio <= 25) {
      nomeFio3 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Watt x metro -Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    
    if(nomeDisj==0||nomeFio==0|| nomeFio2==0||nomeFio3==0){
        alert("ERRO: Condutor superou 25mm² em, pelo menos, um dos critérios de dimensionamento. Consulte um técnico ou refaça o dimensionamento.")}
        else{
    alert(
      `ATENÇÃO: A NBR 5410 indica que o menor condutor para iluminação é o de 1.5mm² e para força o de 2.5mm².\n\nEste dimensionamento considera: Condutores e cabos de cobre isolados de PVC 70, em eletroduto magnético embutido em alvenaria à 30ºC(ar), 20ºC(solo) e queda de tensão entre o quadro e a carga de 4%. \n\nPara o Circuito nomeado de ${nomeCirc}, com ${nomePotenciaVA} VA e a corrente de projeto IB = ${nomeIB} A, ${fases} , com ${nomeDistancia} metros de comprimento entre o quadro e a carga, pelo critério de máxima corrente (QUE NÃO CONSIDERA DISTÂNCIA NO CALCULO), encontramos: ${nomeFio} mm². Pelo critério de queda de tensão V/A.km, encontramos: ${nomeFio2} mm². Já pelo critério de watt x metros, encontramos: ${nomeFio3} mm² e Disjuntor termo magnético de curva "C" : ${nomeDisj}A, para o circuito , quando submetida a tensão de ${nomeTensao} Volts. \n\nUTILIZE O MAIOR CONDUTOR ENCONTRADO.`
    );}

  } else if (nomeCCarregado == 4) {
    fases = "trifásico";
    nomeIB = nomePotenciaVA / (nomeTensao * Math.sqrt(3) * K1 * K2 * K3);
    VAkm = (nomeTensao * 0.04) / (nomeIB * (nomeDistancia / 1000));
    nomeResFio =
      (0.0298 * nomePotenciaVA * nomeDistancia) /
      (0.04 * nomeTensao * nomeTensao);

    if (nomeIB < 6) {
      nomeDisj = Number.parseFloat(6);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 10) {
      nomeDisj = Number.parseFloat(10);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 16) {
      nomeDisj = Number.parseFloat(16);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 20) {
      nomeDisj = Number.parseFloat(20);
      nomeFio = Number.parseFloat(2.5);
    } else if (nomeIB < 25) {
      nomeDisj = Number.parseFloat(25);
      nomeFio = Number.parseFloat(4);
    } else if (nomeIB < 32) {
      nomeDisj = Number.parseFloat(32);
      nomeFio = Number.parseFloat(6);
    } else if (nomeIB < 40) {
      nomeDisj = Number.parseFloat(40);
      nomeFio = Number.parseFloat(10);
    } else if (nomeIB < 50) {
      nomeDisj = Number.parseFloat(50);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 63) {
      nomeDisj = Number.parseFloat(63);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 70) {
      nomeDisj = Number.parseFloat(70);
      nomeFio = Number.parseFloat(25);
    } else if (nomeIB < 80) {
      nomeDisj = Number.parseFloat(80);
      nomeFio = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Ampacidade - Condutor maior do que 25mm², procure um Técnico ou refaça a operação ou Disjuntor maior do que  a capacidade do condutor de 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeTipo == 2) {
      if (nomeFio == 1.5) {
        nomeFio = 2.5;
      }
    }

    if (VAkm >= 27.4) {
      nomeFio2 = Number.parseFloat(1.5);
    } else if (VAkm >= 16.8) {
      nomeFio2 = Number.parseFloat(2.5);
    } else if (VAkm >= 10.5) {
      nomeFio2 = Number.parseFloat(4);
    } else if (VAkm >= 7) {
      nomeFio2 = Number.parseFloat(6);
    } else if (VAkm >= 4.2) {
      nomeFio2 = Number.parseFloat(10);
    } else if (VAkm >= 2.7) {
      nomeFio2 = Number.parseFloat(16);
    } else if (VAkm >= 1.72) {
      nomeFio2 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: V/A.km - Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeResFio <= 1.5) {
      nomeFio3 = Number.parseFloat(1.5);
    } else if (nomeResFio <= 2.5) {
      nomeFio3 = Number.parseFloat(2.5);
    } else if (nomeResFio <= 4) {
      nomeFio3 = Number.parseFloat(4);
    } else if (nomeResFio <= 6) {
      nomeFio3 = Number.parseFloat(6);
    } else if (nomeResFio <= 10) {
      nomeFio3 = Number.parseFloat(10);
    } else if (nomeResFio <= 16) {
      nomeFio3 = Number.parseFloat(16);
    } else if (nomeResFio <= 25) {
      nomeFio3 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Watt x metro -Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

   
    if(nomeDisj==0||nomeFio==0|| nomeFio2==0||nomeFio3==0){
        alert("ERRO: Condutor superou 25mm² em, pelo menos, um dos critérios de dimensionamento. Consulte um técnico ou refaça o dimensionamento.")}
        else{
    alert(
      `ATENÇÃO: A NBR 5410 indica que o menor condutor para iluminação é o de 1.5mm² e para força o de 2.5mm².\n\nEste dimensionamento considera: Condutores e cabos de cobre isolados de PVC 70, em eletroduto magnético embutido em alvenaria à 30ºC(ar), 20ºC(solo) e queda de tensão entre o quadro e a carga de 4%. \n\nPara o Circuito nomeado de ${nomeCirc}, com ${nomePotenciaVA} VA e a corrente de projeto IB = ${nomeIB} A, ${fases} , com ${nomeDistancia} metros de comprimento entre o quadro e a carga, pelo critério de máxima corrente (QUE NÃO CONSIDERA DISTÂNCIA NO CALCULO), encontramos: ${nomeFio} mm². Pelo critério de queda de tensão V/A.km, encontramos: ${nomeFio2} mm². Já pelo critério de watt x metros, encontramos: ${nomeFio3} mm² e Disjuntor termo magnético de curva "C" : ${nomeDisj}A, para o circuito , quando submetida a tensão de ${nomeTensao} Volts. \n\nUTILIZE O MAIOR CONDUTOR ENCONTRADO.`
    );}

  } else if (nomeCCarregado == 5) {
    // TODO document why this block is empty
    fases = "trifásico + neutro";
    nomeIB = nomePotenciaVA / (nomeTensao * Math.sqrt(3) * K1 * K2 * K3 * 0.86);
    VAkm = (nomeTensao * 0.04) / (nomeIB * (nomeDistancia / 1000));
    nomeResFio =
      (0.0298 * nomePotenciaVA * nomeDistancia) /
      (0.04 * nomeTensao * nomeTensao);

    if (nomeIB < 6) {
      nomeDisj = Number.parseFloat(6);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 10) {
      nomeDisj = Number.parseFloat(10);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 16) {
      nomeDisj = Number.parseFloat(16);
      nomeFio = Number.parseFloat(1.5);
    } else if (nomeIB < 20) {
      nomeDisj = Number.parseFloat(20);
      nomeFio = Number.parseFloat(2.5);
    } else if (nomeIB < 25) {
      nomeDisj = Number.parseFloat(25);
      nomeFio = Number.parseFloat(4);
    } else if (nomeIB < 32) {
      nomeDisj = Number.parseFloat(32);
      nomeFio = Number.parseFloat(6);
    } else if (nomeIB < 40) {
      nomeDisj = Number.parseFloat(40);
      nomeFio = Number.parseFloat(10);
    } else if (nomeIB < 50) {
      nomeDisj = Number.parseFloat(50);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 63) {
      nomeDisj = Number.parseFloat(63);
      nomeFio = Number.parseFloat(16);
    } else if (nomeIB < 70) {
      nomeDisj = Number.parseFloat(70);
      nomeFio = Number.parseFloat(25);
    } else if (nomeIB < 80) {
      nomeDisj = Number.parseFloat(80);
      nomeFio = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Ampacidade - Condutor maior do que 25mm², procure um Técnico ou refaça a operação ou Disjuntor maior do que  a capacidade do condutor de 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeTipo == 2) {
      if (nomeFio == 1.5) {
        nomeFio = 2.5;
      }
    }

    if (VAkm >= 27.4) {
      nomeFio2 = Number.parseFloat(1.5);
    } else if (VAkm >= 16.8) {
      nomeFio2 = Number.parseFloat(2.5);
    } else if (VAkm >= 10.5) {
      nomeFio2 = Number.parseFloat(4);
    } else if (VAkm >= 7) {
      nomeFio2 = Number.parseFloat(6);
    } else if (VAkm >= 4.2) {
      nomeFio2 = Number.parseFloat(10);
    } else if (VAkm >= 2.7) {
      nomeFio2 = Number.parseFloat(16);
    } else if (VAkm >= 1.72) {
      nomeFio2 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: V/A.km - Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

    if (nomeResFio <= 1.5) {
      nomeFio3 = Number.parseFloat(1.5);
    } else if (nomeResFio <= 2.5) {
      nomeFio3 = Number.parseFloat(2.5);
    } else if (nomeResFio <= 4) {
      nomeFio3 = Number.parseFloat(4);
    } else if (nomeResFio <= 6) {
      nomeFio3 = Number.parseFloat(6);
    } else if (nomeResFio <= 10) {
      nomeFio3 = Number.parseFloat(10);
    } else if (nomeResFio <= 16) {
      nomeFio3 = Number.parseFloat(16);
    } else if (nomeResFio <= 25) {
      nomeFio3 = Number.parseFloat(25);
    } else {
      alert(
        "ERRO: Watt x metro -Condutor maior do que 25mm², procure um Técnico ou refaça a operação"
      );
      nomeDisj = Number.parseFloat(0);
      nomeFio = Number.parseFloat(0);
      nomeFio2 = Number.parseFloat(0);
      nomeFio3 = Number.parseFloat(0);
    }

   
    if(nomeDisj==0||nomeFio==0|| nomeFio2==0||nomeFio3==0){
        alert("ERRO: Condutor superou 25mm² em, pelo menos, um dos critérios de dimensionamento. Consulte um técnico ou refaça o dimensionamento.")}
        else{
    alert(
      `ATENÇÃO: A NBR 5410 indica que o menor condutor para iluminação é o de 1.5mm² e para força o de 2.5mm².\n\nEste dimensionamento considera: Condutores e cabos de cobre isolados de PVC 70, em eletroduto magnético embutido em alvenaria à 30ºC(ar), 20ºC(solo) e queda de tensão entre o quadro e a carga de 4%. \n\nPara o Circuito nomeado de ${nomeCirc}, com ${nomePotenciaVA} VA e a corrente de projeto IB = ${nomeIB} A, ${fases} , com ${nomeDistancia} metros de comprimento entre o quadro e a carga, pelo critério de máxima corrente (QUE NÃO CONSIDERA DISTÂNCIA NO CALCULO), encontramos: ${nomeFio} mm². Pelo critério de queda de tensão V/A.km, encontramos: ${nomeFio2} mm². Já pelo critério de watt x metros, encontramos: ${nomeFio3} mm² e Disjuntor termo magnético de curva "C" : ${nomeDisj}A, para o circuito , quando submetida a tensão de ${nomeTensao} Volts. \n\nUTILIZE O MAIOR CONDUTOR ENCONTRADO.`
    );}
    
  } else {
    alert("ERRO: refaça a operação");
  }
}

//p16 chama função de dimensionamento
//cria caixa de identificação com validações
function dimens() {
  tabDim = window.document.querySelector("div#conteudo");/*#tabDim*/
  nome = window.document.querySelector("#nome");
  ender = window.document.querySelector("input#ender");
  data = window.document.querySelector("input#data");
  depend = window.document.querySelector("input#depend");
  validaNome();
}
function validaNome() {
  if (!nome.value) {
    alert(
      "Preencha com seu primeiro nome e somente depois pressione 'Continuar'."
    );
  } else if (!ender.value) {
    alert(
      "Preencha com sua Cidade/Estado e somente depois pressione 'Continuar'."
    );
  } else if (!data.value) {
    alert("Preencha com uma data e somente depois pressione 'Continuar'.");
  } else if (!depend.value) {
    alert(
      "Preencha com o número de dependências e somente depois pressione 'Continuar'."
    );
  } else {
    continua();
  }
}

function continua() {
  //Cria caixas para receber dimensões de cada comodo.
  //Incluir TUGs e Iluminação
  tabDim.innerHTML = `<h3>Cálculo de demanda de Iluminação e TUGs.</h3>`;
  tabDim.innerHTML += `<h4>Informe as dimensões da dependência.</h4>

        <form action="">
    <fieldset>
    <legend>DEPENDÊNCIA</legend>
            <select name="selMenu2" id="selMenu2">		
                <option class="op" value=0>Selecione</option>
                <option class="op" value=1>Quarto_1</option>
                <option class="op" value=2>Quarto_2</option>
                <option class="op" value=3>Quarto_3</option>
                <option class="op" value=4>Quarto_4</option>
                <option class="op" value=5>Quarto_5</option>
                <option class="op" value=6>Sala_1</option>
                <option class="op" value=7>Sala_2</option>
                <option class="op" value=8>Sala_3</option>
                <option class="op" value=9>Banheiro_1</option>
                <option class="op" value=10>Banheiro_2</option>
                <option class="op" value=11>Banheiro_3</option>
                <option class="op" value=12>Banheiro_4</option>
                <option class="op" value=13>Banheiro_5</option>
                <option class="op" value=14>Banheiro_6</option>
                <option class="op" value=15>Cozinha/Copa_1</option>
                <option class="op" value=16>Cozinha/Copa_2</option>
                <option class="op" value=17>Área_Serviço_1</option>
                <option class="op" value=18>Área_Serviço_2</option>
                <option class="op" value=19>Varanda_1</option>
                <option class="op" value=20>Varanda_2</option>
                <option class="op" value=21>Garagem/sóton/porão_1</option>
                <option class="op" value=22>Garagem/sóton/porão_2</option>
                <option class="op" value=23>Terraço/Sala_Festa/Área_Lazer_1</option>
                <option class="op" value=24>Terraço/Sala_Festa/Área_Lazer_2</option>
                <option class="op" value=25>Escritório/Bilbiolteca</option>
            </select>
            </fieldset>
            </form>
            <br><br>
        
        <form action="">
    <fieldset>
    <legend>Área da dependência em 'm²'</legend>
            <input type="number" name="area" id="area"> 
            </fieldset>
            </form>
            <br><br>
        
        <form action="">
    <fieldset>
    <legend>Perímetro da dependência em metros</legend>     
         <label for="perim"><input type="number" name="perim" id="perim">
         </fieldset>
         </form>    
         <br><br>
        

<input type="button" name="incluir" id="incluir" value="Incuir Área e Perímetro" onClick="rodarIncluir()">`;
}
function rodarIncluir() {
  dependTempo = window.document.querySelector("#selMenu2");
  caso = dependTempo.options[dependTempo.selectedIndex].value;

  //Seleção de Tug e Iluminação
  switch (caso) {
    case "0":
      alert(
        "Selecione uma dependência e depois 'Incluir'. Ao terminar as inclusões click em 'Calcular'."
      );
      break;
    //1 até 5 quarto.
    case "1":
      retornoCase = cases_5();
      tugQuarto_1 = retornoCase.Rtug;
      potTugQuarto_1 = retornoCase.RpotTug;
      ilumQuarto_1 = retornoCase.Rilum;
      quartoA_1 = retornoCase.RA;
      quartoP_1 = retornoCase.RP;
      tabDim.innerHTML += `<p> Quarto incluido!</p>`;
      break;
    case "2":
      retornoCase = cases_5();
      tugQuarto_2 = retornoCase.Rtug;
      potTugQuarto_2 = retornoCase.RpotTug;
      ilumQuarto_2 = retornoCase.Rilum;
      quartoA_2 = retornoCase.RA;
      quartoP_2 = retornoCase.RP;
      tabDim.innerHTML += `<p> Quarto incluido!</p>`;
      break;
    case "3":
      retornoCase = cases_5();
      tugQuarto_3 = retornoCase.Rtug;
      potTugQuarto_3 = retornoCase.RpotTug;
      ilumQuarto_3 = retornoCase.Rilum;
      quartoA_3 = retornoCase.RA;
      quartoP_3 = retornoCase.RP;
      tabDim.innerHTML += `<p> Quarto incluido!</p>`;
      break;
    case "4":
      retornoCase = cases_5();
      tugQuarto_4 = retornoCase.Rtug;
      potTugQuarto_4 = retornoCase.RpotTug;
      ilumQuarto_4 = retornoCase.Rilum;
      quartoA_4 = retornoCase.RA;
      quartoP_4 = retornoCase.RP;
      tabDim.innerHTML += `<p> Quarto incluido!</p>`;
      break;
    case "5":
      retornoCase = cases_5();
      tugQuarto_5 = retornoCase.Rtug;
      potTugQuarto_5 = retornoCase.RpotTug;
      ilumQuarto_5 = retornoCase.Rilum;
      quartoA_5 = retornoCase.RA;
      quartoP_5 = retornoCase.RP;
      tabDim.innerHTML += `<p> Quarto incluido!</p>`;
      break;
    //6 até 8 sala
    case "6":
      retornoCase = cases_5();
      tugSala_1 = retornoCase.Rtug;
      potTugSala_1 = retornoCase.RpotTug;
      ilumSala_1 = retornoCase.Rilum;
      salaA_1 = retornoCase.RA;
      salaP_1 = retornoCase.RP;
      tabDim.innerHTML += `<p> Sala incluido!</p>`;
      break;
    case "7":
      retornoCase = cases_5();
      tugSala_2 = retornoCase.Rtug;
      potTugSala_2 = retornoCase.RpotTug;
      ilumSala_2 = retornoCase.Rilum;
      salaA_2 = retornoCase.RA;
      salaP_2 = retornoCase.RP;
      tabDim.innerHTML += `<p> Sala incluido!</p>`;
      break;
    case "8":
      retornoCase = cases_5();
      tugSala_3 = retornoCase.Rtug;
      potTugSala_3 = retornoCase.RpotTug;
      ilumSala_3 = retornoCase.Rilum;
      salaA_3 = retornoCase.RA;
      salaP_3 = retornoCase.RP;
      tabDim.innerHTML += `<p> Sala incluido!</p>`;
      break;
    //9 até 14 banheiro
    case "9":
      retornoCase = cases_35();
      tugBanheiro_1 = retornoCase.Rtug;
      potTugBanheiro_1 = retornoCase.RpotTug;
      ilumBanheiro_1 = retornoCase.Rilum;
      banheiroA_1 = retornoCase.RA;
      banheiroP_1 = retornoCase.RP;
      tabDim.innerHTML += `<p> Banheiro incluido!</p>`;
      break;
    case "10":
      retornoCase = cases_35();
      tugBanheiro_2 = retornoCase.Rtug;
      potTugBanheiro_2 = retornoCase.RpotTug;
      ilumBanheiro_2 = retornoCase.Rilum;
      banheiroA_2 = retornoCase.RA;
      banheiroP_2 = retornoCase.RP;
      tabDim.innerHTML += `<p> Banheiro incluido!</p>`;
      break;
    case "11":
      retornoCase = cases_35();
      tugBanheiro_3 = retornoCase.Rtug;
      potTugBanheiro_3 = retornoCase.RpotTug;
      ilumBanheiro_3 = retornoCase.Rilum;
      banheiroA_3 = retornoCase.RA;
      banheiroP_3 = retornoCase.RP;
      tabDim.innerHTML += `<p> Banheiro incluido!</p>`;
      break;
    case "12":
      retornoCase = cases_35();
      tugBanheiro_4 = retornoCase.Rtug;
      potTugBanheiro_4 = retornoCase.RpotTug;
      ilumBanheiro_4 = retornoCase.Rilum;
      banheiroA_4 = retornoCase.RA;
      banheiroP_4 = retornoCase.RP;
      tabDim.innerHTML += `<p> Banheiro incluido!</p>`;
      break;
    case "13":
      retornoCase = cases_35();
      tugBanheiro_5 = retornoCase.Rtug;
      potTugBanheiro_5 = retornoCase.RpotTug;
      ilumBanheiro_5 = retornoCase.Rilum;
      banheiroA_5 = retornoCase.RA;
      banheiroP_5 = retornoCase.RP;
      tabDim.innerHTML += `<p> Banheiro incluido!</p>`;
      break;
    case "14":
      retornoCase = cases_35();
      tugBanheiro_6 = retornoCase.Rtug;
      potTugBanheiro_6 = retornoCase.RpotTug;
      ilumBanheiro_6 = retornoCase.Rilum;
      banheiroA_6 = retornoCase.RA;
      banheiroP_6 = retornoCase.RP;
      tabDim.innerHTML += `<p> Banheiro incluido!</p>`;
      break;
    //15 até 16 cozinha
    case "15":
      retornoCase = cases_35();
      tugCozinhaCopa_1 = retornoCase.Rtug;
      potTugCozinhaCopa_1 = retornoCase.RpotTug;
      ilumCozinhaCopa_1 = retornoCase.Rilum;
      cozinhaCopaA_1 = retornoCase.RA;
      cozinhaCopaP_1 = retornoCase.RP;
      tabDim.innerHTML += `<p> Copa/Cozinha incluido!</p>`;
      break;
    case "16":
      retornoCase = cases_35();
      tugCozinhaCopa_2 = retornoCase.Rtug;
      potTugCozinhaCopa_2 = retornoCase.RpotTug;
      ilumCozinhaCopa_2 = retornoCase.Rilum;
      cozinhaCopaA_2 = retornoCase.RA;
      cozinhaCopaP_2 = retornoCase.RP;
      tabDim.innerHTML += `<p> Copa/Cozinha incluido!</p>`;
      break;

    //17 até 18 Area de serviço
    case "17":
      retornoCase = cases_35();
      tugAreaServico_1 = retornoCase.Rtug;
      potTugAreaServico_1 = retornoCase.RpotTug;
      ilumAreaServico_1 = retornoCase.Rilum;
      areaServicoA_1 = retornoCase.RA;
      areaServicoP_1 = retornoCase.RP;
      tabDim.innerHTML += `<p> Área de serviço incluido!</p>`;
      break;
    case "18":
      retornoCase = cases_35();
      tugAreaServico_2 = retornoCase.Rtug;
      potTugAreaServico_2 = retornoCase.RpotTug;
      ilumAreaServico_2 = retornoCase.Rilum;
      areaServicoA_2 = retornoCase.RA;
      areaServicoP_2 = retornoCase.RP;
      tabDim.innerHTML += `<p> Área de serviço incluido!</p>`;
      break;
    //19 ate 20 varanda
    case "19":
      retornoCase = cases_5();
      tugVaranda_1 = retornoCase.Rtug;
      potTugVaranda_1 = retornoCase.RpotTug;
      ilumVaranda_1 = retornoCase.Rilum;
      varandaA_1 = retornoCase.RA;
      varandaP_1 = retornoCase.RP;
      tabDim.innerHTML += `<p> Varanda incluido!</p>`;
      break;
    case "20":
      retornoCase = cases_5();
      tugVaranda_2 = retornoCase.Rtug;
      potTugVaranda_2 = retornoCase.RpotTug;
      ilumVaranda_2 = retornoCase.Rilum;
      varandaA_2 = retornoCase.RA;
      varandaP_2 = retornoCase.RP;
      tabDim.innerHTML += `<p> Varanda incluido!</p>`;
      break;
    //21 ate 22 Garagem/sóton/porão
    case "21":
      retornoCase = cases_5();
      tugGaragemStonPorao_1 = retornoCase.Rtug;
      potTugGaragemStonPorao_1 = retornoCase.RpotTug;
      ilumGaragemStonPorao_1 = retornoCase.Rilum;
      garagemStonPoraoA_1 = retornoCase.RA;
      garagemStonPoraoP_1 = retornoCase.RP;
      tabDim.innerHTML += `<p>GAragem/Soton/Porão incluido!</p>`;
      break;
    case "22":
      retornoCase = cases_5();
      tugGaragemStonPorao_2 = retornoCase.Rtug;
      potTugGaragemStonPorao_2 = retornoCase.RpotTug;
      ilumGaragemStonPorao_2 = retornoCase.Rilum;
      garagemStonPoraoA_2 = retornoCase.RA;
      garagemStonPoraoP_2 = retornoCase.RP;
      tabDim.innerHTML += `<p>GAragem/Soton/Porão incluido!</p>`;
      break;
    //23 até 24 Terraço/Sala_Festa/Área_Lazer
    case "23":
      retornoCase = cases_5();
      tugTerracoSala_FestaArea_Lazer_1 = retornoCase.Rtug;
      potTugTerracoSala_FestaArea_Lazer_1 = retornoCase.RpotTug;
      ilumTerracoSala_FestaArea_Lazer_1 = retornoCase.Rilum;
      terracoSala_FestaArea_LazerA_1 = retornoCase.RA;
      terracoSala_FestaArea_LazerP_1 = retornoCase.RP;
      tabDim.innerHTML += `<p>Terraço/Salão de festas/Área de lazer incluido!</p>`;
      break;
    case "24":
      retornoCase = cases_5();
      tugTerracoSala_FestaArea_Lazer_2 = retornoCase.Rtug;
      potTugTerracoSala_FestaArea_Lazer_2 = retornoCase.RpotTug;
      ilumTerracoSala_FestaArea_Lazer_2 = retornoCase.Rilum;
      terracoSala_FestaArea_LazerA_2 = retornoCase.RA;
      terracoSala_FestaArea_LazerP_2 = retornoCase.RP;
      tabDim.innerHTML += `<p>Terraço/Salão de festas/Área de lazer incluido!</p>`;
      break;
    //25 Escritório/Bilbiolteca
    case "25":
      retornoCase = cases_5();
      tugEscritorioBilbiolteca = retornoCase.Rtug;
      potTugEscritorioBilbiolteca = retornoCase.RpotTug;
      ilumEscritorioBilbiolteca = retornoCase.Rilum;
      escritorioBilbioltecaA = retornoCase.RA;
      escritorioBilbioltecaP = retornoCase.RP;
      tabDim.innerHTML += `<p>Escritário/Biblioteca incluido!</p>`;
      break;

    default:
      alert(
        "ERR: Opção inválida. Selecione uma dependência e depois 'Incluir'. Ao terminar as inclusões click em 'Calcular'."
      );
      break;
  }

  tabDim.innerHTML = `
            <form>
            <fieldset>
             <legend>Incluir nova dependencia ou calcular D1</legend>
             <input type="button" name="okdepend" id="okdepend" value="Incluir dependência" onclick="continua()">
             <&nbsp;&nbsp;>
             <input type="button" name="calc" id="calc" value="Calcular D1" onClick="calculo()"><br><br>
             </fieldset>
            </form>`;
}
function cases_5() {
  area = window.document.querySelector("input#area").value;
  perim = window.document.querySelector("input#perim").value;
  if (!area) {
    alert(
      "Preencha o campo área com um valor numérico e somente depois pressione 'Incluir'."
    );
  } else if (!perim) {
    alert(
      "Preencha o campo perimetro com um valor numérico e somente depois pressione 'Incluir'."
    );
  } else {
    P = parseFloat(perim);
    A = parseFloat(area);
    if (P < 5) {
      tug = 1;
      potTug = tug * 100;
    } else if (P % 5 == 0) {
      tug = P / 5;
      potTug = tug * 100;
    } else {
      tug = parseInt(P / 5) + 1;
      potTug = tug * 100;
    }
    if (A <= 6) {
      ilum = 100;
    } else {
      ilum = 100;
      for (var i = A - 6; i >= 4; i -= 4) {
        ilum += 60;
      }
    }
    tug += parseInt(
      prompt(
        "Para esta dependência, o sistema calculou o número MÍNIMO de  " +
          tug +
          " TUGs, conforme a NBR5410. Se desejar acrescentar mais TUGs, digite um número de Tugs extra à dependência ou digite '0', e depois 'OK'. Casos deixe o Prompt em branco o cálculo apresentará erro. Após, para incluir nova dependência, selecione-a e click 'incluir'. Ao fim de todas as inclusões finalize o calculo clicando 'Calcular D1'  "
      )
    );

    potTug = tug * 100;
  }

  var Rtug = tug,
    RpotTug = potTug,
    Rilum = ilum,
    RA = A,
    RP = P;
  //alert("Rtug, RpotTug, Rilum, RA, RP"+ Rtug + RpotTug+ Rilum+ RA+ RP);
  return { Rtug, RpotTug, Rilum, RA, RP };
}
function cases_35() {
  area = window.document.querySelector("input#area").value;
  perim = window.document.querySelector("input#perim").value;
  if (!area) {
    alert(
      "Preencha o campo área com um valor numérico e somente depois pressione 'Incluir'."
    );
  } else if (!perim) {
    alert(
      "Preencha o campo perimetro com um valor numérico e somente depois pressione 'Incluir'."
    );
  } else {
    switch (caso) {
      case "9":
      case "10":
      case "11":
      case "12":
      case "13":
      case "14":
        tug = 1;
        potTug = 600;
        break;
      default:
        P = parseFloat(perim);
        A = parseFloat(area);

        if (P < 3.5) {
          tug = 1;
          potTug = tug * 600;
        } else if (P % 3.5 == 0) {
          tug = P / 3.5;
          if (tug <= 3) {
            potTug = tug * 600;
          } else {
            potTug = 1800 + (tug - 3) * 100;
          }
        } else {
          tug = parseInt(P / 3.5) + 1;
          if (tug <= 3) {
            potTug = tug * 600;
          } else {
            potTug = 1800 + (tug - 3) * 100;
          }
        }
        break;
    }
    if (A <= 6) {
      ilum = 100;
    } else {
      ilum = 100;
      for (var i = A - 6; i >= 4; i -= 4) {
        ilum += 60;
      }
    }
    tug += parseInt(
      prompt(
        "Para esta dependência, o sistema calculou o número MÍNIMO de  " +
          tug +
          " TUGs, conforme a NBR5410. Se desejar acrescentar mais TUGs, digite um número de Tugs extra à dependência ou digite '0', e depois 'OK'. Casos deixe o Prompt em branco o cálculo apresentará erro. Após, para incluir nova dependência, selecione-a e click 'incluir'. Ao fim de todas as inclusões finalize o calculo clicando 'Calcular D1'  "
      )
    );
    if (tug <= 3) {
      potTug = tug * 600;
    } else {
      potTug = 1800 + (tug - 3) * 100;
    }
  }

  var Rtug = tug,
    RpotTug = potTug,
    Rilum = ilum,
    RA = A,
    RP = P;
  return { Rtug, RpotTug, Rilum, RA, RP };
}

function calculo() {
  //Soma de Número de tugs
  numeroTugs =
    tugQuarto_1 +
    tugQuarto_2 +
    tugQuarto_3 +
    tugQuarto_4 +
    tugQuarto_5 +
    tugSala_1 +
    tugSala_2 +
    tugSala_3 +
    tugBanheiro_1 +
    tugBanheiro_2 +
    tugBanheiro_3 +
    tugBanheiro_4 +
    tugBanheiro_5 +
    tugBanheiro_6 +
    tugCozinhaCopa_1 +
    tugCozinhaCopa_2 +
    tugAreaServico_1 +
    tugAreaServico_2 +
    tugVaranda_1 +
    tugVaranda_2 +
    tugGaragemStonPorao_1 +
    tugGaragemStonPorao_2 +
    tugTerracoSala_FestaArea_Lazer_1 +
    tugTerracoSala_FestaArea_Lazer_2 +
    tugEscritorioBilbiolteca;
  //soma de Potência de tugs
  potTugs =
    potTugQuarto_1 +
    potTugQuarto_2 +
    potTugQuarto_3 +
    potTugQuarto_4 +
    potTugQuarto_5 +
    potTugSala_1 +
    potTugSala_2 +
    potTugSala_3 +
    potTugBanheiro_1 +
    potTugBanheiro_2 +
    potTugBanheiro_3 +
    potTugBanheiro_4 +
    potTugBanheiro_5 +
    potTugBanheiro_6 +
    potTugCozinhaCopa_1 +
    potTugCozinhaCopa_2 +
    potTugAreaServico_1 +
    potTugAreaServico_2 +
    potTugVaranda_1 +
    potTugVaranda_2 +
    potTugGaragemStonPorao_1 +
    potTugGaragemStonPorao_2 +
    potTugTerracoSala_FestaArea_Lazer_1 +
    potTugTerracoSala_FestaArea_Lazer_2 +
    potTugEscritorioBilbiolteca;

  //Soma de potencia de iluminação
  potIlum =
    ilumQuarto_1 +
    ilumQuarto_2 +
    ilumQuarto_3 +
    ilumQuarto_4 +
    ilumQuarto_5 +
    ilumSala_1 +
    ilumSala_2 +
    ilumSala_3 +
    ilumBanheiro_1 +
    ilumBanheiro_2 +
    ilumBanheiro_3 +
    ilumBanheiro_4 +
    ilumBanheiro_5 +
    ilumBanheiro_6 +
    ilumCozinhaCopa_1 +
    ilumCozinhaCopa_2 +
    ilumAreaServico_1 +
    ilumAreaServico_2 +
    ilumVaranda_1 +
    ilumVaranda_2 +
    ilumGaragemStonPorao_1 +
    ilumGaragemStonPorao_2 +
    ilumTerracoSala_FestaArea_Lazer_1 +
    ilumTerracoSala_FestaArea_Lazer_2 +
    ilumEscritorioBilbiolteca;

  //soma de TUES C1
  //Dimensões Totais: Incluir Variáveis de área e perímetro no Switch (caso) para receber valores..

  aCasa =
    salaA_1 +
    salaA_2 +
    salaA_3 +
    quartoA_1 +
    quartoA_2 +
    quartoA_3 +
    quartoA_4 +
    quartoA_5 +
    varandaA_1 +
    varandaA_2 +
    banheiroA_1 +
    banheiroA_2 +
    banheiroA_3 +
    banheiroA_4 +
    banheiroA_5 +
    banheiroA_6 +
    areaServicoA_1 +
    areaServicoA_2 +
    cozinhaCopaA_2 +
    cozinhaCopaA_1 +
    garagemStonPoraoA_1 +
    garagemStonPoraoA_2 +
    terracoSala_FestaArea_LazerA_1 +
    terracoSala_FestaArea_LazerA_2 +
    escritorioBilbioltecaA;

  perimetroCasa =
    salaP_1 +
    salaP_2 +
    salaP_3 +
    quartoP_1 +
    quartoP_2 +
    quartoP_3 +
    quartoP_4 +
    quartoP_5 +
    varandaP_1 +
    varandaP_2 +
    banheiroP_1 +
    banheiroP_2 +
    banheiroP_3 +
    banheiroP_4 +
    banheiroP_5 +
    banheiroP_6 +
    areaServicoP_1 +
    areaServicoP_2 +
    cozinhaCopaP_2 +
    cozinhaCopaP_1 +
    garagemStonPoraoP_1 +
    garagemStonPoraoP_2 +
    terracoSala_FestaArea_LazerP_1 +
    terracoSala_FestaArea_LazerP_2 +
    escritorioBilbioltecaP;
  //Demenda de tug e Iluminação
  //por Unidade Consumidora 0,03 KVA/m2
  kvaM2 = 30 * aCasa;

  //Demenda de tug e Iluminação
  //por FD%

  c1 = potIlum + potTugs;

  //Comparar m´todos de demanda por metro quadrado e por atribuição de VA por ponto.
  //alert("d1 antes: "+d1+ "VA, kvaM2: "+ kvaM2+"VA")
  alert(
    "O sistema calculou pelo método Kva*m²: " +
      kvaM2 +
      " VA instalados(C1). Considerando as dimensões:  área total da residência de " +
      aCasa +
      " m², e  perimetro total da residência de " +
      perimetroCasa +
      " m, que resultou em: Número de TUGs: " +
      numeroTugs +
      " unidades, Potência atribuida à TUGs: " +
      potTugs +
      " VA, Potência atribuida à Iluminação: " +
      potIlum +
      " VA, C1 resultou em: " +
      c1 +
      " VA.  O sistema, atendendo o RECON-BT 2023 - LIGHT, para dimsnsionamento de unidade residêncial, adotou o maior valor calculado para o dimensionamento, comparando o resultado dos dois métodos."
  );

  if (kvaM2 > c1) {
    c1 = kvaM2;
  }

  if (c1 <= 1000) {
    d1 = c1 * 0.8;
  } else if (c1 <= 2000) {
    d1 = 1000 * 0.8 + (c1 - 1000) * 0.75;
  } else if (c1 <= 3000) {
    d1 = 1000 * 0.8 + 1000 * 0.75 + (c1 - 2000) * 0.65;
  } else if (c1 <= 4000) {
    d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + (c1 - 3000) * 0.6;
  } else if (c1 <= 5000) {
    d1 =
      1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + 1000 * 0.6 + (c1 - 4000) * 0.5;
  } else if (c1 <= 6000) {
    d1 =
      1000 * 0.8 +
      1000 * 0.75 +
      1000 * 0.65 +
      1000 * 0.6 +
      1000 * 0.5 +
      (c1 - 5000) * 0.45;
  } else if (c1 <= 7000) {
    d1 =
      1000 * 0.8 +
      1000 * 0.75 +
      1000 * 0.65 +
      1000 * 0.6 +
      1000 * 0.5 +
      1000 * 0.45 +
      (c1 - 6000) * 0.4;
  } else if (c1 <= 8000) {
    d1 =
      1000 * 0.8 +
      1000 * 0.75 +
      1000 * 0.65 +
      1000 * 0.6 +
      1000 * 0.5 +
      1000 * 0.45 +
      1000 * 0.4 +
      (c1 - 7000) * 0.35;
  } else if (c1 <= 9000) {
    d1 =
      1000 * 0.8 +
      1000 * 0.75 +
      1000 * 0.65 +
      1000 * 0.6 +
      1000 * 0.5 +
      1000 * 0.45 +
      1000 * 0.4 +
      1000 * 0.35 +
      (c1 - 8000) * 0.3;
  } else if (c1 <= 10000) {
    d1 =
      1000 * 0.8 +
      1000 * 0.75 +
      1000 * 0.65 +
      1000 * 0.6 +
      1000 * 0.5 +
      1000 * 0.45 +
      1000 * 0.4 +
      1000 * 0.35 +
      1000 * 0.3 +
      (c1 - 9000) * 0.27;
  } else if (c1 > 10000) {
    d1 =
      1000 * 0.8 +
      1000 * 0.75 +
      1000 * 0.65 +
      1000 * 0.6 +
      1000 * 0.5 +
      1000 * 0.45 +
      1000 * 0.4 +
      1000 * 0.35 +
      1000 * 0.3 +
      1000 * 0.27 +
      (c1 - 10000) * 0.24;
  }

  // Demanda de TUES
  //Demanda Total
  InserirTipoGeralTue();
}

function InserirTipoGeralTue() {
  tabDim.innerHTML = `<br><table>`;
  tabDim.innerHTML += `<tr><h3>Cálculo de demanda de TUEs.</h3></tr>`;
  tabDim.innerHTML += `<tr><h4>Informe o tipo, quantidade e soma de potencias para TUEs do mesmo tipo. </h4></tr>`;
  tabDim.innerHTML += `<tr>`;
  tabDim.innerHTML += `<td>
<br>
<form action="">
    <fieldset>
    <legend>TIPO GERAL</legend>
<select name="selMenu3" id="selMenu3">		
<option class="op1" value=0>Selecione</option>
<option class="op1" value=1>Aparelho de aquecimento_C2</option>
<option class="op1" value=2>Condicionador de Ar_C3</option>
<option class="op1" value=3>Self Contained(Similares_C4</option>
<option class="op1" value=4>Motores, Maq. de solda (motor-gerador)_C5</option>
<option class="op1" value=5>MAq solda_trafo, equip Hospitalar_C6</option>
</select>
</fieldset>
</form>
<br><br>
</td>

<td>   
<fieldset>
<legend>ATENÇÃO</legend>
<p>CLASSIFIQUE O TIPO: Refere-se a facilitar incluir diferentes tipos de TUE na mesma classificação geral, ou seja um Aparelho de aquecimento Tipo 1 será demandada 100%, enquanto dois Aparelhos de aquecimento Tipo 2 serão em 70%. <fieldset> Exemplo: Uma casa possui 03 Chuveiros, 02 torneiras e 01 tanque. Declare a soma das potências dos chuveiros como TIPO 1 e a QUANTIDADE como 03,  a soma das potencias das torneiras como TIPO 2, e a QUANTIDADE como 02, a potencia do tanque como Tipo 03 e Quantidade 01. Anote os valores individuais das potências para uso na tabela final para impressão. </fieldset></p>    
</fieldset> 
<br><br>
</td>
<td>
<form action="">
    <fieldset>
    <legend>CLASSIFIQUE O TIPO</legend>
<select name="selMenu4" id="selMenu4">		
<option class="op1" value=0>Selecione</option>
<option class="op1" value=1>Tipo 1</option>
<option class="op1" value=2>Tipo 2</option>
<option class="op1" value=3>Tipo 3</option>
<option class="op1" value=4>Tipo 4</option>
<option class="op1" value=5>Tipo 5</option>
</select>
</fieldset>
</form>
<br><br>    
</td>
<td>
<form action="">
    <fieldset>
    <legend>QUANT. DE TUEs DO MESMO TIPO</legend>     
<input type="number" name="qtue" id="qtue">
</fieldset>
</form> 
<br><br>    
</td>
<td>
<form action="">
    <fieldset>
    <legend>SOMA DAS POTÊNCIAS DAS CARGAS DESTE TIPO</legend>
    <input type="number" name="tue" id="tue"> 
    </fieldset>
    </form>
    <br><br>
</td>`;

  tabDim.innerHTML += `<input type="button" name="incluirTue" id="incluirTue" value="Incuir Tues" onClick="rodarIncluirTue()">`;
}

function rodarIncluirTue() {
  //Seleção de Tue
  selTue = window.document.querySelector("#selMenu3");
  caso2 = selTue.options[selTue.selectedIndex].value;
  switch (caso2) {
    case "0":
      alert(
        "Selecione o tipo de TUE e depois incluir. Ao terminar as inclusões click em calcular."
      );

      break;
    case "1":
      c2 = window.document.querySelector("#tue").value;
      qC2 = parseInt(window.document.querySelector("#qtue").value);
      cEsp = c2;
      qCEsp = qC2;

      alert(
        "Aparelho de aquecimento_C2:  " +
          qC2 +
          " = " +
          c2 +
          "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'"
      );
      tipoTue = window.document.querySelector("#selMenu4");
      caso3 = tipoTue.options[tipoTue.selectedIndex].value;
      switch (caso3) {
        case "0":
          alert("Selecione um tipo e depois incluir.");
          break;
        case "1":
          d2Tipo1 = C2();
          c2t1 = c2;
          qC2t1 = qC2;
          break;
        case "2":
          d2Tipo2 = C2();
          c2t2 = c2;
          qC2t2 = qC2;
          break;
        case "3":
          d2Tipo3 = C2();
          c2t3 = c2;
          qC2t3 = qC2;
          break;
        case "4":
          d2Tipo4 = C2();
          c2t4 = c2;
          qC2t4 = qC2;
          break;
        case "5":
          d2Tipo5 = C2();
          c2t5 = c2;
          qC2t5 = qC2;
          break;
        default:
          alert("ERR.");
          break;
          function C2() {
            var c = c2,
              d = 0,
              qC = qC2;
            if (qC == 0) {
              d = 0;
            } else if (qC == 1) {
              d = c * 1;
            } else if (qC == 2) {
              d = c * 0.75;
            } else if (qC == 3) {
              d = c * 0.7;
            } else if (qC == 4) {
              d = c * 0.66;
            } else if (qC == 5) {
              d = c * 0.62;
            } else if (qC == 6) {
              d = c * 0.59;
            } else if (qC == 7) {
              d = c * 0.56;
            } else if (qC == 8) {
              d = c * 0.53;
            } else if (qC == 9) {
              d = c * 0.51;
            } else if (qC >= 10) {
              alert(
                "ERR: Neste Aplicativos o número de aparelhos é limitado a 09 unidades."
              );
            }
            return d;
          }
      }
      d2 = d2Tipo1 + d2Tipo2 + d2Tipo3 + d2Tipo4 + d2Tipo5;
      c2f =
        parseFloat(c2t1) +
        parseFloat(c2t2) +
        parseFloat(c2t3) +
        parseFloat(c2t4) +
        parseFloat(c2t5);
      qC2f =
        parseFloat(qC2t1) +
        parseFloat(qC2t2) +
        parseFloat(qC2t3) +
        parseFloat(qC2t4) +
        parseFloat(qC2t5);

      break;
    case "2":
      c3 = window.document.querySelector("#tue").value;
      qC3 = parseInt(window.document.querySelector("#qtue").value);
      cEsp = c3;
      qCEsp = qC3;
      alert(
        "Condicionador de Ar_C3:  " +
          qC3 +
          " = " +
          c3 +
          "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'"
      );
      tipoTue = window.document.querySelector("#selMenu4");
      caso3 = tipoTue.options[tipoTue.selectedIndex].value;
      switch (caso3) {
        case "0":
          alert("Selecione um tipo e depois incluir.");
          break;
        case "1":
          d3Tipo1 = C3();
          c3t1 = c3;
          qC3t1 = qC3;
          break;
        case "2":
          d3Tipo2 = C3();
          c3t2 = c3;
          qC3t2 = qC3;
          break;
        case "3":
          d3Tipo3 = C3();
          c3t3 = c3;
          qC3t3 = qC3;
          break;
        case "4":
          d3Tipo4 = C3();
          c3t4 = c4;
          qC3t4 = qC3;
          break;
        case "5":
          d3Tipo5 = C3();
          c3t5 = c3;
          qC3t5 = qC3;
          break;
        default:
          alert("ERR.");
          break;
          function C3() {
            var c = c3,
              d = 0,
              qC = qC3;
            if (qC == 0) {
              d = 0;
            } else if (qC <= 4) {
              d = c * 1;
            } else if (qC <= 10) {
              d = c * 0.7;
            } else if (qC > 10) {
              alert(
                "ERR: Neste Aplicativos o número de aparelhos é limitado a 10 unidades."
              );
            }
            return d;
          }
      }
      d3 = d3Tipo1 + d3Tipo2 + d3Tipo3 + d3Tipo4 + d3Tipo5;
      c3f =
        parseFloat(c3t1) +
        parseFloat(c3t2) +
        parseFloat(c3t3) +
        parseFloat(c3t4) +
        parseFloat(c3t5);
      qC3f =
        parseFloat(qC3t1) +
        parseFloat(qC3t2) +
        parseFloat(qC3t3) +
        parseFloat(qC3t4) +
        parseFloat(qC3t5);

      break;
    case "3":
      c4 = window.document.querySelector("#tue").value;
      qC4 = parseInt(window.document.querySelector("#qtue").value);
      cEsp = c4;
      qCEsp = qC4;
      alert(
        "Self Contained(Similares_C4):  " +
          qC4 +
          " = " +
          c4 +
          "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'"
      );
      tipoTue = window.document.querySelector("#selMenu4");
      caso3 = tipoTue.options[tipoTue.selectedIndex].value;
      switch (caso3) {
        case "0":
          alert("Selecione um tipo e depois incluir.");
          break;
        case "1":
          d4Tipo1 = C4();
          c4t1 = c4;
          qC4t1 = qC4;
          break;
        case "2":
          d4Tipo2 = C4();
          c4t2 = c4;
          qC4t2 = qC4;
          break;
        case "3":
          d4Tipo3 = C4();
          c4t3 = c4;
          qC4t3 = qC4;
          break;
        case "4":
          d4Tipo4 = C4();
          c4t4 = c4;
          qC4t4 = qC4;
          break;
        case "5":
          d4Tipo5 = C4();
          c4t5 = c4;
          qC4t5 = qC4;
          break;
        default:
          alert("ERR.");
          break;
          function C4() {
            var c = c4,
              d = 0,
              qC = qC4;
            if (qC == 0) {
              d = 0;
            } else if (qC4 <= 10) {
              d = c * 1;
            } else if (qC > 10) {
              alert(
                "ERR: Neste Aplicativos o número de aparelhos é limitado a 10 unidades."
              );
            }
            return d;
          }
      }
      d4 = d4Tipo1 + d4Tipo2 + d4Tipo3 + d4Tipo4 + d4Tipo5;
      c4f =
        parseFloat(c4t1) +
        parseFloat(c4t2) +
        parseFloat(c4t3) +
        parseFloat(c4t4) +
        parseFloat(c4t5);
      qC4f =
        parseFloat(qC4t1) +
        parseFloat(qC4t2) +
        parseFloat(qC4t3) +
        parseFloat(qC4t4) +
        parseFloat(qC4t5);

      break;
    case "4":
      c5 = window.document.querySelector("#tue").value;
      qC5 = parseInt(window.document.querySelector("#qtue").value);
      cEsp = c5;
      qCEsp = qC5;
      alert(
        "Motores, Maq. de solda (motor-gerador)_C5;  " +
          qC5 +
          " = " +
          c5 +
          "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'"
      );
      tipoTue = window.document.querySelector("#selMenu4");
      caso3 = tipoTue.options[tipoTue.selectedIndex].value;
      switch (caso3) {
        case "0":
          alert("Selecione um tipo e depois incluir.");
          break;
        case "1":
          d5Tipo1 = C5();
          c5t1 = c5;
          qC5t1 = qC5;
          break;
        case "2":
          d5Tipo2 = C5();
          c5t2 = c5;
          qC5t2 = qC5;
          break;
        case "3":
          d5Tipo3 = C5();
          c5t3 = c5;
          qC5t3 = qC5;
          break;
        case "4":
          d5Tipo4 = C5();
          c5t4 = c5;
          qC5t4 = qC5;
          break;
        case "5":
          d5Tipo5 = C5();
          c5t5 = c5;
          qC5t5 = qC5;
          break;
        default:
          alert("ERR.");
          break;
          function C5() {
            var c = c5,
              d = 0,
              qC = qC5;
            if (qC == 0) {
              d = 0;
            } else if (qC == 1) {
              d = c * 1;
            } else if (qC == 2) {
              d = c * 0.75;
            } else if (qC == 3) {
              d = c * 0.6333;
            } else if (qC == 4) {
              d = c * 0.575;
            } else if (qC == 5) {
              d = c * 0.54;
            } else if (qC == 6) {
              d = c * 0.5;
            } else if (qC == 7) {
              d = c * 0.4714;
            } else if (qC == 8) {
              d = c * 0.45;
            } else if (qC == 9) {
              d = c * 0.4333;
            } else if (qC >= 10) {
              d = c * 0.42;
            }
            return d;
          }
      }
      d5 = d5Tipo1 + d5Tipo2 + d5Tipo3 + d5Tipo4 + d5Tipo5;
      c5f =
        parseFloat(c5t1) +
        parseFloat(c5t2) +
        parseFloat(c5t3) +
        parseFloat(c5t4) +
        parseFloat(c5t5);
      qC5f =
        parseFloat(qC5t1) +
        parseFloat(qC5t2) +
        parseFloat(qC5t3) +
        parseFloat(qC5t4) +
        parseFloat(qC5t5);
      break;

    case "5":
      c6 = window.document.querySelector("#tue").value;
      qC6 = parseInt(window.document.querySelector("#qtue").value);
      cEsp = c6;
      qCEsp = qC6;
      alert(
        "MAq solda_trafo, equip Hospitalar_C6:  " +
          qC6 +
          " = " +
          c6 +
          "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'"
      );
      tipoTue = window.document.querySelector("#selMenu4");
      caso3 = tipoTue.options[tipoTue.selectedIndex].value;
      switch (caso3) {
        case "0":
          alert("Selecione um tipo e depois incluir.");
          break;
        case "1":
          d6Tipo1 = C6();
          c6t1 = c6;
          qC6t1 = qC6;
          break;
        case "2":
          d6Tipo2 = C6();
          c6t2 = c6;
          qC6t2 = qC6;
          break;
        case "3":
          d6Tipo3 = C6();
          c6t3 = c6;
          qC6t3 = qC6;
          break;
        case "4":
          d6Tipo4 = C6();
          c6t4 = c6;
          qC6t4 = qC6;
          break;
        case "5":
          d6Tipo5 = C6();
          c6t5 = c6;
          qC6t5 = qC6;
          break;
        default:
          alert("ERR.");
          break;
          function C6() {
            var c = c6,
              d = 0,
              qC = qC6;
            if (qC == 0) {
              d = 0;
            } else if (qC == 1) {
              d = c * 1;
            } else if (qC <= 3) {
              d = c * 0.7;
            } else if (qC <= 7) {
              d = c * 0.6;
            } else if (qC > 7) {
              alert(
                "ERR: Neste Aplicativos o número de aparelhos é limitado a 7 unidades."
              );
            }
            return d;
          }
      }
      d6 = d6Tipo1 + d6Tipo2 + d6Tipo3 + d6Tipo4 + d6Tipo5;
      c6f =
        parseFloat(c6t1) +
        parseFloat(c6t2) +
        parseFloat(c6t3) +
        parseFloat(c6t4) +
        parseFloat(c6t5);
      qC6f =
        parseFloat(qC6t1) +
        parseFloat(qC6t2) +
        parseFloat(qC6t3) +
        parseFloat(qC6t4) +
        parseFloat(qC6t5);
      break;
  }

  //Incluir TUE

  tabDim.innerHTML = ` <form>
        <fieldset>
         <legend>Incluir nova TUE ou Calcular</legend>
         <input type="button" name="incluirTues" id="incluirTues" value="Incuir Tues" onClick="InserirTipoGeralTue()">
         <&nbsp;&nbsp;>
         <input type="button" name="calcTue" id="calcTue" value="Calcular" onClick="rodarDimenCirc() "><br><br>
         </fieldset>
        </form>`;
}

function rodarDimenCirc() {
  potTotalDem =
    parseFloat(d1) +
    parseFloat(d2) +
    parseFloat(d3) +
    parseFloat(d4) +
    parseFloat(d5) +
    parseFloat(d6);
  potFinalInst =
    parseFloat(c1) +
    parseFloat(c2f) +
    parseFloat(c3f) +
    parseFloat(c4f) +
    parseFloat(c5f) +
    parseFloat(c6f);
  numeroTues =
    parseFloat(qC2f) +
    parseFloat(qC3f) +
    parseFloat(qC4f) +
    parseFloat(qC5f) +
    parseFloat(qC6f);
  if (potTotalDem <= 4000) {
    padrao = "UM1";
  } else if (potTotalDem <= 5000) {
    padrao = "UM2";
  } else if (potTotalDem <= 7000) {
    padrao = "UB1";
  } else if (potTotalDem <= 8000) {
    padrao = "UB2";
  } else if (potTotalDem <= 12000) {
    padrao = "T1";
  } else if (potTotalDem <= 13000) {
    padrao = "T2";
  } else if (potTotalDem <= 15000) {
    padrao = "T2";
  } else if (potTotalDem > 15000) {
    padrao = "ERRO";
  }
  alert(
    `Atenção: \nO Padrão calculado para este dimensionamento foi o padrão de entrada (LIGHT-RJ) do tipo: " ${padrao}" . \nOBS.:\n¬ O Padrão "UM1 ou UM2" - Urbano Monofásico fornece R+N - 127V, \n¬ O padrão "UB1 ou UB2" - Urbano Bifásico fornece R+S+N - 127V ou 220v, \n¬ O padrão "T1 ou T2" - Urbano Trifásico fornece R+S+T+N - 127V ou 220V. `
  );

  /*********Acrescentado novo teste *************************************************************************************/
  tabDim.innerHTML = `
<h3>Atribuição de tensão para dimensionamento dos circuitos do tipo C1.</h3>`;

  if (padrao == "UM1" || padrao == "UM2") {
    tabDim.innerHTML += `
        <form action="">
        <fieldset>
        <legend>Tensão de cargas Tipo C1:Iluminação.</legend>
        <select name="selMenuC1" id="selMenuC1Ilum">	
        <option class="volt1" value=0 >Selecione</option>
        <option class="volt1" selected value=1 >127V</option>       
        </select>
        </fieldset>
        </form><br><br>`;
    tabDim.innerHTML += `
        <form action="">
        <fieldset>
        <legend>Tensão de cargas Tipo C1: Tug.</legend>
        <select name="selMenuC1" id="selMenuC1Tug">	
        <option class="volt1" value=0 >Selecione</option>
        <option class="volt1" selected value=1 >127V</option>       
        </select>
        </fieldset>
        </form>`;
  } else if (padrao == "UB1" || padrao == "UB2") {
    tabDim.innerHTML += `
    <form action="">
    <fieldset>
    <legend>Tensão de cargas Tipo C1:Iluminação.</legend>
    <select name="selMenuC1" id="selMenuC1Ilum">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" selected value=1 >127V</option>
    <option class="volt2" value=2>220v</option>
    </select>
    </fieldset>
    </form><br><br>`;
    tabDim.innerHTML += `
    <form action="">
    <fieldset>
    <legend>Tensão de cargas Tipo C1: TUG.</legend>
    <select name="selMenuC1" id="selMenuC1Tug">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" selected value=1 >127V</option>
    <option class="volt2" value=2>220v</option>
    </select>
    </fieldset>
    </form>`;
  } else if (padrao == "T1" || padrao == "T2") {
    tabDim.innerHTML += `
    <form action="">
    <fieldset>
    <legend>Tensão de cargas Tipo C1: Iluminação.</legend>
    <select name="selMenuC1" id="selMenuC1Ilum">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" selected value=1 >127V</option>
    <option class="volt2" value=2>220v - Bifásico</option>
    </select>
    </fieldset>
    </form><br><br>`;
    tabDim.innerHTML += `
    <form action="">
    <fieldset>
    <legend>Tensão de cargas Tipo C1: TUG.</legend>
    <select name="selMenuC1" id="selMenuC1Tug">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" selected value=1 >127V</option>
    <option class="volt2" value=2>220v - Bifásico</option>
    </select>
    </fieldset>
    </form>`;
  }

  tabDim.innerHTML += `<br><input type="button" name="tensao" id="tensao" value="Enviar" onClick="rodarCircuitos()">`;
}

function rodarCircuitos() {
  tensaoIlum = window.document.querySelector("#selMenuC1Ilum");
  tensaoC1IIlum = tensaoIlum.options[tensaoIlum.selectedIndex].value;
  tensaoTug = window.document.querySelector("#selMenuC1Tug");
  tensaoC1ITug = tensaoTug.options[tensaoTug.selectedIndex].value;

  switch (tensaoC1IIlum) {
    case "0":
      alert("ERR: Selecione uma tensão e depois click em 'Enviar'.");
      break;
    case "1":
      tensaoIlumf = 127;
      break;
    case "2":
      tensaoIlumf = 220;
      break;
  }
  switch (tensaoC1ITug) {
    case "0":
      alert("ERR: Selecione uma tensão e depois click em 'Enviar'.");
      break;
    case "1":
      tensaoTugf = 127;
      break;
    case "2":
      tensaoTugf = 220;
      break;
  }

  if (tensaoIlumf == 127) {
    if (potIlum % 1270 == 0) {
      qC1Ilum = parseInt(potIlum / 1270);
    } else {
      qC1Ilum = parseInt(potIlum / 1270) + 1;
    }
  } else {
    if (potIlum % 2200 == 0) {
      qC1Ilum = parseInt(potIlum / 2200);
    } else {
      qC1Ilum = parseInt(potIlum / 2200) + 1;
    }
  }

  if (tensaoTugf == 127) {
    if (potTug % 1270 == 0) {
      qC1Tug = parseInt(potTugs / 1270);
    } else {
      qC1Tug = parseInt(potTugs / 1270) + 1;
    }
  } else {
    if (potTug % 2200 == 0) {
      qC1Tug = parseInt(potTugs / 2200);
    } else {
      qC1Tug = parseInt(potTugs / 2200) + 1;
    }
  }

  iterarIlum = qC1Ilum;
  iterarTug = qC1Tug;
  iterarqC2 = qC2f;
  iterarqC3 = qC3f;
  iterarqC4 = qC4f;
  iterarqC5 = qC5f;
  iterarqC6 = qC6f;
  alert(
    `O Número total de circuito é: ${
      numeroTues + qC1Ilum + qC1Tug
    }: \nCircuitos de TUEs = ${numeroTues}. \nCircuitos de Iluminação = ${qC1Ilum}. \nCircuitos de TUGs = ${qC1Tug}. \nAgora, antes de continuar, rascunhe a distribuição e o diagrama unifilar sobre planta baixa, pois informações resultantes desse dimensionamento serão solicitadas a seguir.`
  );
  rodarIncluirTueEsp();
}

function rodarIncluirTueEsp() {
  tabDim.innerHTML = `
<h3>Dimensionamento de Circuitos.</h3>

<fieldset>
<legend>Descrição:</legend>
<p class="txt">A fim de alcançar um dimensionamento seguro, temos que considerar os fenômenos que influenciam a formação da corrente elétrica, tais quais: Temperatura, Material do condutor, Distancia entre o ponto de consumo e/ou Quadro de distribuição e as cargas, Circuitos agrupados em eu mesmo eletroduto, tensão de alimentação da carga, entre outros, e Considerando o objetivo deste aplicativo, que é ajudar eletricistas iniciantes a dimensionar uma residencia até 15kVA, sem obrigatoriedade de ART, RRT ou TRT, necessitamos de algumas informações adcionais para o dimensionamento, aplicáveis à residências que cumprem os requisitos para obter fornecimento até esta grandeza de consumo.</p>
</fieldset><br><br>`;
  somaCirc = numeroTues + qC1Ilum + qC1Tug;

  iterarCarga += 1;

  if (iterarCarga <= somaCirc) {
    if (iterarqC2 > 0) {
      caso2 = "1";

      tabDim.innerHTML += `<h2> Dados para aparelhos de aquecimento - C2</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC2} DESTE TIPO</legend>
    <p><b>Obs.:O Padrão adotado pelo sistema foi <em>${padrao}</em>. Logo, escolha a tensão em função do padrão: <em>${padrao}</em>. Ou seja, se o padrão for UM1 0u UM2, a única opção é 127V. Se o padrão for UB1 ou UB2, as opções para sua escolha são 127V ou 220V. E se o padrão for T1 ou T2, as opções para sua escolha são 127V, ou 220V - Bifásico ou 220V - Trifásico.<b></p><br>
    <br><input type="number" name="tue1V" id="tue1V" value="0" min="127" max="220"> <label> Tensão para esta carga.</label><br>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    <fieldset>
    <legend>Nº maximo: 05 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=${iterarqC2} selected>Carga ${iterarqC2}</option>       
    </select><label>para aparelhos de aquecimento - C2</label>
    </fieldset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    <br><br>`;
      iterarqC2 -= 1;
    } else if (iterarqC3 > 0) {
      caso2 = "2";
      tabDim.innerHTML += `<h2> Dados para aparelhos de Ar condicionado - C3.</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC3} DESTE TIPO</legend>
    <p><b>Obs.:O Padrão adotado pelo sistema foi <em>${padrao}</em>. Logo, escolha a tensão em função do padrão: <em>${padrao}</em>. Ou seja, se o padrão for UM1 0u UM2, a única opção é 127V. Se o padrão for UB1 ou UB2, as opções para sua escolha são 127V ou 220V. E se o padrão for T1 ou T2, as opções para sua escolha são 127V, ou 220V - Bifásico ou 220V - Trifásico.<b></p><br>
    <br><input type="number" name="tue1V" id="tue1V" value="0" min="127" max="220"> <label> Tensão para esta carga.</label><br>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    <fieldset>
    <legend>Nº maximo: 05 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=${iterarqC3} selected>Carga ${iterarqC3}</option>       
    </select><label>para aparelhos de Ar condicionado - C3</label>
    </fieldset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
   <br><br>`;

      iterarqC3 -= 1;
    } else if (iterarqC4 > 0) {
      caso2 = "3";

      tabDim.innerHTML += `<h2> Dados para aparelhos - C4.</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC4} DESTE TIPO</legend>
    <p><b>Obs.:O Padrão adotado pelo sistema foi <em>${padrao}</em>. Logo, escolha a tensão em função do padrão: <em>${padrao}</em>. Ou seja, se o padrão for UM1 0u UM2, a única opção é 127V. Se o padrão for UB1 ou UB2, as opções para sua escolha são 127V ou 220V. E se o padrão for T1 ou T2, as opções para sua escolha são 127V, ou 220V - Bifásico ou 220V - Trifásico.<b></p><br>
    <br><input type="number" name="tue1V" id="tue1V" value="0" min="127" max="220"> <label> Tensão para esta carga.</label><br>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>    
    <fieldset>
    <legend>Nº maximo: 05 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=${iterarqC4} selected>Carga ${iterarqC4}</option>       
    </select><label>para aparelhos - C4</label>
    </fieldset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    <br><br>`;
      iterarqC4 -= 1;
    } else if (iterarqC5 > 0) {
      caso2 = "4";
      tabDim.innerHTML += `<h2> Dados para aparelhos - C5</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC5} DESTE TIPO</legend>
    <p><b>Obs.:O Padrão adotado pelo sistema foi <em>${padrao}</em>. Logo, escolha a tensão em função do padrão: <em>${padrao}</em>. Ou seja, se o padrão for UM1 0u UM2, a única opção é 127V. Se o padrão for UB1 ou UB2, as opções para sua escolha são 127V ou 220V. E se o padrão for T1 ou T2, as opções para sua escolha são 127V, ou 220V - Bifásico ou 220V - Trifásico.<b></p><br>
    <br><input type="number" name="tue1V" id="tue1V" value="0" min="127" max="220"> <label> Tensão para esta carga.</label><br>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    <fieldset>
    <legend>Nº maximo: 05 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=${iterarqC5} selected>Carga ${iterarqC5}</option>       
    </select><label>para aparelhos - C5</label>
    </fieldset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    <br><br>`;
      iterarqC5 -= 1;
    } else if (iterarqC6 > 0) {
      caso2 = "5";
      tabDim.innerHTML += `<h2> Dados para aparelhos - C6</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC6} DESTE TIPO</legend>
    <p><b>Obs.:O Padrão adotado pelo sistema foi <em>${padrao}</em>. Logo, escolha a tensão em função do padrão: <em>${padrao}</em>. Ou seja, se o padrão for UM1 0u UM2, a única opção é 127V. Se o padrão for UB1 ou UB2, as opções para sua escolha são 127V ou 220V. E se o padrão for T1 ou T2, as opções para sua escolha são 127V, ou 220V - Bifásico ou 220V - Trifásico.<b></p><br>
    <br><input type="number" name="tue1V" id="tue1V" value="0" min="127" max="220"> <label> Tensão para esta carga.</label><br>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    <fieldset>
    <legend>Nº maximo: 05 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=${iterarqC6} selected>Carga ${iterarqC6}</option>       
    </select><label>para aparelhos - C6</label>
    </fieldset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
   <br><br>`;
      iterarqC6 -= 1;
    } else if (iterarIlum > 0) {
      caso2 = "6";

      tabDim.innerHTML += `<h2> Dados para Iluminação - C1</h2>
    <h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
    <h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</h4>
    <form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarIlum} DESTE TIPO</legend>
    <p><b>A tensão adotada para C1: Iluminação foi ${tensaoIlumf} volts.<b></p><br>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=${iterarIlum} selected>Carga ${iterarIlum}</option>       
    </select><label>para Iluminação - C1</label>
    </fieldset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    <br><br>`;
      iterarIlum -= 1;
    } else if (iterarTug > 0) {
      caso2 = "7";
      tabDim.innerHTML = `<h2> Dados para TUGs - C1.</h2>
    <h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
    <h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</h4>
    <form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarTug} DESTE TIPO</legend>
    <p><b>A tensão adotada para C1: TUG´s foi ${tensaoTugf} volts.<b></p><br>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=${iterarTug} selected>Carga ${iterarTug}</option>       
    </select><label>para TUGs - C1</label>
    </fieldset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    <br><br>`;

      iterarTug -= 1;
    }
  }
}

function rodarIncluirTueEsp1() {
  if (caso2 == "6") {
    tensaoC = tensaoIlumf;
  } else if (caso2 == "7") {
    tensaoC = tensaoTugf;
  } else {
    tensaoC = document.querySelector("#tue1V").value;
  }
  pot1Esp = document.querySelector("#tue1Esp").value; //Potência em Watt
  FPEsp = document.querySelector("#fptue1Esp").value; //Fator de potência
  Fagrup = document.querySelector("#fagruptue1Esp").value;
  distCirc = document.querySelector("#comprtue1Esp").value;
  nCarregados = document.querySelector("#carrtue1Esp").value;
  EscCarga = document.querySelector("#SelQtue");
  EscCargaf = EscCarga.options[EscCarga.selectedIndex].value;
  potEsp = pot1Esp / FPEsp; //potência em VA

  switch (caso2) {
    case "0":
      alert("ERR: Selecione uma quantidade e depois click em 'Enviar'.");
      break;
    case "1": //aparelhos de aquecimento c2
      switch (EscCargaf) {
        case "1":
          tensaoResC21 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC21 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ1 = 2.5;
          } else {
            condutorC2Circ1 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -1 : " +
              disjTueC21 +
              "A. Condutor C2 - 1 : " +
              condutorC2Circ1 +
              "mm²"
          );
          break;
        case "2":
          tensaoResC22 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC22 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ2 = 2.5;
          } else {
            condutorC2Circ2 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -2 : " +
              disjTueC22 +
              "A. Condutor C2 - 2 : " +
              condutorC2Circ2 +
              "mm²"
          );
          break;
        case "3":
          tensaoResC23 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC23 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ3 = 2.5;
          } else {
            condutorC2Circ3 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -3 : " +
              disjTueC23 +
              "A. Condutor C2 - 3 : " +
              condutorC2Circ3 +
              "mm²"
          );
          break;
        case "4":
          tensaoResC24 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC24 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ4 = 2.5;
          } else {
            condutorC2Circ4 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -4 : " +
              disjTueC24 +
              "A. Condutor C2 - 4 : " +
              condutorC2Circ4 +
              "mm²"
          );
          break;
        case "5":
          tensaoResC25 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC25 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ5 = 2.5;
          } else {
            condutorC2Circ5 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -5 : " +
              disjTueC25 +
              "A. Condutor C2 - 5 : " +
              condutorC2Circ5 +
              "mm²"
          );
          break;
        case "6":
          tensaoResC26 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC26 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ6 = 2.5;
          } else {
            condutorC2Circ6 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -6 : " +
              disjTueC26 +
              "A. Condutor C2 - 6 : " +
              condutorC2Circ6 +
              "mm²"
          );
          break;
        case "7":
          tensaoResC27 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC27 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ7 = 2.5;
          } else {
            condutorC2Circ7 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -7 : " +
              disjTueC27 +
              "A. Condutor C2 - 7 : " +
              condutorC2Circ7 +
              "mm²"
          );
          break;
        case "8":
          tensaoResC28 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC28 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ8 = 2.5;
          } else {
            condutorC2Circ8 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -8 : " +
              disjTueC28 +
              "A. Condutor C2 - 8 : " +
              condutorC2Circ8 +
              "mm²"
          );
          break;
        case "9":
          tensaoResC29 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC29 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC2Circ9 = 2.5;
          } else {
            condutorC2Circ9 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C2 -9 : " +
              disjTueC29 +
              "A. Condutor C2 - 9 : " +
              condutorC2Circ9 +
              "mm²"
          );
          break;
        default:
          alert(
            "ERR: Neste Aplicativos o número de de aparelhos é limitado a 09 unidades."
          );
          break;
      }
      break;
    case "2": //aparelhos de Ar C3
      switch (EscCargaf) {
        case "1":
          tensaoResC31 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC31 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ1 = 2.5;
          } else {
            condutorC3Circ1 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -1 : " +
              disjTueC31 +
              "A. Condutor C3 - 1 : " +
              condutorC3Circ1 +
              "mm²"
          );
          break;
        case "2":
          tensaoResC32 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC32 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ2 = 2.5;
          } else {
            condutorC3Circ2 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -2 : " +
              disjTueC32 +
              "A. Condutor C3 - 2 : " +
              condutorC3Circ2 +
              "mm²"
          );
          break;
        case "3":
          tensaoResC33 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC33 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ3 = 2.5;
          } else {
            condutorC3Circ3 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -3 : " +
              disjTueC33 +
              "A. Condutor C3 - 3 : " +
              condutorC3Circ3 +
              "mm²"
          );
          break;
        case "4":
          tensaoResC34 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC34 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ4 = 2.5;
          } else {
            condutorC3Circ4 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -4 : " +
              disjTueC34 +
              "A. Condutor C3 - 4 : " +
              condutorC3Circ4 +
              "mm²"
          );
          break;
        case "5":
          tensaoResC35 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC35 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ5 = 2.5;
          } else {
            condutorC3Circ5 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -5 : " +
              disjTueC35 +
              "A. Condutor C3 - 5 : " +
              condutorC3Circ5 +
              "mm²"
          );
          break;
        case "6":
          tensaoResC36 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC36 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ6 = 2.5;
          } else {
            condutorC3Circ6 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -6 : " +
              disjTueC36 +
              "A. Condutor C3 - 6 : " +
              condutorC3Circ6 +
              "mm²"
          );
          break;
        case "7":
          tensaoResC37 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC37 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ7 = 2.5;
          } else {
            condutorC3Circ7 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -7 : " +
              disjTueC37 +
              "A. Condutor C3 - 7 : " +
              condutorC3Circ7 +
              "mm²"
          );
          break;
        case "8":
          tensaoResC38 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC38 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ8 = 2.5;
          } else {
            condutorC3Circ8 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -8 : " +
              disjTueC38 +
              "A. Condutor C3 - 8 : " +
              condutorC3Circ8 +
              "mm²"
          );
          break;
        case "9":
          tensaoResC39 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC39 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC3Circ9 = 2.5;
          } else {
            condutorC3Circ9 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C3 -9 : " +
              disjTueC39 +
              "A. Condutor C3 - 9 : " +
              condutorC3Circ9 +
              "mm²"
          );
          break;
        default:
          alert(
            "ERR: Neste Aplicativos o número de de aparelhos é limitado a 09 unidades."
          );
          break;
      }
      break;
    case "3": //C4
      switch (EscCargaf) {
        case "1":
          tensaoResC41 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC41 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC4Circ1 = 2.5;
          } else {
            condutorC4Circ1 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C4 -1 : " +
              disjTueC41 +
              "A. Condutor C4 - 1 : " +
              condutorC4Circ1 +
              "mm²"
          );
          break;
        case "2":
          tensaoResC42 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC42 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC4Circ2 = 2.5;
          } else {
            condutorC4Circ2 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C4 -2 : " +
              disjTueC42 +
              "A. Condutor C4 - 2 : " +
              condutorC4Circ2 +
              "mm²"
          );
          break;
        case "3":
          tensaoResC43 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC43 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC4Circ3 = 2.5;
          } else {
            condutorC4Circ3 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C4-3 : " +
              disjTueC43 +
              "A. Condutor C4 - 3 : " +
              condutorC4Circ3 +
              "mm²"
          );
          break;
        case "4":
          tensaoResC44 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC44 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC4Circ4 = 2.5;
          } else {
            condutorC4Circ4 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C4 -4 : " +
              disjTueC44 +
              "A. Condutor C4 - 4 : " +
              condutorC4Circ4 +
              "mm²"
          );
          break;
        case "5":
          tensaoResC45 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC45 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC4Circ5 = 2.5;
          } else {
            condutorC4Circ5 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C4 -5 : " +
              disjTueC45 +
              "A. Condutor C4 - 5 : " +
              condutorC4Circ5 +
              "mm²"
          );
          break;
        default:
          alert(
            "ERR: Neste Aplicativos o número de de aparelhos é limitado a 05 unidades"
          );
          break;
      }
      break;
    case "4": //C5
      switch (EscCargaf) {
        case "1":
          tensaoResC51 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC51 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC5Circ1 = 2.5;
          } else {
            condutorC5Circ1 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C5 -1 : " +
              disjTueC51 +
              "A. Condutor C5 - 1 : " +
              condutorC5Circ1 +
              "mm²"
          );
          break;
        case "2":
          tensaoResC52 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC52 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC5Circ2 = 2.5;
          } else {
            condutorC5Circ2 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C5 -2 : " +
              disjTueC52 +
              "A. Condutor C5 - 2 : " +
              condutorC5Circ2 +
              "mm²"
          );
          break;
        case "3":
          tensaoResC53 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC53 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC5Circ3 = 2.5;
          } else {
            condutorC5Circ3 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C5-3 : " +
              disjTueC53 +
              "A. Condutor C5 - 3 : " +
              condutorC5Circ3 +
              "mm²"
          );
          break;
        case "4":
          tensaoResC54 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC54 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC5Circ4 = 2.5;
          } else {
            condutorC5Circ4 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C5 -4 : " +
              disjTueC54 +
              "A. Condutor C5 - 4 : " +
              condutorC5Circ4 +
              "mm²"
          );
          break;
        case "5":
          tensaoResC55 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC55 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC5Circ5 = 2.5;
          } else {
            condutorC5Circ5 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C5 -5 : " +
              disjTueC55 +
              "A. Condutor C5 - 5 : " +
              condutorC5Circ5 +
              "mm²"
          );
          break;
        default:
          alert(
            "ERR: Neste Aplicativos o número de de aparelhos é limitado a 05 unidades"
          );
          break;
      }

      break;
    case "5": //C6
      switch (EscCargaf) {
        case "1":
          tensaoResC61 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC61 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC6Circ1 = 2.5;
          } else {
            condutorC6Circ1 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C6 -1 : " +
              disjTueC61 +
              "A. Condutor C6 - 1 : " +
              condutorC6Circ1 +
              "mm²"
          );
          break;
        case "2":
          tensaoResC62 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC62 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC6Circ2 = 2.5;
          } else {
            condutorC6Circ2 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C6 -2 : " +
              disjTueC62 +
              "A. Condutor C6 - 2 : " +
              condutorC6Circ2 +
              "mm²"
          );
          break;
        case "3":
          tensaoResC63 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC63 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC6Circ3 = 2.5;
          } else {
            condutorC6Circ3 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C6 -3 : " +
              disjTueC63 +
              "A. Condutor C6 - 3 : " +
              condutorC6Circ3 +
              "mm²"
          );
          break;
        case "4":
          tensaoResC64 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC64 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC6Circ4 = 2.5;
          } else {
            condutorC6Circ4 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C6 -4 : " +
              disjTueC64 +
              "A. Condutor C6 - 4 : " +
              condutorC6Circ4 +
              "mm²"
          );
          break;
        case "5":
          tensaoResC65 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTueC65 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorC6Circ5 = 2.5;
          } else {
            condutorC6Circ5 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C6 -5 : " +
              disjTueC65 +
              "A. Condutor C6 - 5 : " +
              condutorC6Circ5 +
              "mm²"
          );
          break;
        default:
          alert(
            "ERR: Neste Aplicativos o número de de aparelhos é limitado a 05 unidades"
          );
          break;
      }
      break;
    case "6": //Iluminação -C1
      switch (EscCargaf) {
        case "1":
          tensaoResIlum1 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum1 = disjTue.disjC;
          condutorIlumCirc1 = disjTue.condutorCCirc;
          alert(
            "Disjuntor Ilum C1 -1 : " +
              disjIlum1 +
              "A. Condutor ilum C1 - 1 : " +
              condutorIlumCirc1 +
              "mm²"
          );
          break;
        case "2":
          tensaoResIlum2 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum2 = disjTue.disjC;
          condutorIlumCirc2 = disjTue.condutorCCirc;
          alert(
            "Disjuntor Ilum C1 -2 : " +
              disjIlum2 +
              "A. Condutor Ilum C1 -2 : " +
              condutorIlumCirc2 +
              "mm²"
          );
          break;
        case "3":
          tensaoResIlum3 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum3 = disjTue.disjC;
          condutorIlumCirc3 = disjTue.condutorCCirc;
          alert(
            "Disjuntor Ilum C1 -3 : " +
              disjIlum3 +
              "A. Condutor Ilum C1 -3: " +
              condutorIlumCirc3 +
              "mm²"
          );
          break;
        case "4":
          tensaoResIlum4 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum4 = disjTue.disjC;
          condutorIlumCirc4 = disjTue.condutorCCirc;
          alert(
            "Disjuntor Ilum C1 -4 : " +
              disjIlum4 +
              "A. Condutor Ilum C1 -4 : " +
              condutorIlumCirc4 +
              "mm²"
          );
          break;
        case "5":
          tensaoResIlum5 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum5 = disjTue.disjC;
          condutorIlumCirc5 = disjTue.condutorCCirc;
          alert(
            "Disjuntor C1 -5 : " +
              disjIlum5 +
              "A. Condutor C1 - 5 : " +
              condutorIlumCirc5 +
              "mm²"
          );
          break;
        case "6":
          tensaoResIlum6 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum6 = disjTue.disjC;
          condutorIlumCirc6 = disjTue.condutorCCirc;
          alert(
            "Disjuntor C1 -6 : " +
              disjIlum6 +
              "A. Condutor C1 - 6 : " +
              condutorIlumCirc6 +
              "mm²"
          );
          break;
        case "7":
          tensaoResIlum7 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum7 = disjTue.disjC;
          condutorIlumCirc7 = disjTue.condutorCCirc;
          alert(
            "Disjuntor C1 -7 : " +
              disjIlum7 +
              "A. Condutor C1 - 7 : " +
              condutorIlumCirc7 +
              "mm²"
          );
          break;
        case "8":
          tensaoResIlum8 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum8 = disjTue.disjC;
          condutorIlumCirc8 = disjTue.condutorCCirc;
          alert(
            "Disjuntor C1 -8 : " +
              disjIlum8 +
              "A. Condutor C1 - 8 : " +
              condutorIlumCirc5 +
              "mm²"
          );
          break;
        case "9":
          tensaoResIlum9 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjIlum9 = disjTue.disjC;
          condutorIlumCirc9 = disjTue.condutorCCirc;
          alert(
            "Disjuntor C1 -9 : " +
              disjIlum9 +
              "A. Condutor C1 - 9 : " +
              condutorIlumCirc9 +
              "mm²"
          );
          break;
        default:
          alert(
            "ERR: Neste Aplicativos o número de CKT de Iluminação é limitado a 09 unidades."
          );
          break;
      }
      break;
    case "7": //TUG - C1
      switch (EscCargaf) {
        case "1":
          tensaoResTug1 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug1 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc1 = 2.5;
          } else {
            condutorTugCirc1 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -1 : " +
              disjTug1 +
              "A. Condutor C1 - 1 : " +
              condutorTugCirc1 +
              "mm²"
          );
          break;
        case "2":
          tensaoResTug2 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug2 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc2 = 2.5;
          } else {
            condutorTugCirc2 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -2 : " +
              disjTug2 +
              "A. Condutor C1 -2 : " +
              condutorTugCirc2 +
              "mm²"
          );
          break;
        case "3":
          tensaoResTug3 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug3 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc3 = 2.5;
          } else {
            condutorTugCirc3 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -3 : " +
              disjTug3 +
              "A. Condutor C1 -3 : " +
              condutorTugCirc3 +
              "mm²"
          );
          break;
        case "4":
          tensaoResTug4 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug4 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc4 = 2.5;
          } else {
            condutorTugCirc4 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -4 : " +
              disjTug4 +
              "A. Condutor C1 -4 : " +
              condutorTugCirc4 +
              "mm²"
          );
          break;
        case "5":
          tensaoResTug5 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug5 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc5 = 2.5;
          } else {
            condutorTugCirc5 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -5 : " +
              disjTug5 +
              "A. Condutor C1 -5 : " +
              condutorTugCirc5 +
              "mm²"
          );
          break;
        case "6":
          tensaoResTug6 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug6 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc6 = 2.5;
          } else {
            condutorTugCirc6 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -6: " +
              disjTug6 +
              "A. Condutor C1 -6 : " +
              condutorTugCirc6 +
              "mm²"
          );
          break;
        case "7":
          tensaoResTug7 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug7 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc7 = 2.5;
          } else {
            condutorTugCirc7 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -7 : " +
              disjTug7 +
              "A. Condutor C1 -7 : " +
              condutorTugCirc7 +
              "mm²"
          );
          break;
        case "8":
          tensaoResTug8 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug8 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc8 = 2.5;
          } else {
            condutorTugCirc8 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -8 : " +
              disjTug8 +
              "A. Condutor C1 - 8 : " +
              condutorTugCirc8 +
              "mm²"
          );
          break;
        case "9":
          tensaoResTug9 = tensaoC;
          disjTue = desterminaDisjuntores();
          disjTug9 = disjTue.disjC;
          if (disjTue.condutorCCirc == 1.5) {
            condutorTugCirc9 = 2.5;
          } else {
            condutorTugCirc9 = disjTue.condutorCCirc;
          }
          alert(
            "Disjuntor C1 -9 : " +
              disjTug9 +
              "A. Condutor C1 - 9 : " +
              condutorTugCirc9 +
              "mm²"
          );
          break;
        default:
          alert(
            "ERR: Neste Aplicativos o número de de aparelhos é limitado a 09 unidades."
          );
          break;
      }
      break;
  }
  botoesAvancar();
}
function botoesAvancar() {
  iterar += 1;

  if (iterar < somaCirc) {
    rodarIncluirTueEsp();
  } else {
    rodarFinal();
  }
}

function desterminaDisjuntores() {
  var Ib;
  var iB;
  var iN;
  var disjC;

  var Ftemp45 = 0.9;
  if (Fagrup <= 1) {
    Fagrupf = 1;
  } else if (Fagrup <= 2) {
    Fagrupf = 0.8;
  } else if (Fagrup <= 3) {
    Fagrupf = 0.7;
  } else if (Fagrup <= 4) {
    Fagrupf = 0.65;
  } else if (Fagrup <= 5) {
    Fagrupf = 0.6;
  } else if (Fagrup <= 6) {
    Fagrupf = 0.57;
  } else if (Fagrup <= 7) {
    Fagrupf = 0.54;
  } else if (Fagrup <= 8) {
    Fagrupf = 0.52;
  } else {
    alert(
      "ERR: Fagrup - Este aplicativo considera no máximo 8 circuitos agrupados em um eletroduto. Fator de agrupamento receberá 0.52 para continuar programa. Necessário redimensionar."
    );
    Fagrupf = 0.52;
    ERRO =
      "ERR.:FATOR DE AGRUPAMENTO.DIMENSINAMENTO RECEBEU PARÂMETROS INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
  }

  //ib<=in<=iz   i2<=1.45Iz in = coorente nominal disj, ib corrente proj,  iz= condutorCCirc - capacidade condutores 12 - corrente convenvencinal de de atuação do disjuntor @in=i2    @=1.45    1.45in<=1.45iz ic - corrente da tabela iz=ic*k1*k2*k3
  if (
    padrao == "UM1" ||
    padrao == "UM2" ||
    padrao == "UB1" ||
    padrao == "UB2"
  ) {
    Ib = potEsp / tensaoC;
    iB = Ib / (Fagrupf * Ftemp45);
    iN = iB;
  } else if (padrao == "T1" || padrao == "T2") {
    if (nCarregados == 2) {
      // alert("TebsãoC 3carreg"+tensaoC+"  |   nCarregaso: "+nCarregados)
      Ib = potEsp / tensaoC;
      iB = Ib / (Fagrupf * Ftemp45);
      iN = iB;
      // alert("IB  "+Ib+" | IN  "+iN)
    } else if (nCarregados == 3) {
      //alert("TebsãoC 3carreg"+tensaoC+"  |   nCarregaso: "+nCarregados)
      Ib = potEsp / (1.73 * tensaoC);
      iB = Ib / (Fagrupf * Ftemp45);
      iN = iB;
      //alert("IB  "+Ib+" | IN  "+iN)
    }
  }

  if (padrao == "UM1") {
    if (iN <= 6) {
      disjC = 6;
    } else if (iN <= 10) {
      disjC = 10;
    } else if (iN <= 16) {
      disjC = 16;
    } else if (iN <= 20) {
      disjC = 20;
    } else if (iN <= 25) {
      disjC = 25;
    } else if (iN <= 32) {
      disjC = 32;
    } else {
      alert(
        "ERR: UM1 - O disjuntor máximo para este padrão 'UM1' é de 32A do tipo B, se a proteção geral for do Tipo 'C'. Disjuntor deste circuito receberá 32A, para continuar dimensionamento. Necessário redimensionar."
      );
      disjC = 32;
      ERRO =
        "ERR.:UM1 - DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
    }
  } else if (padrao == "UM2") {
    if (iN <= 6) {
      disjC = 6;
    } else if (iN <= 10) {
      disjC = 10;
    } else if (iN <= 16) {
      disjC = 16;
    } else if (iN <= 20) {
      disjC = 20;
    } else if (iN <= 25) {
      disjC = 25;
    } else if (iN <= 32) {
      disjC = 32;
    } else if (iN <= 40) {
      disjC = 40;
    } else {
      alert(
        "ERR: UM2 - O disjuntor máximo para este padrão 'UM2' é de 40A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 40A, para continuar dimensionamento. Necessário redimensionar."
      );
      disjC = 40;
      ERRO =
        "ERR.:UM2 - DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
    }
  } else if (padrao == "UB1") {
    if (iN <= 6) {
      disjC = 6;
    } else if (iN <= 10) {
      disjC = 10;
    } else if (iN <= 16) {
      disjC = 16;
    } else if (iN <= 20) {
      disjC = 20;
    } else if (iN <= 25) {
      disjC = 25;
    } else if (iN <= 32) {
      disjC = 32;
    } else {
      alert(
        "ERR: UB1- O disjuntor máximo para este padrão 'UB1' é de 32A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 32A, para continuar dimensionamento. Necessário redimensionar."
      );
      disjC = 32;
      ERRO =
        "ERR.:UB1- DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
    }
  } else if (padrao == "UB2") {
    if (iN <= 6) {
      disjC = 6;
    } else if (iN <= 10) {
      disjC = 10;
    } else if (iN <= 16) {
      disjC = 16;
    } else if (iN <= 20) {
      disjC = 20;
    } else if (iN <= 25) {
      disjC = 25;
    } else if (iN <= 32) {
      disjC = 32;
    } else if (iN <= 40) {
      disjC = 40;
    } else {
      alert(
        "ERR: UB2 - O disjuntor máximo para este padrão 'UB1' é de 40A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 40A, para continuar dimensionamento. Necessário redimensionar."
      );
      disjC = 40;
      ERRO =
        "ERR.:UB2-DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
    }
  } else if (padrao == "T1") {
    if (iN <= 6) {
      disjC = 6;
    } else if (iN <= 10) {
      disjC = 10;
    } else if (iN <= 16) {
      disjC = 16;
    } else if (iN <= 20) {
      disjC = 20;
    } else if (iN <= 25) {
      disjC = 25;
    } else if (iN <= 32) {
      disjC = 32;
    } else {
      alert(
        "ERR:T1 - O disjuntor máximo para este padrão 'T1' é de 32A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 32A, para continuar dimensionamento. Necessário redimensionar."
      );
      disjC = 32;
      ERRO =
        "ERR.:T1 - DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
    }
  } else if (padrao == "T2") {
    if (iN <= 6) {
      disjC = 6;
    } else if (iN <= 10) {
      disjC = 10;
    } else if (iN <= 16) {
      disjC = 16;
    } else if (iN <= 20) {
      disjC = 20;
    } else if (iN <= 25) {
      disjC = 25;
    } else if (iN <= 32) {
      disjC = 32;
    } else if (iN <= 40) {
      disjC = 40;
    } else {
      alert(
        "ERR: T2 - O disjuntor máximo para este padrão 'T2' é de 40A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 40A, para continuar dimensionamento. Necessário redimensionar."
      );
      disjC = 40;
      ERRO =
        "ERR.:T2 -DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
    }
  }

  if (nCarregados == 2) {
    if (disjC <= 16) {
      //NBR5410 . Condutores carregados 17.5A + Ajuste Light
      condutorCCircB = 1.5;
    } else if (disjC <= 20) {
      //NBR5410 . Condutores carregados 24A + Ajuste Light
      condutorCCircB = 2.5;
    } else if (disjC <= 25) {
      //NBR5410 . Condutores carregados 32A + Ajuste Light
      condutorCCircB = 4;
    } else if (disjC <= 32) {
      //NBR5410 . Condutores carregados 41A + Ajuste Light
      condutorCCircB = 6;
    } else if (disjC <= 40) {
      //NBR5410 . Condutores carregados 57A + Ajuste Light
      condutorCCircB = 10;
    } else {
      alert(
        "ERR: CircB2-Condutor resultou superior a 10mm². Redimensione!\nSerá atribuido 10mm² para finaliza o dimensionamento."
      );
      condutorCCircB = 10;
      ERRO =
        "ERR.:CircB2-CONDUTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
    }
  } else if (nCarregados == 3) {
    if (disjC <= 10) {
      //NBR5410 . Condutores carregados 15,5A + Ajuste Light
      condutorCCircB = 1.5;
    } else if (disjC <= 20) {
      //NBR5410 . Condutores carregados 20A + Ajuste Light
      condutorCCircB = 2.5;
    } else if (disjC <= 25) {
      //NBR5410 . Condutores carregados 28A + Ajuste Light
      condutorCCircB = 4;
    } else if (disjC <= 32) {
      //NBR5410 . Condutores carregados 36A + Ajuste Light
      condutorCCircB = 6;
    } else if (disjC <= 40) {
      //NBR5410 . Condutores carregados 50A + Ajuste Light
      condutorCCircB = 10;
    } else {
      alert(
        "ERR: CircB3-Condutor resultou superior a 10mm². Redimensione! \nSerá atribuido 10mm² para finaliza o dimensionamento."
      );
      condutorCCircB = 10;
      ERRO =
        "ERR.: CircB3-CONDUTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
    }
  } else {
    alert(
      "ERR: Existem apenas duas possibilidades: 2 ou 3 condutores carregados."
    );
  }

  var queda = parseFloat(potEsp * distCirc); //Método Watt x metros

  if (queda <= 35081 && tensaoC == 127) {
    condutorCCircA = 1.5;
  } else if (queda <= 58468 && tensaoC == 127) {
    condutorCCircA = 2.5;
  } else if (queda <= 93548 && tensaoC == 127) {
    condutorCCircA = 4;
  } else if (queda <= 140322 && tensaoC == 127) {
    condutorCCircA = 6;
  } else if (queda <= 233871 && tensaoC == 127) {
    condutorCCircA = 10;
  } else if (queda <= 105270 && tensaoC == 220) {
    condutorCCircA = 1.5;
  } else if (queda <= 175450 && tensaoC == 220) {
    condutorCCircA = 2.5;
  } else if (queda <= 280720 && tensaoC == 220) {
    condutorCCircA = 4;
  } else if (queda <= 421080 && tensaoC == 220) {
    condutorCCircA = 6;
  } else if (queda <= 701800 && tensaoC == 220) {
    condutorCCircA = 10;
  } else if (queda <= 91164 && tensaoC == 219.9) {
    condutorCCircA = 1.5;
  } else if (queda <= 151940 && tensaoC == 219.9) {
    condutorCCircA = 2.5;
  } else if (queda <= 243104 && tensaoC == 219.9) {
    condutorCCircA = 4;
  } else if (queda <= 364655 && tensaoC == 219.9) {
    condutorCCircA = 6;
  } else if (queda <= 607759 && tensaoC == 219.9) {
    condutorCCircA = 10;
  } else {
    alert(
      "ERR: CircA- Condutor resultou superior a 10mm². Redimensione!\nSerá atribuido 10mm² para finaliza o dimensionamento."
    );
    condutorCCircA = 10;
    ERRO =
      "ERR.: CircA-CONDUTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE.";
  }

  if (condutorCCircA < condutorCCircB) {
    condutorCCirc = condutorCCircB;
    //alert("OBS.: Condutor dimensionado -  CircB: Ampacidade. ")
  } else {
    condutorCCirc = condutorCCircA;
    //alert("OBS.: Condutor dimensionado - CircA: Queda de tensão. ")
  }

  return {
    disjC,
    condutorCCirc,
  };
}

function rodarFinal() {
  var contIlum = 0;
  var contTug = 0;
  var contC2 = 0;
  var contC3 = 0;
  var contC4 = 0;
  var contC5 = 0;
  var contC6 = 0;
  var tensaoResIlum = [
    tensaoResIlum1,
    tensaoResIlum2,
    tensaoResIlum3,
    tensaoResIlum4,
    tensaoResIlum5,
    tensaoResIlum6,
    tensaoResIlum7,
    tensaoResIlum8,
    tensaoResIlum9,
  ];
  var tensaoResTug = [
    tensaoResTug1,
    tensaoResTug2,
    tensaoResTug3,
    tensaoResTug4,
    tensaoResTug5,
    tensaoResTug6,
    tensaoResTug7,
    tensaoResTug8,
    tensaoResTug9,
  ];
  tensaoC2fI = [
    tensaoResC21,
    tensaoResC22,
    tensaoResC23,
    tensaoResC24,
    tensaoResC25,
    tensaoResC26,
    tensaoResC27,
    tensaoResC28,
    tensaoResC29,
  ];
  tensaoC3fI = [
    tensaoResC31,
    tensaoResC32,
    tensaoResC33,
    tensaoResC34,
    tensaoResC35,
    tensaoResC36,
    tensaoResC37,
    tensaoResC38,
    tensaoResC39,
  ];
  tensaoC4fI = [
    tensaoResC41,
    tensaoResC42,
    tensaoResC43,
    tensaoResC44,
    tensaoResC45,
  ];
  tensaoC5fI = [
    tensaoResC51,
    tensaoResC52,
    tensaoResC53,
    tensaoResC54,
    tensaoResC55,
  ];
  tensaoC6fI = [
    tensaoResC61,
    tensaoResC62,
    tensaoResC63,
    tensaoResC64,
    tensaoResC65,
  ];
  var DisjTodosIlum = [
    disjIlum1,
    disjIlum2,
    disjIlum3,
    disjIlum4,
    disjIlum5,
    disjIlum6,
    disjIlum7,
    disjIlum8,
    disjIlum9,
  ];
  var DisjTodosTug = [
    disjTug1,
    disjTug2,
    disjTug3,
    disjTug4,
    disjTug5,
    disjTug6,
    disjTug7,
    disjTug8,
    disjTug9,
  ];
  var DisjTodosC2 = [
    disjTueC21,
    disjTueC22,
    disjTueC23,
    disjTueC24,
    disjTueC25,
    disjTueC26,
    disjTueC27,
    disjTueC28,
    disjTueC29,
  ];
  var DisjTodosC3 = [
    disjTueC31,
    disjTueC32,
    disjTueC33,
    disjTueC34,
    disjTueC35,
    disjTueC36,
    disjTueC37,
    disjTueC38,
    disjTueC39,
  ];
  var DisjTodosC4 = [
    disjTueC41,
    disjTueC42,
    disjTueC43,
    disjTueC44,
    disjTueC45,
  ];
  var DisjTodosC5 = [
    disjTueC51,
    disjTueC52,
    disjTueC53,
    disjTueC54,
    disjTueC55,
  ];
  var DisjTodosC6 = [
    disjTueC61,
    disjTueC62,
    disjTueC63,
    disjTueC64,
    disjTueC65,
  ];
  var descFiosC1Ilum = [];
  var descFiosC1Tug = [];
  var descFiosC2 = [];
  var descFiosC3 = [];
  var descFiosC4 = [];
  var descFiosC5 = [];
  var descFiosC6 = [];

  nCondutores1 = "1~ R+N+PE PVC-70. Cor: Vm/Az/Vd.";
  nCondutores2 = "2~ R+S+PE PVC-70. Cor: Vm/Pt/Vd.";
  nCondutores3 = "3~ R+S+T+PE PVC-70. Cor: Vm/Pt/Br/Vd.";
  for (var i = 0; i < 9; i++) {
    if (tensaoResIlum[i] == 127) {
      descFiosC1Ilum[i] = nCondutores1; //disjTue.nCondutores1;
    } else if (tensaoResIlum[i] == 220) {
      descFiosC1Ilum[i] = nCondutores2; //disjTue.nCondutores2;
    }
    if (tensaoResTug[i] == 127) {
      descFiosC1Tug[i] = nCondutores1; //disjTue.nCondutores1;
    } else if (tensaoResTug[i] == 220) {
      descFiosC1Tug[i] = nCondutores2; //disjTue.nCondutores2;
    }
    if (tensaoC2fI[i] == 127) {
      descFiosC2[i] = nCondutores1; //disjTue.nCondutores1;
    } else if (tensaoC2fI[i] == 220) {
      descFiosC2[i] = nCondutores2; //disjTue.nCondutores2;
    } else if (tensaoC2fI[i] == 219.9) {
      descFiosC2[i] = nCondutores3; //disjTue.nCondutores3;
    }
    if (tensaoC3fI[i] == 127) {
      descFiosC3[i] = nCondutores1; //disjTue.nCondutores1;
    } else if (tensaoC3fI[i] == 220) {
      descFiosC3[i] = nCondutores2; //disjTue.nCondutores2;
    } else if (tensaoC3fI[i] == 219.9) {
      descFiosC3[i] = nCondutores3; //disjTue.nCondutores3;
    }
    if (tensaoC4fI[i] == 127) {
      descFiosC4[i] = nCondutores1; //disjTue.nCondutores1;
    } else if (tensaoC4fI[i] == 220) {
      descFiosC4[i] = nCondutores2; //disjTue.nCondutores2;
    } else if (tensaoC4fI[i] == 219.9) {
      descFiosC4[i] = nCondutores3; //disjTue.nCondutores3;
    }
    if (tensaoC5fI[i] == 127) {
      descFiosC5[i] = nCondutores1; //disjTue.nCondutores1;
    } else if (tensaoC5fI[i] == 220) {
      descFiosC5[i] = nCondutores2; //disjTue.nCondutores2;
      //alert("Desc fio "+ 2)
    } else if (tensaoC5fI[i] == 219.9) {
      //alert("Desc fio "+ 3)
      descFiosC5[i] = nCondutores3; //disjTue.nCondutores3;
    }
    if (tensaoC6fI[i] == 127) {
      descFiosC6[i] = nCondutores1; //disjTue.nCondutores1;
    } else if (tensaoC6fI[i] == 220) {
      descFiosC6[i] = nCondutores2; //disjTue.nCondutores2;
    } else if (tensaoC6fI[i] == 219.9) {
      descFiosC6[i] = nCondutores3; //disjTue.nCondutores3;
    }
  }

  var CondutorIlum = [
    condutorIlumCirc1,
    condutorIlumCirc2,
    condutorIlumCirc3,
    condutorIlumCirc4,
    condutorIlumCirc5,
    condutorIlumCirc6,
    condutorIlumCirc7,
    condutorIlumCirc8,
    condutorIlumCirc9,
  ];
  var CondutorTuG = [
    condutorTugCirc1,
    condutorTugCirc2,
    condutorTugCirc3,
    condutorTugCirc4,
    condutorTugCirc5,
    condutorTugCirc6,
    condutorTugCirc7,
    condutorTugCirc8,
    condutorTugCirc9,
  ];
  var CondutorC2 = [
    condutorC2Circ1,
    condutorC2Circ2,
    condutorC2Circ3,
    condutorC2Circ4,
    condutorC2Circ5,
    condutorC2Circ6,
    condutorC2Circ7,
    condutorC2Circ8,
    condutorC2Circ9,
  ];
  var CondutorC3 = [
    condutorC3Circ1,
    condutorC3Circ2,
    condutorC3Circ3,
    condutorC3Circ4,
    condutorC3Circ5,
    condutorC3Circ6,
    condutorC3Circ7,
    condutorC3Circ8,
    condutorC3Circ9,
  ];
  var CondutorC4 = [
    condutorC4Circ1,
    condutorC4Circ2,
    condutorC4Circ3,
    condutorC4Circ4,
    condutorC4Circ5,
  ];
  var CondutorC5 = [
    condutorC5Circ1,
    condutorC5Circ2,
    condutorC5Circ3,
    condutorC5Circ4,
    condutorC5Circ5,
  ];
  var CondutorC6 = [
    condutorC6Circ1,
    condutorC6Circ2,
    condutorC6Circ3,
    condutorC6Circ4,
    condutorC6Circ5,
  ];

  numeroCirc = qC1Ilum + qC1Tug + numeroTues;

  if (padrao == "UM1" || padrao == "UB1" || padrao == "T1") {
    DG = "32A - 03kA - #6mm2";
    DR = "40A";
  } else {
    DG = "40A - 03kA - #10mm²";
    DR = "40A";
  }
  if (padrao == "UM1" || padrao == "UM2") {
    rodarRelatorio();
    tabDim.innerHTML += `<pre>
        <p>${ERRO}</p>
        <h3>Em SmartFones: visualização na horizontal |_________| </h3>
...............  
'  [ MEDIDOR ]  ' [Padrão: ${padrao}]
' PE   N   R    ' Prever DPS - Classe I 
'  |   |   |    ' DG e Condutor Geral= ${DG}
'  |___|   |    ' DG Monopolar Tipo C.
'  |   |   |    '
'  |---|---|---------------------------------
'..|...|...|....'                           | 
   Y   Y   Y                                |                                            
   .   .   .                                |                             
   .   .   .                                |                            
   .   .   .                                |
   Y   Y   Y                                |
 ...................................        |
'            [   QLF   ]            '       |
"   Y   Y   Y                       '       | 
'  PE   N   R                       '       |
'   |   |   |                       '       |
'   |   |   |          [Barramento] '       | [QLF]
'   |   |    )                 Y    '       | DG  e Condutor Geral= ${DG}
'   |   |   |                  |    '       | Mono - Tipo B
'   |   |   |-----[DPS]--------|    '       | DPS - Classe II
'   |   |---|--|--[DPS]--------|    '       | DR=${DR}
'   |---|---|--|---------------|    '       | 
'   |   |   |                  |----'-------|  
'   |   |   |                  |    '       |
'   | [''''''']                     '       |           
'   | [  IDR  ]                     '       |       
'   | [_______]                     ' [Aterramento]                
'   |   |   |                       '                      
'   |   |   |                       '     
'   |   |   |                       '                          
'   |   |   |                       '  
'   Y   Y   Y                       '                          
'   .   .   .                       '      
'   .   .   .                       '      
'   .   .   .                       '</pre>`;
    var irefIlum = 1;
    for (; irefIlum <= qC1Ilum; irefIlum++) {
      tabDim.innerHTML += `<pre>          
'           Y                       '
'           |-----[D${irefIlum}]------> Circuito ${irefIlum} - Iluminação (${
        tensaoResIlum[contIlum]
      }V)
'                                   ' D${irefIlum}: ${
        DisjTodosIlum[contIlum]
      }A - #${CondutorIlum[contIlum]}mm².
'                                   ' ${descFiosC1Ilum[contIlum++]}</pre>`;
    }
    var ireftug = irefIlum;
    for (; ireftug < qC1Tug + irefIlum; ireftug++) {
      tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${ireftug}]------> Circuito ${ireftug} - TUG - Tomadas (${
        tensaoResTug[contTug]
      }V)
'                                   ' D${ireftug}: ${
        DisjTodosTug[contTug]
      }A - #${CondutorTuG[contTug]}mm².
'                                   ' ${descFiosC1Tug[contTug++]}</pre>`;
    }
    var irefC2 = ireftug;

    for (; irefC2 < qC2f + ireftug; irefC2++) {
      tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC2}]------> Circuito ${irefC2} - Aparelho de Aquecimento C1 - (${
        tensaoC2fI[contC2]
      }V)
'                                   ' D${irefC2}: ${DisjTodosC2[contC2]}A - #${
        CondutorC2[contC2]
      }mm².
'                                   ' ${descFiosC2[contC2++]}</pre>`;
    }

    var irefC3 = irefC2;
    for (; irefC3 < qC3f + irefC2; irefC3++) {
      tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC3}]------> Circuito ${irefC3}  - Ar Condicionado C3 - (${
        tensaoC3fI[contC3]
      }V)
'                                   ' D${irefC3}: ${DisjTodosC3[contC3]}A - #${
        CondutorC3[contC3]
      }mm².
'                                   ' ${descFiosC3[contC3++]}</pre>`;
    }
    var irefC4 = irefC3;
    for (; irefC4 < qC4f + irefC3; irefC4++) {
      tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC4}]------> Circuito ${irefC4} - Aparelhos tipo C4 - (${
        tensaoC4fI[contC4]
      }V)
'                                   ' D${irefC4}: ${DisjTodosC4[contC4]}A - #${
        CondutorC4[contC4]
      }mm².
'                                   ' ${descFiosC4[contC4++]}</pre>`;
    }
    var irefC5 = irefC4;
    for (; irefC5 < qC5f + irefC4; irefC5++) {
      tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC5}]------> Circuito ${irefC5} - Aparelhos tipo C5 - (${
        tensaoC5fI[contC5]
      }V)
'                                   ' D${irefC5}: ${DisjTodosC5[contC5]}A - #${
        CondutorC5[contC5]
      }mm².
'                                   ' ${descFiosC5[contC5++]}</pre>`;
    }
    var irefC6 = irefC5;
    for (; irefC6 < qC6f + irefC5; irefC6++) {
      tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC6}]------> Circuito ${irefC6} - Aparelhos tipo C6 - (${
        tensaoC6fI[contC6]
      }V)
'                                   ' D${irefC6}: ${DisjTodosC6[contC6]}A - #${
        CondutorC6[contC6]
      }mm².
'                                   ' ${descFiosC6[contC6++]}</pre>`;
    }
    tabDim.innerHTML += `<pre>         
'                                   '
'...................................' 
<h2>Informações adicionais podem ser solicitadas pela Light:</h2>
<p><strong>OBS.: Para a solicitação de fornecimento à Ligth, o padrão deve estar montado.</strong> </p>
<ul>
<li>Anotação ou registro de responsabilidade técnica.</li>
<li>Planta de localização pode ser solicitada. </li>
<li>Distancia entre o poste Light mais próximo e seu ponto de consumo.</li>
<li>Posição do poste da Light: do mesmo lado da rua do imóvel ou do outro lado da rua.</li>
<li>Tipo, material e altura da ancoragem: Poste, Pontalete, Fachada... </li>
<li>Tipo da descida: se tubulação deve-se indicar as medidas.  </li>
<li>Outros:Sugerimos o <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a> a partir da página 149, onde encontrará desenhos e medidas.</li>

</ul>
<p>Exemplo de planta de Localização para solicitação de fornecimento Light padrão 15KVA(40A ou 32A):  </p>
<p><img src="plantaSituacao.png"></p>
<p><a href="https://agenciavirtual.light.com.br/AGV_Ligacao_Nova_VW/Ligacao_Nova.aspx" target="_blank">Visite a área de solicitação de medidor Light padrão 15KVA, para ligações novas, clicando aqui!<a></p>
<h6>${ERRO}</h6>

</pre>`;
  } else if (padrao == "UB1" || padrao == "UB2") {
    rodarRelatorio();
    tabDim.innerHTML += `
        <p>${ERRO}</p>
        <h3>Em SmartFones: visualização na horizontal |_________| </h3>
        <pre>
.................  
'    [MEDIDOR]    ' [Padrão: ${padrao}]
' PE   N   R   S  ' Prever DPS - Classe I 
'  |   |   |   |  ' DG e Condutor Geral = ${DG}
'  |___|   |   |  ' DG Bipolor Tipo C.
'  |   |   |   |  '
'  |---|---|---|------------------------------
'..|...|...|...|..'                           |
   Y   Y   Y   Y                              |                    
   .   .   .   .                              |
   .   .   .   .                              |
   .   .   .   .                              |
   Y   Y   Y   Y                              |                             
 .....................................        |
'            [   QLF   ]              '       |
'   Y   Y   Y   Y                     '       |
'  PE   N   R   S                     '       |
'   |   |   |   |                     '       |
'   |   |   |   |        [Barramento] '       | 
'   |   |    )---)               Y    '       | DG e Condutor Geral= ${DG}
'   |   |   |   |                |    '       | Bi-Tipo B
'   |   |   |   |---[DPS]--------|    '       | DPS - Classe II
'   |   |   |---|---[DPS]--------|    '       | DR=${DR}
'   |   |---|---|-|-[DPS]--------|    '       | 
'   |---|---|---|-|--------------|----'-------| 
'   |   |   |   |                     '       |
'   | [''''''''''']                   '       |           
'   | [    IDR    ]                   '       |       
'   | [___________]                   ' [Aterramento]                
'   |   |   |   |                     '                      
'   |   |   |   |                     '     
'   |   |   |   |                     '     
'   |   |   |   |                     '   
'   Y   Y   Y   Y                     '                            
'   .   .   .   .                     '       
'   .   .   .   .                     '       
'   .   .   .   .                     '</pre>`;
    var irefIlum = 1;
    for (; irefIlum <= qC1Ilum; irefIlum++) {
      tabDim.innerHTML += `<pre>          
'           Y                         '
'           |-----[D${irefIlum}]------> Circuito ${irefIlum} - Iluminação (${
        tensaoResIlum[contIlum]
      }V)
'                                     ' D${irefIlum}: ${
        DisjTodosIlum[contIlum]
      }A - #${CondutorIlum[contIlum]}mm².
'                                   ' ${descFiosC1Ilum[contIlum++]}</pre>`;
    }
    var ireftug = irefIlum;
    for (; ireftug < qC1Tug + irefIlum; ireftug++) {
      tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${ireftug}]------> Circuito ${ireftug} - TUG - Tomadas (${
        tensaoResTug[contTug]
      }V)
'                                     ' D${ireftug}: ${
        DisjTodosTug[contTug]
      }A - #${CondutorTuG[contTug]}mm².
'                                   ' ${descFiosC1Tug[contTug++]}</pre>`;
    }
    var irefC2 = ireftug;
    for (; irefC2 < qC2f + ireftug; irefC2++) {
      tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC2}]------> Circuito ${irefC2} - Aparelho de Aquecimento C1 - (${
        tensaoC2fI[contC2]
      }V)
'                                     ' D${irefC2}: ${
        DisjTodosC2[contC2]
      }A - #${CondutorC2[contC2]}mm².
'                                   ' ${descFiosC2[contC2++]}</pre>`;
    }
    var irefC3 = irefC2;
    for (; irefC3 < qC3f + irefC2; irefC3++) {
      tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC3}]------> Circuito ${irefC3} - Ar Condicionado C3 - (${
        tensaoC3fI[contC3]
      }V)
'                                     ' D${irefC3}: ${
        DisjTodosC3[contC3]
      }A - #${CondutorC3[contC3]}mm².
'                                   ' ${descFiosC3[contC3++]}</pre>`;
    }
    var irefC4 = irefC3;
    for (; irefC4 < qC4f + irefC3; irefC4++) {
      tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC4}]------> Circuito ${irefC4} - Aparelhos tipo C4 - (${
        tensaoC4fI[contC4]
      }V) 
'                                     ' D${irefC4}: ${
        DisjTodosC4[contC4]
      }A - #${CondutorC4[contC4]}mm².
'                                   ' ${descFiosC4[contC4++]}</pre>`;
    }
    var irefC5 = irefC4;
    for (; irefC5 < qC5f + irefC4; irefC5++) {
      tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC5}]------> Circuito ${irefC5} - Aparelhos tipo C5 - (${
        tensaoC5fI[contC5]
      }V)
'                                     ' D${irefC5}: ${
        DisjTodosC5[contC5]
      }A - #${CondutorC5[contC5]}mm².
'                                   ' ${descFiosC5[contC5++]}</pre>`;
    }
    var irefC6 = irefC5;
    for (; irefC6 < qC6f + irefC5; irefC6++) {
      tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC6}]------> Circuito ${irefC6} - Aparelhos tipo C6 - (${
        tensaoC6fI[contC6]
      }V)
'                                     ' D${irefC6}: ${
        DisjTodosC6[contC6]
      }A - #${CondutorC6[contC6]}mm².
'                                   ' ${descFiosC6[contC6++]}</pre>`;
    }
    tabDim.innerHTML += `<pre>         
'                                     '
'.....................................' 
<h2>Informações adicionais podem ser solicitadas pela Light:</h2>
<p><strong>OBS.: Para a solicitação de fornecimento à Ligth, o padrão deve estar montado.</strong> </p>
<ul>
<li>Anotação ou registro de responsabilidade técnica.</li>
<li>Planta de localização pode ser solicitada. </li>
<li>Distancia entre o poste Light mais próximo e seu ponto de consumo.</li>
<li>Posição do poste da Light: do mesmo lado da rua do imóvel ou do outro lado da rua.</li>
<li>Tipo, material e altura da ancoragem: Poste, Pontalete, Fachada... </li>
<li>Tipo da descida: se tubulação deve-se indicar as medidas.  </li>
<li>Outros:Sugerimos o <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a> a partir da página 149, onde encontrará desenhos e medidas.</li>

</ul>
<p>Exemplo de planta de Localização para solicitação de fornecimento Light padrão 15KVA(40A ou 32A):  </p>
<p><img src="plantaSituacao.png"></p>
<p><a href="https://agenciavirtual.light.com.br/AGV_Ligacao_Nova_VW/Ligacao_Nova.aspx" target="_blank">Visite a área de solicitação de medidor Light padrão 15KVA, para ligações novas, clicando aqui!<a></p>
<h6>${ERRO}</h6>
</pre>`;
  } else if (padrao == "T1" || padrao == "T2") {
    rodarRelatorio();
    tabDim.innerHTML += `
        <p>${ERRO}</p>
        <h3>Em SmartFones: visualização na horizontal |_________| </h3>
        <pre>
......................  
'      [MEDIDOR]     ' [Padrão: ${padrao}]
' PE   N   R   S   T ' Prever DPS - Classe I 
'  |   |   |   |   | ' DG e Condutor Geral = ${DG}
'  |___|   |   |   | ' DG Tripolar Tipo C.
'  |   |   |   |   | '
'  |---|---|---|---|------------------------------
'..|...|...|...|...|.'                           |
   Y   Y   Y   Y   Y                             |                    
   .   .   .   .   .                             |
   .   .   .   .   .                             |
   .   .   .   .   .                             |
   Y   Y   Y   Y   Y                             |
 ........................................        |
'              [   QLF   ]               '       |
'   Y   Y   Y   Y   Y                    '       Y
'  PE   N   R   S   T                    '       |
'   |   |   |   |   |                    '       |
'   |   |   |   |   |       [Barramento] '       |
'   |   |    )---)---)              Y    '       | DG e Condutor Geral= ${DG} 
'   |   |   |   |   |               |    '       | Tri - Tipo B
'   |   |   |   |   |-----[DPS]-----|    '       | DPS - Classe II
'   |   |   |   |---|-----[DPS]-----|    '       | DR=${DR}
'   |   |   |---|---|-----[DPS]-----|    '       | 
'   |   |---|---|---|--|--[DPS]-----|----'-------|  
'   |---|---|---|---|--|------------|    '       |
'   |   |   |   |   |                    '       |
'   | [''''''''''''''']                  '       |           
'   | [      IDR      ]                  '       |       
'   | [_______________]                  ' [Aterramento]                
'   |   |   |   |   |                    '                      
'   |   |   |   |   |                    '     
'   |   |   |   |   |                    '     
'   |   |   |   |   |                    '
'   Y   Y   Y   Y   Y                    ' 
'   .   .   .   .   .                    '
'   .   .   .   .   .                    '
'   .   .   .   .   .                    '</pre>`;
    var irefIlum = 1;
    for (; irefIlum <= qC1Ilum; irefIlum++) {
      tabDim.innerHTML += `<pre>
'           Y                            '
'           |-----[D${irefIlum}]------> Circuito ${irefIlum} - Iluminação (${
        tensaoResIlum[contIlum]
      }V)
'                                        ' D${irefIlum}: ${
        DisjTodosIlum[contIlum]
      }A - #${CondutorIlum[contIlum]}mm².
'                                   ' ${descFiosC1Ilum[contIlum++]}</pre>`;
    }
    var ireftug = irefIlum;
    for (; ireftug < qC1Tug + irefIlum; ireftug++) {
      tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${ireftug}]------> Circuito ${ireftug} - TUG - Tomadas (${
        tensaoResTug[contTug]
      }V)
'                                        ' D${ireftug}: ${
        DisjTodosTug[contTug]
      }A - #${CondutorTuG[contTug]}mm².
'                                   ' ${descFiosC1Tug[contTug++]}</pre>`;
    }
    var irefC2 = ireftug;
    for (; irefC2 < qC2f + ireftug; irefC2++) {
      tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC2}]------> Circuito ${irefC2} - Aparelho de Aquecimento C1 - (${
        tensaoC2fI[contC2]
      }V)
'                                        ' D${irefC2}: ${
        DisjTodosC2[contC2]
      }A - #${CondutorC2[contC2]}mm².
'                                   ' ${descFiosC2[contC2++]}</pre>`;
    }
    var irefC3 = irefC2;
    for (; irefC3 < qC3f + irefC2; irefC3++) {
      tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC3}]------> Circuito ${irefC3} - Ar Condicionado C3 - (${
        tensaoC3fI[contC3]
      }V)
'                                        ' D${irefC3}: ${
        DisjTodosC3[contC3]
      }A - #${CondutorC3[contC3]}mm².
'                                   ' ${descFiosC3[contC3++]}</pre>`;
    }
    var irefC4 = irefC3;
    for (; irefC4 < qC4f + irefC3; irefC4++) {
      tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC4}]------> Circuito ${irefC4} - Aparelhos tipo C4 - (${
        tensaoC4fI[contC4]
      }V)
'                                        ' D${irefC4}: ${
        DisjTodosC4[contC4]
      }A - #${CondutorC4[contC4]}mm².
'                                   ' ${descFiosC4[contC4++]}</pre>`;
    }
    var irefC5 = irefC4;
    for (; irefC5 < qC5f + irefC4; irefC5++) {
      tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC5}]------> Circuito ${irefC5} - Aparelhos tipo C5 - (${
        tensaoC5fI[contC5]
      }V)
'                                        ' D${irefC5}: ${
        DisjTodosC5[contC5]
      }A - #${CondutorC5[contC5]}mm².
'                                   ' ${descFiosC5[contC5++]}</pre>`;
    }
    var irefC6 = irefC5;
    for (; irefC6 < qC6f + irefC5; irefC6++) {
      tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC6}]------> Circuito ${irefC6} - Aparelhos tipo C6 - (${
        tensaoC6fI[contC6]
      }V)
'                                        ' D${irefC6}: ${
        DisjTodosC6[contC6]
      }A - #${CondutorC6[contC6]}mm².
'                                   ' ${descFiosC6[contC6++]}</pre>`;
    }
    tabDim.innerHTML += `<pre>         
'                                        '
'........................................' 
<h2>Informações adicionais podem ser solicitadas pela Light:</h2>
<p><strong>OBS.: Para a solicitação de fornecimento à Ligth, o padrão deve estar montado.</strong> </p>
<ul>
<li>Anotação ou registro de responsabilidade técnica.</li>
<li>Planta de localização pode ser solicitada. </li>
<li>Distancia entre o poste Light mais próximo e seu ponto de consumo.</li>
<li>Posição do poste da Light: do mesmo lado da rua do imóvel ou do outro lado da rua.</li>
<li>Tipo, material e altura da ancoragem: Poste, Pontalete, Fachada... </li>
<li>Tipo da descida: se tubulação deve-se indicar as medidas.  </li>
<li>Outros:Sugerimos o <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a> a partir da página 149, onde encontrará desenhos e medidas.</li>

</ul>
<p>Exemplo de planta de Localização para solicitação de fornecimento Light padrão 15KVA(40A ou 32A):  </p>
<p><img src="plantaSituacao.png"></p>
<p><a href="https://agenciavirtual.light.com.br/AGV_Ligacao_Nova_VW/Ligacao_Nova.aspx" target="_blank">Visite a área de solicitação de medidor Light padrão 15KVA, para ligações novas, clicando aqui!<a></p>
<h6>${ERRO}</h6>
</pre>`;
  }

  tabDim.innerHTML += `<h6 class="txt"><strong>OBS.: Este projeto destina-se apenas ao aprendizado e para o uso da aplicação deve-se ter conhecimentos de Instalações elétricas prediais, estando o seu uso restrito à estudantes e, logo, esta aplicação destina-se aos estudos e pesquisa de eletricistas. Não autorizamos seu uso comercial ou profissional, logo, não nos responsabilizamos pelo mau uso do conhecimento disponibilizado aqui, ou pela desvirtuação de seu propósito. Ressaltamos a importância de se consultar seu professor ou um profissional habilitado na área de Instalações elétricas sobre os resultados encontrados em seu estudo, antes de aplicá-lo, como também alertamos para o risco de exercício ilegal da profissão em casos de atuação em obras que requeiram a obrigatoriedade de RRT, ART ou TRT.</strong></h6>
    <fieldset>
     <legend>Finalizar</legend>
     <a href="../../pages/other/moldura.html"><input type="button" value="Retornar ao início"></a>
     <&nbsp;&nbsp;>
     <input type="button" value="Imprimir esta página"  onClick="window.print()">
     </fieldset>
    </form>`;
}

function rodarRelatorio() {
  potTotalDem =
    parseFloat(d1) +
    parseFloat(d2) +
    parseFloat(d3) +
    parseFloat(d4) +
    parseFloat(d5) +
    parseFloat(d6);
  potFinalInst =
    parseFloat(c1) +
    parseFloat(c2f) +
    parseFloat(c3f) +
    parseFloat(c4f) +
    parseFloat(c5f) +
    parseFloat(c6f);
  numeroTues =
    parseFloat(qC2f) +
    parseFloat(qC3f) +
    parseFloat(qC4f) +
    parseFloat(qC5f) +
    parseFloat(qC6f);

  tabDim.innerHTML = `<h1> Relatório final do dimensionamento para uso didático</h1>`;
  tabDim.innerHTML += `<h2>Informações para solicitação de fornecimento:</h2>
                                            <br>
                                            <ol>
                                            <li> Data: ${data.value}.</li>
                                            <li> Local: ${ender.value}.</li>
                                            <li> Usuário: ${nome.value}.</li>
                                            </ol>
                                        <br>`;
  tabDim.innerHTML += `<p>OBS.: O dimensionamento foi feito considerando o padrão urbano LIGHT-RJ 15KVA: de UM1 até T2 - (RECON-BT 2023).</p><p><a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a> </p><br>`;

  tabDim.innerHTML += `<p>Neste dimensionamento foram encontrados os seguintes resultados: </p>`;
  tabDim.innerHTML += `<ol>
                                            <li>Número de dependências: ${depend.value} dependências.</li>
                                            <li>Área total da residência: ${aCasa} m².</li>
                                            <li>Perímetro total da residência: ${perimetroCasa} m.</li>
                                            <li>Número de TUGs: ${numeroTugs} TUGs.</li> 
                                            <li>Número de TUES: ${numeroTues} TUEs</li>
                                            <li>Potência Instalada de TUGs: ${potTugs} VA. </li>
                                            <li>Potência Instalada de Iluminação: ${potIlum} VA. </li>
                                            <li>Potencia Instalada resultante C1 (kVA * m² // Tug + Iluminação): ${c1} VA.</li>
                                            <li>Potencia Instalada resultante C2: ${c2f} VA.</li>
                                            <li>Potencia Instalada resultante C3: ${c3f} VA.</li>
                                            <li>Potencia Instalada resultante C4: ${c4f} VA.</li>
                                            <li>Potencia Instalada resultante C5: ${c5f} VA.</li>
                                            <li>Potencia Instalada resultante C6: ${c6f} VA.</li>
                                            <li>Potencia Final Instalada resultante C: ${potFinalInst} VA.</li>
                                            <li>Potencia demandada resultante D1 (kVA * m² // Tug + Iluminação): ${d1} VA.</li>
                                            <li>Potencia demandada resultante D2: ${d2} VA.</li>
                                            <li>Potencia demandada resultante D3: ${d3} VA.</li>
                                            <li>Potencia demandada resultante D4: ${d4} VA.</li>
                                            <li>Potencia demandada resultante D5: ${d5} VA.</li>
                                            <li>Potencia demandada resultante D6: ${d6} VA.</li>
                                            <li>Potencia Final demandada D: ${potTotalDem} VA.</li>
                                            </ol><br>`;

  tabDim.innerHTML += `<h3> Tabela para medidor LIGHT - Ligações novas e alterações de carga, com carga demandada até 15 kVA (40 A), sem obrigatoriedade de apresentação de ART, RRT ou TRT.</h3>`;

  if (potTotalDem <= 4000) {
    tabDim.innerHTML += `
                                            <fieldset>
                                            <legend>Padrão Urbano Monofáfico 1 - UM1</legend>
                                            <ul>
                                            <li>Potencia demanda: ${potTotalDem} VA.</li>
                                            <li>Tensão Nominal(V): 127V.</li>
                                            <li>Nº de fases: 01.</li>
                                            <li>Demanda (KVA): D<= 4 KVA.</li>
                                            <li>Proteção Geral (A): 32A - 1F+1N.</li>
                                            <li>Condutores(mm²):  06 mm²</li>
                                            </ul>
                                            </fieldset>`;
    tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`;
  } else if (potTotalDem <= 5000) {
    tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Padrão Urbano Monofásico 2 - UM2</legend>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 127V.</li>
                                                <li>Nº de fases: 01.</li>
                                                <li>Demanda (KVA): D<= 5 KVA.</li>
                                                <li>Proteção Geral (A): 40A - 1F+1N.</li>
                                                <li>Condutores(mm²):  10 mm²</li>
                                                </ul>
                                                </fieldset>`;
    tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`;
  } else if (potTotalDem <= 7000) {
    tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Padrão: Urbano Monofásico 3 - UM3 ou Urbano Bifásico 1 - UB1</legend>
                                                <h4>Urbano Monofásico 3 - UM3</h4>
                                                <p>Obs.: UM3 - Padrão 15kVA(63A):Obrigatoriedade de apresentação de ART, RRT ou TRT</p>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 127V.</li>
                                                <li>Nº de fases: 01.</li>
                                                <li>Demanda (KVA): D<= 8 KVA.</li>
                                                <li>Proteção Geral (A): 63A - 1F+1N.</li>
                                                <li>Condutores(mm²):  16 mm²</li>
                                                </ul>

                                                <h4>Urbano Bifásico 1 - UB1</h4>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220V/127V.</li>
                                                <li>Nº de fases: 02.</li>
                                                <li>Demanda (KVA): D<= 7 KVA.</li>
                                                <li>Proteção Geral (A): 32A - 2F+1N.</li>
                                                <li>Condutores(mm²):  06 mm²</li>
                                                </ul>
                                                </fieldset>`;
    tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`;
  } else if (potTotalDem <= 8000) {
    tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Padrão: Urbano Monofásico 3 - UM3 ou Urbano Bifásico 2 - UB2</legend>
                                                <h4>Urbano Monofásico 3 - UM3</h4>
                                                <p>Obs.:UM3 - Padrão 15kVA(63A):Obrigatoriedade de apresentação de ART, RRT ou TRT</p>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 127V.</li>
                                                <li>Nº de fases: 01.</li>
                                                <li>Demanda (KVA): D<= 8 KVA.</li>
                                                <li>Proteção Geral (A): 63A - 1F+1N.</li>
                                                <li>Condutores(mm²):  16 mm²</li>
                                                </ul>

                                                <h4>Urbano Bifásico 2 - UB2</h4>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220V/127V.</li>
                                                <li>Nº de fases: 02.</li>
                                                <li>Demanda (KVA): D<= 8 KVA.</li>
                                                <li>Proteção Geral (A): 40A - 2F+1N.</li>
                                                <li>Condutores(mm²):  10 mm²</li>
                                                </ul>
                                                </fieldset>`;
    tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`;
  } else if (potTotalDem <= 12000) {
    tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Urbano Bifásico 3 - UB3 ou Padrão Trifásico 1 - T1</legend>
                                                <h4>Urbano Bifásico 3 - UB3</h4>
                                                <p>Obs.: UB3 - Padrão 15kVA(63A):Obrigatoriedade de apresentação de ART, RRT ou TRT</p>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220V/127V.</li>
                                                <li>Nº de fases: 02.</li>
                                                <li>Demanda (KVA): D<= 13 KVA.</li>
                                                <li>Proteção Geral (A): 63A - 2F+1N.</li>
                                                <li>Condutores(mm²):  16 mm²</li>
                                                </ul>

                                                <h4>Padrão Trifásico 1 - T1</h4>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220/127V.</li>
                                                <li>Nº de fases: 03.</li>
                                                <li>Demanda (KVA): D<= 12 KVA.</li>
                                                <li>Proteção Geral (A): 32A - 03F+1N.</li>
                                                <li>Condutores(mm²):  06 mm²</li>
                                                </ul>
                                                </fieldset>`;
    tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`;
  } else if (potTotalDem <= 13000) {
    tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Urbano Bifásico 3 - UB3 ou Padrão Trifásico 2 - T2</legend>
                                                <h4>Urbano Bifásico 3 - UB3</h4>
                                                <p>Obs.:UB3 - Padrão 15kVA(63A):Obrigatoriedade de apresentação de ART, RRT ou TRT</p>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220V/127V.</li>
                                                <li>Nº de fases: 02.</li>
                                                <li>Demanda (KVA): D<= 13 KVA.</li>
                                                <li>Proteção Geral (A): 63A - 2F+1N.</li>
                                                <li>Condutores(mm²):  16 mm²</li>
                                                </ul>

                                                <h4>Padrão Trifásico 2 - T2</h4>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220/127V.</li>
                                                <li>Nº de fases: 03.</li>
                                                <li>Demanda (KVA): D<= 15 KVA.</li>
                                                <li>Proteção Geral (A): 40A - 03F+1N.</li>
                                                <li>Condutores(mm²):  10 mm²</li>
                                                </ul>
                                                </fieldset>`;
    tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`;
  } else if (potTotalDem <= 15000) {
    tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Padrão Trifásico 2 - T2</legend>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220/127V.</li>
                                                <li>Nº de fases: 03.</li>
                                                <li>Demanda (KVA): D<= 15 KVA.</li>
                                                <li>Proteção Geral (A): 40A - 03F+1N.</li>
                                                <li>Condutores(mm²):  10 mm²</li>
                                                </ul>
                                                </fieldset>`;
    tabDim.innerHTML += `<br><p>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`;
  } else if (potTotalDem > 15000) {
    tabDim.innerHTML += `
                                            <h4>Padrão Trifásico - Maior do que 
                                             15KVA</h4>
        
                                             <p>  ERRO:  Acima de 15KVA é necessário contratar um técnico ou engenheiro com obrigatoriedade de apresentação de ART, RRT ou TRT</p><br>
                                             <p>Consulte: Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="https://www.light.com.br/Documentos%20Compartilhados/Normas-Tecnicas/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p>
                                             <p><a href="mailto:missao.filosofica@gmail.com">Missão: Instalações Elétricas.</a> </p><br>`;
  }
}
