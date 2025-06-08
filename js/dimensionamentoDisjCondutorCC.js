// Refatoração completa mantendo compatibilidade com HTML original

function selecionarDisjuntor(disj) {
  const disjuntoresPadrao = [6, 10, 16, 20, 25, 32, 40, 45, 50, 60, 70, 80, 90, 100, 120, 150, 175];
  for (let valor of disjuntoresPadrao) {
    if (disj <= valor) return valor;
  }
  alert(`ERRO: Disjuntor maior do que 175A --> (${disj.toFixed(0)}A). Consulte um técnico.`);
  return 0;
}

function protfio(IBcc, Scc, disj) {
  disj = selecionarDisjuntor(disj);
  const seccoes = [
    { correnteMax: 6, bitolas:   [4, 4, 4, 4, 6, 10, 16, 25, 35, 50, 70, 95] },
    { correnteMax: 10, bitolas:  [4, 4, 4, 4, 6, 10, 16, 25, 35, 50, 70, 95] },
    { correnteMax: 16, bitolas:  [4, 4, 4, 4, 6, 10, 16, 25, 35, 50, 70, 95] },
    { correnteMax: 22, bitolas:  [4, 4, 4, 4, 6, 10, 16, 25, 35, 50, 70, 95] },
    { correnteMax: 28, bitolas:  [4, 4, 4, 4, 6, 10, 16, 25, 35, 50, 70, 95] },
    { correnteMax: 36, bitolas:  [6, 6, 6, 6, 6, 10, 16, 25, 35, 50, 70, 95] },
    { correnteMax: 49, bitolas:  [10, 10, 10, 10, 10, 16, 25, 35, 50, 70, 95] },
    { correnteMax: 63, bitolas:  [16, 16, 16, 16, 16, 16, 25, 35, 50, 70, 95] },
    { correnteMax: 83, bitolas:  [25, 25, 25, 25, 25, 25, 25, 35, 50, 70, 95] },
    { correnteMax: 100, bitolas: [35, 35, 35, 35, 35, 35, 35, 35, 50, 70, 95] },
    { correnteMax: 123, bitolas: [50, 50, 50, 50, 50, 50, 50, 50, 50, 70, 95] },
    { correnteMax: 151, bitolas: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 95] },
    { correnteMax: 178, bitolas: [95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95] }
  ];

  for (const secao of seccoes) {
    if (IBcc < secao.correnteMax) {
      for (let bitola of secao.bitolas) {
        if (Scc <= bitola) {
          return { CondFio: parseFloat(bitola), DisjProt: parseFloat(disj) };
        }
      }
    }
  }
  alert("ERRO: Ampacidade inválida. Condutor excede 95mm² ou disjuntor excede 175A.");
  return { CondFio: 0, DisjProt: disj };
}

function quedaTensao(trecho, ibc, Vmax) {
  return parseFloat((2 * trecho * ibc) / (44 * 0.03 * Vmax));
}

function dimensCircCC() {
  alert(
    `ATENÇÃO: Este dimensionamento segue as NBR's 16612, 16690 e 5410, considera a geração como circuitos de força (mínimo 4mm²), e os condutores solares no modo de instalação - M1: dois cabos unipolares encostados um ao outro na horizontal, instalados ao ar livre exposta ao sol, 50ºC(ar) e temperatura do condutor em regime permanente de 90ºC - Tabela C.4.(NBR16612), até 95mm² e máxima queda de tensão admissível entre o quadro e a carga de 3%.\n-->Já o dimensionamento considera o nº idêntico de módulos em cada string em paralelo, os critérios de máxima corrente (Tabela C.4. NBR16612), e o critério de máxima queda de tensão admissível - S= (L x IB)/(44 x e), (Ver apostila solar).`
  );

  const saidaEl = document.getElementById("saidaResultados");
  if (saidaEl) saidaEl.innerHTML = "";

  const nModCC = Number(document.querySelector("#nModCC").value);
  const nPotModCC = Number(document.querySelector("#nPotModCC").value);
  const nVocModCC = Number(document.querySelector("#nVocModCC").value);
  const nVpModCC = Number(document.querySelector("#nVpModCC").value);
  const nIscModCC = Number(document.querySelector("#nIscModCC").value);
  const nIMaxModCC = Number(document.querySelector("#nIMaxModCC").value);
  const trechos = Number(document.querySelector(`#ntrecho1`).value);
  

  if (!document.querySelector("#nCircC").value) {
    alert("Dê um nome para o Projeto");
    return;
  }

  const potTotalMod = nModCC * nPotModCC;
  const VocTotal = nModCC * nVocModCC;
  const VMaxTotal = nModCC * nVpModCC;
  
  const nomeDis = 1.5 * nIscModCC;

  let resultados = [];

  const calcular = (trecho, index) => {
    const ib = nomeDis + 1;
    const scc = quedaTensao(trecho, ib, VMaxTotal);
    const res = protfio(ib, scc, nomeDis);
    const DPS = 1.1 * VocTotal;
    resultados.push({ trecho: index + 1, disjuntor: res.DisjProt, condutor: res.CondFio, dps:DPS });
  };

  calcular(trechos, 0);

  if (saidaEl) {
    const html = resultados.map(r => `
      <tr >
        <td style="border: solid;">Trecho ${r.trecho} = ${trechos} m</td>
        <td style="border: solid;">${r.disjuntor} A</td>
        <td style="border: solid;">${r.condutor} mm²</td>
        <td style="border: solid;">${r.dps.toFixed(0)} V, 40KA, Classe II.</td>
       
      </tr>
    `).join("");
    saidaEl.innerHTML = `
      <h2>Resultado - 👍:</h2>
      <table border="1" cellpadding="5">
        <tr ><th style="border: solid;">Distancia entre módulos e String Box</th><th style="border: solid;">Capacidade minima da Chave, Disjuntor ou Fusível</th><th style="border: solid;">Condutor mínimo</th> <th style="border: solid;">DPS mínimo a ser adotado.</th></tr>
        ${html}
      </table>
    `;
  }
}
