# Exercicios
select*from gafanhotos;
#Lista com nome das meninas
select*from gafanhotos where sexo='F';

#Dados nascidos de jan 2000 e dez de 2015. ano-mes-dia
select*from gafanhotos
where nascimento between '2000-01-01' and '2015-12-31'
order by nascimento;

# homens programador
select*from gafanhotos
where profissao='programador' and sexo='M'
order by nascimento;


# Mulheres brasil com nome iniciando com J.
select*from gafanhotos
where nome like 'J%' and sexo='F' and nacionalidade='Brasil' ;



# Nome e nacionalidade que tem silva, nao é brasil e tem menos de 100kg
select*from gafanhotos
where nome like '%silva%' and peso<'100' and nacionalidade !='Brasil' ;


#maior altura entre homens que mora no brasil.
select max(altura) from gafanhotos
where nacionalidade='Brasil' ;

#média de peso de todos.
select avg(peso) from gafanhotos;

# menor peso de mulher que nasceram entre jan de 1990 e dez de 2000.alter
select min(peso) from gafanhotos
where sexo='F' and nascimento between '1990-01-01' and '2000-12-31';

#mulheres com mais de 1,90 de altura.
select*from gafanhotos
where altura>1.90 and sexo='F'
order by nome;
