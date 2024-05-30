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
  consMedio14 = Number(window.document.querySelector("#nMes14").value);

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
  consDia = consMedio / 30;
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
    Ead = Ead / 0.85;
    Pa = 1 - Math.cos(difAnLat);
  } else if (direcao === 3) {
    Ead = kWp;
    angulo = -180 - (latitude + angulo);
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    Ead = Ead / 0.53;
    Pa = -1 / Math.cos(difAnLat);
  } else if (direcao === 4) {
    Ead = kWp;
    angulo = -180 - (latitude + angulo);
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    Ead = Ead / 0.6;
    Pa = -1 / Math.cos(difAnLat);
  } else if (direcao === 5) {
    Ead = kWp;
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    Ead = Ead / 0.95;
    Pa = 1 - Math.cos(difAnLat);
  } else if (direcao === 6) {
    Ead = kWp;
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    Ead = Ead / 0.9;
    Pa = 1 - Math.cos(difAnLat);
  } else {
    Ead = kWp;
    Angradianos = angulo * (Math.PI / 180);
    Latradianos = latitude * (Math.PI / 180);
    difAnLat = Angradianos - Latradianos;
    Ead = Ead / 1;
    Pa = 1 - Math.cos(difAnLat);
  }
  Eadf = Ead + Ead * Pa;
  nMod = Math.round((Eadf * 1000) / potMod);
  ArMod = CompMod * largMod * nMod;
  ajPlacas = (nMod+ 1)* potMod;

  distancia =
    3.5 * Ldistancia * Math.sin(Latradianos) -
    Ldistancia * Math.cos(Latradianos);

  alert(
    `   Esta Usina, nomeada de ${nomeUsina} e orientada para a direção   ${direcao} (Onde: 1 - Norte, 2 - Leste ou Oeste, 3 - Sul, 4 - Sudeste ou Sudoeste, 5 - Nordeste ou Noroeste, e 6 para horizontal 0º.), e à inclinação de ${angulo} Graus, foi projetada para atender o consumo médio mensal de  ${consMedio.toFixed(
      2
    )} kW e consumo diário de ${consDia.toFixed(
      2
    )}Kw. Considerando a irradiação média de  ${irrad} kWh/m².dia, demandará uma potência de geração de  ${Eadf.toFixed(
      2
    )} kWp. Necessitando de  ${nMod} módulos  de  ${potMod} Wp. O Inversor (ou MicroInversores), deve ser de  ${(
      ajPlacas / 1000
    ).toFixed(
      2
    )} KWp (Podendo ser superior ou inferior a esse valor em função de seu DATASHEET. Aconselha-se não variar mais do que 20%).\n   A área aproximada, necessária para a instalação dos painéis é de ${ArMod.toFixed(
      2
    )} m².\n   Se a usina for no solo ou em uma laje, a fim de evitar o sombreamento usamos dois métodos para garantir o distanciamento das fileiras de painéis: Método 01 para mínimo:  D = L x cos@; h = L x sen@; d = (3,5 x h) – D = ${distancia.toFixed(
      2
    )} m, e Método 02 para máximo: d = FS + (3,5 x h) – D, onde FS. d = ${(
      distancia + 1
    ).toFixed(
      2
    )} m. Existem outros métodos no mercado, mas estes são bem utilizados.\n   AGORA VOCÊ DEVE APRESENTAR A PROPOSTA AO CLIENTE E AJUSTAR OS CALCULOS. DEPOIS DE TUDO AJUSTADO EM FUMÇÃO DA NECESSIDADE DO CLIENTE, DEVE PESQUISAR AS OPÇÕES DE KITs COM A POTÊNCIA CALCULADA E EM FUNÇÃO DO TIPO DE TELHADO.\n 
       OS KITS, NO GERAL, APRESENTAM PREÇOS MAIS ATRATIVOS DO QUE A COMPRA EM SEPARADO. E A FIDELIDADE A UM FORNECEDOR PODE REVELAR DESCONTOS BEM INTERESSANTES.\n   NÃO ESQUEÇA! A USINA É DIMENSIONADA PELO INTERESSE, LOGO, ESSE CALCULO FRIO PODE SER AJUSTADO PARA MAIOR OU MENOR APÓS CONFRONTAR A TÉCNICA AO INTERESSE DO CLIENTE.\n   CONVERSE BASTANTE ANTES DE INICIAR A COMPRA DOS MATERIAIS!
       Referencia: ZILLES, R. et al. Sistemas fotovoltaicos conectados à rede elétrica. 1. ed. São Paulo: Oficina de Textos, 2012. E-book. Disponível em: https://plataforma.bvirtual.com.br. Acesso em: 20 maio 2024.`
  );
}
