import java.util.Scanner;
	//ler entrada do teclado.
public class EntradaDados{

	public static void main(String[]args){
		
		int a;

		Scanner ler=new Scanner(System.in);
		
		System.out.println("\nEscreva um numefro inteiro");
		a=ler.nextInt();

		System.out.printf(" \n O numero inteiro %d foi digitado", a);

	}   
}
