programa
{
inclua biblioteca Arquivos --> arq
inclua biblioteca Util --> ut // biblioteca util com apelido ut
inclua biblioteca Texto --> txt

	
	funcao inicio()
	{
		inteiro i, opcao=0, sorteio = ut.sorteia(1,10), arquivo
		cadeia frase
		logico existe 
		const cadeia caminho = "C:/User/peoj2/Desktop/frase.txt"
		escreva("Número sorteado foi:  ", sorteio)

		escreva("Escolha: \nopção 1 - Leitura;\nopção 2 - Escrita.\n")
		leia(opcao)

		se(opcao==2){
			escreva("Escreva o texto que deseja inserir: ")
			leia(frase)
			arquivo = arq.abrir_arquivo(caminho, arq.MODO_ESCRITA)
			
				arq.escrever_linha(frase, arquivo)
			
			arq.fechar_arquivo(arquivo)
		}senao{
			existe = arq.arquivo_existe(caminho)
			se(existe){
				arquivo = arq.abrir_arquivo(caminho, arq.MODO_LEITURA)
			
				frase = arq.ler_linha(arquivo)
			
			arq.fechar_arquivo(arquivo)

			escreva("A Frase é:  \n\n ##", frase, "##")
			}senao{
				escreva("Arquivo não existe. Escolha a opçãp 2, para criar arquivo.")
			
			}
			
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1018; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */