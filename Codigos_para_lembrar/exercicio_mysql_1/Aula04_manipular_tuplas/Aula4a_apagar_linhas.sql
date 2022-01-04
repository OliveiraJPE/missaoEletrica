#Apagar linhas

delete from cursos
where idcurso='8'
limit 1; # limita o numero de linha que serão modificadas.
select*from cursos;

delete from cursos
where ano='2018'
limit 2; # desmarcar serveplate no propriedades para funcionar