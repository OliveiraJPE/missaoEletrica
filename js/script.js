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
