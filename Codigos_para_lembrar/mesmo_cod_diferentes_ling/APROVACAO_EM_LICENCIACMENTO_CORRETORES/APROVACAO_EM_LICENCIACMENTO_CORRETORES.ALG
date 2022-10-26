Algoritmo "aprovacao_em_Licenciacmento_corretores"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
//CONTADOR
     //pedro Ernesto 16/5/2022
     //Repetir em PortugolStudio, C, c++, Python, JS e PHP.
Var
     totAlunos, contador, res, aprovados, reprovados:inteiro


Inicio
   contador<-1
   aprovados<-0
   reprovados<-0
   res<-0
   Escreval("Escreva o total de alunos a ser avaliado: ")
   leia(totAlunos)
   LimpaTela()
   
   para contador de 1 ate 10 faça
           Escreval("Escreva 1 para aluno aprovado e 2 para aluno Reprovado!")
           Escreva("O aluno", contador, " foi 1 (aprovado) ou 2 (reprovado):  ")
           leia(res)
           se res=1 entao
           aprovados<-aprovados + 1
           senao
           reprovados <-reprovados + 1
           fimSe
   fimPara
   
   Escreval("Total de Aprovados = ", aprovados)
   Escreval("Total de Reprovados = ",reprovados)
   
   se(aprovados>=8)entao
   Escreval("Cobrar taxa de resultado.")
   fimSe

   



Fimalgoritmo