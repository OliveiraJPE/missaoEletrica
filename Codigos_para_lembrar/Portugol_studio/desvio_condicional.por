programa
{
	
	funcao inicio()
	{
		cadeia op
		real n1, n2, res
		res=0.0
		

			escreva("Escolha um operador: ( +  *  -  / ):  ")
			leia(op)
			limpa()

			escreva("Escolha um número:  ")
			leia(n1)
			limpa()

			escreva("Escolha outro número:  ")
			leia(n2)
			limpa()

			se(op=="+"){
				res=n1+n2
			}senao se(op=="-"){
				res=n1-n2				
			}senao se(op=="*"){
				res=n1*n2
			}senao se(op=="/" e n2>0){
				res=n1/n2
			}senao se(op=="/" e n2<=0){
				escreva("operação inválida: n2 deve ser maior do que zero!\n")
			}senao{
				escreva("operação inválida: operador inválido!\n")
			}
			escreva("\n\nOperação: ", op, "  ---   Num 01: ", n1, "   ---  Num 02: ", n2)
			//escreva(res)
			escreva("\n\nResultado: ", n1, "  ", op, "  " ,n2, " = ", res, "\n\n")
			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 289; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */