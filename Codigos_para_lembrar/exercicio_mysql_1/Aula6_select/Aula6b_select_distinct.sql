#Select CONTINUAÇÃO. Distinct e Agregação.

#DISTINCT
select distinct carga from cursos; # lista com pelo menos uma ocorrencia do dado.

#AGREGAÇÃO
select count(*)from cursos; # conta a quantidade de linhas.

select count(nome)from cursos; # conta a quantidade de dados na coluna nome.

select count(*) from cursos where carga>40; #Quantos cursos tem carga maior do que 40h.

select max(carga) from cursos; # maior carga.

select max(totaulas) from cursos; # maior quantdade de aulas.

select max(totaulas) from cursos where ano ='2016'; #maior quant aulas em 2016.alter

select min(totaulas) from cursos; # menor quantdade de aulas.

select min(totaulas) from cursos where ano='2016'; # menor quantdade de aulas, pega o primeiro.
#para mostrar todos tem que considerar agrupamento.

select sum(totaulas) from cursos where ano='2016'; # somatório quantdade de aulas.

select avg(totaulas) from cursos where ano='2016'; # média quantdade de aulas.





