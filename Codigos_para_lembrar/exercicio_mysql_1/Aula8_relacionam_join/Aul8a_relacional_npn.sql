#relacionamento entre tabelas muitos para muitos
#cria um entidade intermeriária e fica gafanhotos 1, n assiste  n ,  1 cursos.
create table gafanhotos_assiste_curso(
id int not null auto_increment,
data date,
idgafanhotos int,
idcursos int,
primary key(id),
foreign key (idgafanhotos) references gafanhotos(id),
foreign key (idcursos) references cursos(idcurso)


)default charset=utf8;

select*from gafanhotos;
select*from cursos;
select*from gafanhotos_assiste_curso;
desc gafanhotos_assiste_curso;

insert into gafanhotos_assiste_curso(`id`, `data`, `idgafanhotos`,`idcursos`)
values (default, '2014-03-01', '1', '2');

#join para juntar as tres tabelas
select*from gafanhotos g 
join gafanhotos_assiste_curso a 
on g.id = a.idgafanhotos
join cursos c
on c.idcurso = a.idcursos;

#Selecionar sáo o que quero das três tabelas
select g.nome, c.nome from gafanhotos g 
join gafanhotos_assiste_curso a 
on g.id = a.idgafanhotos
join cursos c
on c.idcurso = a.idcursos
order by g.nome;


