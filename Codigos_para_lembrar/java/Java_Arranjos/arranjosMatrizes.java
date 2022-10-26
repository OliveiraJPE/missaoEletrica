import java.util.Scanner;
import java.util.Arrays;

public class arranjosMatrizes{
static char[][] nomes= {
			{'A', 'L', 'V', 'E', 'N', 'A', 'R', 'I', 'A'},
			{'P', 'L', 'A', 'S', 'T', 'I', 'C', 'O'}
		    };

static char[][] names = new char[4][9]; // inializandco uma matriz de 4 posições com 9 elementos em cada posição.
//static char [][] nome=new char[4][9];
	public static void main(String[]args){


			System.out.println(nomes[0]);
			System.out.println("\n");
			System.out.println(nomes[1]);
			System.out.println("\n");
			System.out.println(nomes[0][1]);
			System.out.println("\n");
			System.out.println(nomes.length);
			System.out.println("\n");
			System.out.println(nomes[0].length);
			System.out.println("\n");

// imprimir todos os tamanhos de cada arranjo.

		for(int i = 0; i<nomes.length; i++){
			System.out.print(i + "º) "+" Nome guardado: " );			
			System.out.print(nomes[i]);
			System.out.println("\n");
	
		}

		for(int i = 0; i<nomes.length; i++){
			for(int j = 0; j<nomes[i].length; j++){
			System.out.print(j + "º) "+" caracter  guardado na "+(j+1)+"º posição de   ");
			System.out.print(nomes[i]);
			System.out.print(": ");
			System.out.print(nomes[i][j]) ;
			System.out.println("\n");
			}
		}
   		
		/*
//ERRO: NECESSITA PERMITIR QUE ARRAY RECEBA DO TECLADO.
			 for(int i = 0; i<names.length; i++){
			System.out.print(" Escreva o " +i+ "º - nome de até 9 caracteres:  ");
			System.out.println("\n");
			Scanner nome = new Scanner(System.in);

			names= nome.next();
			System.out.print(names);
			System.out.println("\n");

		}


	
		for(int i = 0; i<names.length; i++){
			
				System.out.print(names[i]);
				System.out.println("\n");

			
		}*/		
	}	
}