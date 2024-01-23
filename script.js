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
