#lista com profissões  e quantitativos.
select*from gafanhotos;
select profissao,count(*) from gafanhotos
group by profissao;

#Quantos h e m nasceram acima de jan 2005 e agrupar por sexo.
#select sexo, nascimento from gafanhotos where nascimento>'2005-01-01';
select sexo, count(*) from gafanhotos
where nascimento>'2005-01-01'
group by sexo;


#Lista com nascidos fora de brasil, com pais de origem e quantos moram lá, contanto que tenham mais de três pessoas morando lá.
select nacionalidade, count(*) from gafanhotos
where nacionalidade != 'Brasil'
group by nacionalidade
having count(nacionalidade)>3;


#lista group por altura todas as pessoas com mais de 100k, mostra quem está acima da média de altura.
#select avg(altura) from gafanhotos   -  moostra a  média
#select altura, count(*) from  gafanhotos ----   mostra a quantidade;
select altura, count(*) from  gafanhotos
where peso>100
group by altura
having altura>(select avg(altura) from gafanhotos);

