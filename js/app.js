/******
// Arquivo: app.js

// Simulando o JSON (em um cenário real, você poderia carregar o JSON de um arquivo externo)
const alunos = [
  { "cod": "pv0000002", 
    "Nome": "Certificamos que ALICE ARAÚJO DO ESPÍRITO SANTO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000003", 
    "Nome": "Certificamos que ÂNGELLO MIGUEL ARCANJO MENDES SALERMO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000004", 
    "Nome": "Certificamos que ATHYLLA GUILHERME GOMES, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000005", 
    "Nome": "Certificamos que EDIELE VITÓRIA ARAÚJO PORTELA, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000006", 
    "Nome": "Certificamos que MARIA CLARA MONTEIRO DOS SANTOS, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000007", 
    "Nome": "Certificamos que MOISÉS DA SILVA DE CARVALHO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000008", 
    "Nome": "Certificamos que SAMUEL SOARES DE AZEVEDO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000009", 
    "Nome": "Certificamos que VITÓRIA SOARES DE AZEVEDO, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000010", 
    "Nome": "Certificamos que ALISON SOARES DE AZEVEDO, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000011", 
    "Nome": "Certificamos que DANIELA DA SILVA, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000012", 
    "Nome": "Certificamos que MATEUS LUCAS DOS SANTOS OLIVEIRA, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000013", 
    "Nome": "Certificamos que RAFAEL SOARES DE AZEVEDO, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000014", 
    "Nome": "Certificamos que RAIANE           , participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000015", 
    "Nome": "Certificamos que THALITA DA SILVA DE CARVALHO, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000016", 
    "Nome": "Certificamos que VICTÓRIA DA SILVA, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Axe Prados Verdes, Prados Verdes, km 34, Rodovia Rio-São Paulo, Nova Iguaçú.",
      "Projeto":"Projeto Axe Prados Verdes.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000017", 
    "Nome": "Certificamos que Martina Munita Silva de Oliveira, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
      "Projeto":"Projeto social Brisa Mar.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000018", 
    "Nome": "Certificamos que Jean Gonçalves Melegário, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
      "Projeto":"Projeto social Brisa Mar.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000019", 
    "Nome": "Certificamos que Lucas Nunes Batista da Silva, participou das Oficinas de Edição de textos com LibreOffice: WRITER",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
      "Projeto":"Projeto social Brisa Mar.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },

   { "cod": "pv0000020", 
    "Nome": "Certificamos que Richard Gonçalves Melegário, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
    "Projeto":"Projeto social Brisa Mar.",
    "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
   { "cod": "pv0000021", 
    "Nome": "Certificamos que Pedro Henrique de Souza Moraes, participou das Oficinas de Introdução à informática com MS PAINT.",
    "Carga_horaria": "10h.",
    "Periodo": "Setembro/Dezembro de 2024.",
    "Local": "Brisa Mar, Itaguaí - RJ.",
      "Projeto":"Projeto social Brisa Mar.",
      "Realizacao":"MF-EBD - CNPJ: 50.495.500/0001-10."
   },
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
}*/