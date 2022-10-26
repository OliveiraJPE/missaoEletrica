programa
{
	// passagem de parametro
	
	
	funcao inicio()
	{
		inteiro a, b, res, resMult
		real resDiv
		escreva("Digite o valor de a:  ")
		leia (a)
		escreva("Digite o valor de b:  ")
		leia(b)
		
		res=soma(a, b)
		escreva("Valor de a = ", a, "\n")
		escreva("Valor de b =  ",b, "\n")
		escreva("Retornou res *1000 =   ",res*1000, "\n")
		

		resMult=mult(a, b)
		escreva("Valor de a = ", a, "\n") // passagem por referÊcia alterou as variáveis a e b
		escreva("Valor de b =  ",b, "\n")
		escreva("Retornou resMult *1000 =   ",resMult*1000, "\n")

		resDiv=div(a, b)
		escreva("Valor de a = ", a, "\n")// passagem por parametro não altera as variáveis a e b
		escreva("Valor de b =  ",b, "\n")
		escreva("Retornou resDiv *1000 =   ",resDiv*1000, "\n")
		
	}
	funcao inteiro soma(inteiro x, inteiro y){ // passagem de parametro por valor com retorno
	
		 inteiro sum = x + y
		 escreva("A Soma é: \n", sum)	
		 retorne sum 
	}

	funcao inteiro mult(inteiro &x, inteiro &y){ // passagem por referÊcia altera as variáveis a e b.
	
	
		inteiro multipl = x * y
		x += multipl
		y += multipl
		retorne multipl
		
	}
	funcao real div(real x, real y){
	
	
		real divida = x / y
		
		retorne divida
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 97; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */