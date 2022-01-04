# Modificar dados de um campo - modify.
# Mudar nome do coluna - change.



desc pessoas; # desc = describe.

alter table pessoas
modify column profissao varchar(20);  #modificou de (10) para(20).

alter table pessoas
change column profissao prof varchar(20);  #modificou de profissao para prof.


select*from pessoas;


