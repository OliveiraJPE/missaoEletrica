# Criar nova tabela se ela não existir. "if not exist"
select*from pessoas;
create table if not exists cursos(
nome varchar(30) not null unique,  #"not null unique" garante que não vai repetir o campo.
decricao text,
carga int unsigned,                #unsigned" sem sinal - não deixa ser negativo.
totaulas int,
ano year default '2021'            # coloca 2021 como padrão


)default charset=utf8;

alter table cursos add column idcurso int first;
alter table cursos add primary key (idcurso);

select*from cursos;
desc cursos;
