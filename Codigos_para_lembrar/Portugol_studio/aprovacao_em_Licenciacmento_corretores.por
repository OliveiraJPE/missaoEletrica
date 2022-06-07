programa
{
//"aprovacao_em_Licenciacmento_corretores"
//CONTADOR
     //pedro Ernesto 16/5/2022
     //Repetir em VisualG, PortugolStudio, C, c++, Python, JS e PHP.
	funcao inicio()
	{
		inteiro contador, res
		real aprovados, reprovados, totAlunos,  per
		per=0.0
		contador=0
		aprovados=0.0
		reprovados=0.0
		escreva("\nDigite o Número de alunos a serem avaliados: ")
		leia(totAlunos)

		para(contador=1; contador<=totAlunos; contador++)
		{
			escreva("\n\nDigite 1 -Para aprovado e 2 -para reprovado:  ")
			leia(res)
			
			se(res!=1 e res!=2)
			{
				escreva("\n\nValor incorreto. Insira 1 - para Aprovado e 2 para Reprovado!")
			}senao{
				se(res==1)
				{
					aprovados+=1
				}senao{
					reprovados+=1
				}
			}
		}
		escreva("\n\nTotal de aprovados=  ", aprovados)
		
		escreva("\n\n\nTotal de reprovados=  ", reprovados)
		
		per=((aprovados/totAlunos)*100)
		
		escreva("\n\nO percentual de aprovados é:  ", per)
		
		se(per>=80)
		{
			escreva("\n\nCobrar taxa escolar!\n\n")
		}senao{
			escreva("\n\nNão cobrar taxa escolar!\n\n")
		}
	}
		
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 16; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */