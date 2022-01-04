# Para inserir multiplas novas pessoas usando "," na ordem do cadastro -pessoas.
insert into pessoas 
# insert into é DML Data Manipulation language
(id, nome, Nascimento, sexo, peso, altura, nacionalidade)
# se a ordem for a mesma do banco, a linha acima pode ser suprimida. 
values
(default,'adalgiza','1988-11-10','F','62.2','1.65','Argélia'),
(default,'Ana','1975-10-10','F','64.2','1.75','EUA'),
(default,'Pedro','1974-02-19','M','69.0','1.69',default),
(default,'Maria','1999-05-22','F','52.2','1.45','Portugal');


select*from pessoas;
# mostrar todos os ddos das pessoas.