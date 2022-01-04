#group by - agrupamento e count(*).
#Group by é diferente de distinct pois o primeiro agrupa e permite consulta.

select*from cursos;


select distinct carga from cursos
order by carga;

#Agrupamento - having é semelhante ao where mas so pode ser usado com o mesmo campo do group.
select carga, ano, count(*) from cursos # count é um coando de agregação que conta.
where totaulas>=20 # onde o total de aulas seja >= a 30
group by ano
having  ano>'2013' # onde o ano seja > que 2015; having count(carga)>2 - mostra somente cargas de cursos com quantidade maior que 2
order by  count(*) desc; # ordenando por count descendente

# mostra média de horas
select avg(carga) from cursos; # média de cargas de todos os cursos

#mostra cursos acima de 2015 agrupados por carga
select carga, count(*)from cursos
where ano>2015
group by carga;

#mostra cursos com carga acima da média. Junta um select com outro
select carga, count(*)from cursos
where ano>2015
group by carga
having carga> (select avg(carga) from cursos);





