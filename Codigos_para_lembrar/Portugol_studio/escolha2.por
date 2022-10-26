programa
{
	
	funcao inicio()
	{
		caracter sinal
		//inteiro sinal
		real n1, n2, res
		res=0.0
		

			escreva("Escolha :  ")
			escreva("+) sedesejar somar:  ")
			escreva("-) sedesejar subtrair:  ")
			escreva("*) sedesejar multiplicarr:  ")
			escreva("/) sedesejar dividir:  ")
			//leia(op)
			leia(sinal)
			limpa()

			escreva("Escolha um número:  ")
			leia(n1)
			limpa()

			escreva("Escolha outro número:  ")
			leia(n2)
			limpa()

			escolha (sinal) //escolha só aceita caracter ou inteiro
			{
			caso  'p': //caracter entre aspas simples
			escreva("Meu nome é Pássaro")
			pare
			caso '+':
				res=n1+n2
			pare
			caso '-': 
				res=n1-n2				
			pare
			caso '*': 
				res=n1*n2
			pare
			caso '/': 
				se(n2>0){
				res=n1/n2
				}senao{
				escreva("operação inválida: n2 deve ser maior do que zero!\n")
				}
			pare
			caso contrario:
				escreva("operação inválida: operador inválido!\n")
			}
			escreva("\n\nOperação: ", sinal , "  ---   Num 01: ", n1, "   ---  Num 02: ", n2)
			//escreva(res)
			escreva("\n\nResultado: ", res, "\n\n")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 553; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */