#aula2_inserindo_dados

use cadastro;

insert into pessoas 
(`nome`, `Nascimento`, `sexo`, `peso`, `altura`,` nacionalidade`) 
# os nomes dos nomes podem ficar entre crases.
#id não precisa inserir pois ele e auto_increment.

values
('Godofredo','1984-01-02','M','78.5','1.83','Brasil');
# Inseridos na ordem da tabela pessoas.
# o que está entre aspas é dado. Fora de aspas.

