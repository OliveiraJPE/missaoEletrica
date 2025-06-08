/**********************Rodando*************************** */
 
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
  
    const saidaEl = document.getElementById("saidaResultados");
    saidaEl.innerHTML =`<h2>Considerando o fator de temperatura k1 = ${K1.toFixed(2)}, o fator de agrupamento k2 = ${K2.toFixed(2)}, e fator de correção de resistividade térmica do solo k3 = 2,5 K.m/W. </h2>

    <h3>Onde: </h3> 
    <p>In = ${In.toFixed(2)}A,</p>  
    <p>Ib = ${IB.toFixed(2)}A,</p> 
    <p>a queda de tensão percentual, e% = 4%,</p> 
    <p>a distancia  do trecho é de ${formElements.distancia.toFixed(2)}m.</p>

    <h3>Determinou-se o condutor pelos critérios abaixo.</h3>

    <p>Máxima queda de tensão admissivel: ${condutorQueda.toFixed(2)}mm².</p>
    <p>Critério de curto circuito: ${condutorCritCurto.toFixed(2)}mm².</p>
    <p>Condutor Minimo para circuito de ${circTipo}: ${condutorMinimo.toFixed(2)}mm².</p>
    <p>Critério de Ampacidade: ${condutorAmpacidade.toFixed(2)}mm².</p>
    
    <h3>Assim Conhecemos o condutor final, que é o maior entre os critérios adotados:</h3> 
    
    <p>Condutor final: ${condutorAjustado.toFixed(2)}mm² 👍.</p>
    <p>Disjuntor: ${Disjuntor}A. 👍 </p>`;
  }