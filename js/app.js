// Arquivo: app.js

// Simulando o JSON (em um cenário real, você poderia carregar o JSON de um arquivo externo)
const alunos = [
    { "cod": "pv0000001", 
      "Nome": "Certificamos que TESTE, participou das Oficinas XXXXXXXXXXXX",
      "Carga_horaria": "xxh.",
      "Periodo": "xxxxxxxxxxxxxx de 2020.",
      "Local": "xxxxxxxxxxxxxxxxxxxx.",
      "Projeto":"xxxxxxxxxxxxxxxxxxxx.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
     },
    {  "cod": "pb0000002", 
        "Nome": "Certificamos que Jose Manoel das graças Silva das Oficinas de Edição de textos com LibreOffice: WRITER",
        "Carga_horaria": "10h.",
        "Periodo": "Setembro a Outubro de 2024.",
        "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
        "Projeto":"Projeto Axe Prados Verdes.",
        "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10." }
  ];
  
  // Função para buscar o contato
  function buscarCertificado() {
    const codBusca = document.getElementById('cod').value.trim();
    const resultadoDiv = document.getElementById('result');
    
    // Limpar resultados anteriores
    resultadoDiv.innerHTML = '';
  
    // Verificar se o nome foi informado
    if (codBusca === '') {
      resultadoDiv.innerHTML = 'Por favor, insira um código válido para buscar.';
      return;
    }
  
    // Procurar no JSON
    const codEncontrado = alunos.find(aluno => aluno.cod.toLowerCase() === codBusca.toLowerCase());
  
    // Exibir o resultado
    if (codEncontrado) {
      resultadoDiv.innerHTML = `Código: ${codEncontrado.cod} <br> Nome: ${codEncontrado.Nome} <br> Carga horária: ${codEncontrado.Carga_horaria} <br> Período: ${codEncontrado.Periodo} <br> Local: ${codEncontrado.Local} <br> Projeto: ${codEncontrado.Projeto} <br> Realização: ${codEncontrado.Realizacao}`;
    } else {
      resultadoDiv.innerHTML = 'Nenhum Certificado encontrado. Insira o código que consta abaixo do QRCode no verso do Certificado.';
    }
  }
  