
const formato = valor =>
  Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

function adicionarItem(nome = "", unidade = "un", qtd = 1, preco = 0) {
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td><input class="descricao" value="${nome}"
       placeholder="Material ou serviço"></td>
    <td><input class="unidade" value="${unidade}"></td>
    <td><input class="quantidade" type="number"
       min="0" step="0.01" value="${qtd}"></td>
    <td><input class="preco" type="number"
       min="0" step="0.01" value="${preco}"></td>
    <td class="resultado">R$ 0,00</td>
    <td><button class="remover"
       onclick="this.closest('tr').remove(); calcular()">
       X</button></td>
  `;

  document.getElementById("itens").appendChild(linha);

  linha.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calcular);
  });

  calcular();
}

function calcular() {
  let subtotal = 0;

  document.querySelectorAll("#itens tr").forEach(linha => {
    const qtd = Math.max(0,
      Number(linha.querySelector(".quantidade").value) || 0);
    const preco = Math.max(0,
      Number(linha.querySelector(".preco").value) || 0);

    const total = qtd * preco;

    linha.querySelector(".resultado").textContent = formato(total);
    subtotal += total;
  });

  const mao = Math.max(0, Number(
    document.getElementById("maoObra").value) || 0);

  const extras = Math.max(0, Number(
    document.getElementById("extras").value) || 0);

  const margem = Math.max(0, Number(
    document.getElementById("margem").value) || 0);

  const base = subtotal + mao + extras;
  const valorMargem = base * margem / 100;
  const totalGeral = base + valorMargem;

  document.getElementById("subtotal").textContent = formato(subtotal);
  document.getElementById("valorMao").textContent = formato(mao);
  document.getElementById("valorExtras").textContent = formato(extras);
  document.getElementById("valorMargem").textContent = formato(valorMargem);
  document.getElementById("total").textContent = formato(totalGeral);

  return { subtotal, mao, extras, valorMargem, totalGeral };
}

function gerarPDF() {
  if (!window.jspdf) {
    alert("Biblioteca PDF não carregada. Verifique sua conexão.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const valores = calcular();

  let y = 20;

  function linha(texto, tamanho = 10) {
    doc.setFontSize(tamanho);

    const linhas = doc.splitTextToSize(texto, 175);

    if (y + linhas.length * 6 > 280) {
      doc.addPage();
      y = 20;
    }

    doc.text(linhas, 15, y);
    y += linhas.length * 6 + 2;
  }

  doc.setFont("helvetica", "bold");
  linha("MISSAO ELETRICA - ORCAMENTO", 17);

  doc.setFont("helvetica", "normal");
  linha("Cliente: " + document.getElementById("cliente").value);
  linha("Responsavel: " + document.getElementById("responsavel").value);
  linha("Endereco: " + document.getElementById("endereco").value);
  linha("Tipo: " + document.getElementById("tipo").value);
  linha("Data: " + new Date().toLocaleDateString("pt-BR"));

  y += 5;
  doc.setFont("helvetica", "bold");
  linha("MATERIAIS E SERVICOS");

  doc.setFont("helvetica", "normal");

  document.querySelectorAll("#itens tr").forEach((tr, i) => {
    const descricao = tr.querySelector(".descricao").value;
    const unidade = tr.querySelector(".unidade").value;
    const qtd = Number(tr.querySelector(".quantidade").value) || 0;
    const preco = Number(tr.querySelector(".preco").value) || 0;

    if (descricao.trim()) {
      linha(
        `${i + 1}. ${descricao} | ${qtd} ${unidade} | ` +
        `${formato(preco)} | ${formato(qtd * preco)}`
      );
    }
  });

  y += 5;
  doc.setFont("helvetica", "bold");
  linha("RESUMO FINANCEIRO");

  doc.setFont("helvetica", "normal");
  linha("Materiais: " + formato(valores.subtotal));
  linha("Mao de obra: " + formato(valores.mao));
  linha("Custos adicionais: " + formato(valores.extras));
  linha("Margem adicional: " + formato(valores.valorMargem));

  doc.setFont("helvetica", "bold");
  linha("TOTAL GERAL: " + formato(valores.totalGeral), 15);

  doc.setFont("helvetica", "normal");
  linha("Observacoes: " +
    document.getElementById("observacoes").value);

  y += 12;
  linha("Orcamento elaborado para fins didaticos ou comerciais.");
  linha("Verificar os projetos, normas tecnicas e condicoes reais da obra.");

  doc.save("orcamento-missao-eletrica.pdf");
}

// Itens iniciais para demonstração
adicionarItem("Cabo flexível 2,5 mm²", "m", 100, 2.50);
adicionarItem("Tomada 2P+T", "un", 10, 15);
adicionarItem("Disjuntor monopolar", "un", 4, 25);
adicionarItem("Eletroduto PVC 20 mm", "m", 30, 3.50);
