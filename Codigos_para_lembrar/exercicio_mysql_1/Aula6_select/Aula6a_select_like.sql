#Select CONTINUAÇÃO. 
#Uso do Like

select*from cursos
where nome like 'p%' #mostra todos os cursos com semelhança, neste caso que comece por p (case sensitive)
order by ano;        # like é operador que significa parecido e % substitui nenhum ou vários caracteres.

select*from cursos
where nome like '%a' #mostra todos os cursos com semelhança, neste caso que termina com a (case sensitive)
order by ano;        # like é operador que significa parecido e % substitui nenhum ou vários caracteres.

select*from cursos
where nome like '%p%' #mostra todos os cursos com semelhança, neste caso que tenha qualquer coisa na frente ou atrás inclusive nada.
order by ano;        # Logo todo mundo que tem p.

select*from cursos
where nome not like '%p%' 
order by ano;        # Logo todo mundo que não tem p.

UPDATE `cadastro`.`cursos` SET `nome` = 'Algoritmo' WHERE (`idcurso` = '2'); #mudar valor em um campo de um tupla.alter

select*from cursos
where nome like 'ph%p'; # Logo todo mundo que tem ph no começo e p no final.

select*from cursos
where nome like 'ph%p_'; # Logo todo mundo que tem ph no começo e p seguido de alguma coisa.

select*from cursos
where nome like 'p_p%'; # comece com p, uma letra no meio e qualquer coisa no final.

select*from cursos
where nome like 'p__t%'; # comece com p, duas letras no meio e qualquer coisa no final.