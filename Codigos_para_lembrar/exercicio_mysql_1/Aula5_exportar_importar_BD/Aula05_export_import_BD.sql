#Gerencia cópias de Segurança MySQL
# Backup de BD chama-se DUMP.
#Para fazer um DUMP pelo Workbach: 
#Aba server, Seleciona: Data Export, Seleciona o BD e as Tabelas que que exportar.
# Seleciona export self conteined file, e include creat schema.
#Start Export. 
# Apagar Banco para importar e testar.alter
drop database cadastro;

#Importar DUMP.
# Aba server, Seleciona: Data import.
#Seleciona import self conteined file, e ... para escolher o arquivo DUMP.
#Start import. 


use cadastro;
select*from cursos;
select*from pessoas;
desc pessoas;