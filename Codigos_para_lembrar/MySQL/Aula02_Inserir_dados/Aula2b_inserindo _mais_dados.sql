#aula2b_inserindo_dados
use cadastro;
# Para inserir novas pessoas é só mudar os dados e ctrl Enter.
insert into pessoas 
(nome, Nascimento, sexo, peso, altura, nacionalidade) 
values
('Maria','1999-12-30','F','55.2','1.65','portugal');

select*from pessoas;
# mostrar todos os ddos das pessoas.