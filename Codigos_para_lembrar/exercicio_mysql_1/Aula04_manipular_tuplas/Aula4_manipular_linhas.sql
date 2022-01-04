#Manipular registros, ou linhas ou tuplas (linha ou registro de banco de dados).
# Na tabela as linha são tuplas ou registros, colunas são campos.

use cadastro;
select*from cursos;
insert into cursos value
('1', 'HTML4','Curso de HTML5','40','36','2014'),
('2', 'Algoritmos','Lógica de programção','20','15','2014'),
('3', 'Photoshop','Dicas de phtoshop CC','10','8','2014'),
('4', 'PGP','Curso de PHP para iniciantes','40','20','2010'),
('5', 'Jarva','Introdução alinguagem JAVA','10','29','2000'),
('6', 'MySQL','Banco de dados MySQL','30','15','2016'),
('7', 'Word','Curso completo de Word','40','30','2016'),
('8', 'Sapateado','Danças ritimicas','40','30','2018'),
('9', 'Cozinha Arabe','Aprenda a fazer Kibe','40','30','2018'),
('10', 'YouTuber','Gera polêmica e ganha inscritos','5','2','2018');
select*from cursos;
desc cursos;

update cursos  # atualizar linhas
set nome = 'HTML5'
where idcurso ='1';

update cursos # atualizar multiplos dados numa linha.
set nome='PHP', ano='2015'
where idcurso='4';

update cursos  #
set nome='JAVA', carga='40', ano='2015'
where idcurso='5'
limit 1; # limita o numero de linha que serão modificadas.

update cursos
set ano='2050', carga='800'
where ano='2018'; 
#Atualiza os dados em todas as tuplas com estes ano. 
#Para mudar por padrao permite somente uma linha por vez.
#Para executar deve mudar as preferencias do Workbanch.
#Trabalhar sempre no copia de um backup ( numca no banco, nunca no backup salvo) e depois de ter certeza subir. Para evitar perder dados.
#Se ligar limit. ele só muda a primeira linha com aqele ano. com 2 as duas primeiras...
limit 1; 
select*from cursos;
