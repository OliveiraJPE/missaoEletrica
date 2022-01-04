# Criar nova tabela se ela não existir e apagar. "if not exists".
# apagar se existir. "if exists".
# DDL - alter table e drop table
# 

create table if not exists teste(
nome varchar(30), 
carga int unsigned,   #sem sinal              
ano year default '2021'           


)default charset=utf8;
insert into teste value ('pedro', '12', default);

select*from teste;
desc cursos;

drop table if exists teste;   #apagar tabela teste se existir.
select*from teste;
