

  // Função para buscar o contato
  function buscarCompetidores() {

  const competidores = [
    { cod: "Azul&Verde", ordem: "01", Nome: "Pássaro", Graduacao: "Azul&Verde.", idade: "52" },
    { cod: "Azul", ordem: "02", Nome: "Mateiro", Graduacao: "Azul.", idade: "23" },
    { cod: "Amarelo", ordem: "03", Nome: "Capolé", Graduacao: "Amarelo.", idade: "13" },
  ];
    const codBusca = document.getElementById("categoria").value.trim();
    const Jogos = document.getElementById("insiraJogos");

    // Limpar resultados anteriores
   Jogos.innerHTML = "";

    // Verificar se o nome foi informado
    if (codBusca === "") {
      Jogos.innerHTML =
        "Por favor, insira um código válido para buscar.";
      return;
    }

    // Procurar no JSON
    const codEncontrado = competidores.find(
      (competidores) =>
        competidores.cod.toLowerCase() === codBusca.toLowerCase(),
    );

    // Exibir o resultado
    if (codEncontrado) {
       Jogos.innerHTML = `Código: ${codEncontrado.cod} <br> Nome: ${codEncontrado.Nome} <br> Ordem: ${codEncontrado.ordem} <br> Graduação: ${codEncontrado.Graduacao} <br> Idade: ${codEncontrado.idade} `;
    } else {
        Jogos.innerHTML = "Nenhum cadaastro encontrado. Insira uma Gradução válida.";
    }
  }

