#Select para alguns é DML - data manipulation language, outros DQL data query language - por fazer sá seleçã de dados.
use cadastro;
select*from gafanhotos; #seleciona todos os campos: registros e colunas da tabela cursos.
select*from cursos
order by nome asc; # ordena por nome crescente, pode ignorar o asc.

select*from cursos
order by nome desc; # ordena por nome decrescente.

select nome, carga, ano from cursos; # mostar só as colunas indicadas.

select ano, nome, carga from cursos
order by ano, nome; # primeiro ordena por ano e depois por nome.

select*from cursos
where ano='2016'
order by nome asc;

#USANDO OPERADORES RELACIONAIS

select nome, carga from cursos
where ano='2016'
order by nome asc; # o resultado de uma consulta chama-se resultset. e Query é pergunta ou solicitação.

select nome, carga, ano from cursos
where ano<='2015'
order by ano, nome asc; # usando operadores relacionais.

select nome, carga, ano from cursos
where ano between 2014 and 2016
order by ano, nome desc; # between ...and entre ... e

select nome, carga, ano from cursos
where ano in (2014, 2016) # in , no - neste caso 2014 e 2016.
order by ano, nome asc;# ordenado por ano e nome.alter

#USANDO OPERADORES LÓGICOS

select nome, carga, totaulas from cursos
where carga>35 and totaulas<30 # condição e.
order by ano asc;

select nome, carga, totaulas from cursos
where carga>35 or totaulas<30 # condição ou.
order by ano asc;

