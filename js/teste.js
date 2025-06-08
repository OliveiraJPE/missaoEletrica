



function selecionarDisjuntor(disj) {
  const disjuntoresPadrao = [6, 10, 16, 20, 25, 32, 40, 45, 50, 60, 70, 80, 90, 100, 120, 150, 175];
  for (let valor of disjuntoresPadrao) {
    if (disj <= valor) return valor;
  }
  alert(`ERRO: Disjuntor maior do que 175A --> (${disj.toFixed(0)}A). Consulte um técnico.`);
  return 0;
}

let valor = selecionarDisjuntor(13.5);
console.log(valor);