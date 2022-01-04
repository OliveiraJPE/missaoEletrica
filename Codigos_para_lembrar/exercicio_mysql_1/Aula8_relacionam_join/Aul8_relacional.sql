#Modelo relacional
#innoDB - engine que suporta chaves estrangeiras  outro XtraDB - Suportam transações ACID
# A = atomicidade - tudo é feito ou nada
# C = Concistência apos a transação
# I - Isolamento entre transações ao mesmo tempo
# D - Durabilidade - o tempo que fvor necessário
#DER - entidade - relacionamento
# Cardinalidade 1 para 1; 1 para n (muitos); n para n.
#Chave estrangeira - sempre a cardinalidade 1 é chave estrangeira na entidade de cardinalidade n.

desc gafanhotos;

alter table gafanhotos add column cursopreferido int; 
#cursopreferido ==idcurso que tem que ser adcionado na tabela gafanhotos.
#Já que a cardinalida é Gafanhotos n para 1 cursos.
# a chave estrangeira tem que ter o mesmo tamanho  e tipo primitivo da chave principla idcurso.

desc gafanhotos;
desc cursos;

alter table gafanhotos add foreign key(cursopreferido) references cursos(idcurso);
# o curso preferido da tabela gafanhotos esta ligado a chave principal cursos(idcurso).
# verificar de curso preferido é mul  que é chave multipla o chave estrangeira.
desc gafanhotos;
desc cursos;

update gafanhotos set cursopreferido='6'where id='1'; #relacionando os cursos da tabela cursos com gafanhotos. 
#Pode ser feito um por um, ou no workbench direto na linha.
# Para manter a consistência um curso com relacionamento nao pode ser apagado.
select*from gafanhotos;

select*from cursos;


#exemplo
delete from cursos where idcurso='1'; # consegue 
delete from cursos where idcurso='6'; # Não consegue  pois daria problema de consistência e transaçao.

#Junções SQL JOINS
select nome, cursopreferido from gafanhotos;
#  +
select nome, ano from cursos;
#=
select gafanhotos.nome, gafanhotos.cursopreferido, cursos.nome, cursos.ano 
from gafanhotos join cursos #Junta os cursos : join ou inner join
on cursos.idcurso=gafanhotos.cursopreferido # Relaciona através das chaves
order by gafanhotos.nome;

#por apelido
select g.nome, g.cursopreferido, c.nome, c.ano 
from gafanhotos as g inner join cursos as c #Junta os cursos por apelido   as.
on c.idcurso=g.cursopreferido # Relaciona através das chaves
order by g.nome;

# mostrar todos até quem não tem relacionamento
select g.nome, g.cursopreferido, c.nome, c.ano 
from gafanhotos as g left outer join cursos as c #dando preferencia a tabela da esquerda
on c.idcurso=g.cursopreferido # Relaciona através das chaves
order by g.nome;

select g.nome, g.cursopreferido, c.nome, c.ano 
from gafanhotos as g right outer join cursos as c #dando preferencia a tabela da direita - os cursos.
on c.idcurso=g.cursopreferido; # Relaciona através das chaves




