programa
{
		//Vetor e Matriz
		//vetor
	
	funcao inicio()
	{
		cadeia nome[]={"pedro", "Jorge", "Marcelo", "Adriana"}
		para(inteiro i=0; i<=3; i++){
			escreva( i, ")\t",nome[i],"\n")
		}

		//Matriz

		cadeia pos[][]={{"a","b","c"},{"d","e","f"},{"g","h","i"}}
		para(inteiro i=0; i<=2; i++){
			para(inteiro j=0; j<=2; j++){
			escreva( pos[i][j], "\t")
		}
		escreva("\n")
		}
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 357; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {pos, 15, 9, 3};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */