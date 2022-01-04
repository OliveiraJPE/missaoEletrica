# Para inserir novas pessoas usando o id.
#DEFAULT padrão que está sendo usado.
insert into pessoas 
(id, nome, Nascimento, sexo, peso, altura, nacionalidade)
# se a ordem for a mesma do banco, a linha acima pode ser suprimida. 
values
(default,'Creuza','1998-12-10','F','65.2','1.65',default);

select*from pessoas;
# mostrar todos os dados das pessoas.