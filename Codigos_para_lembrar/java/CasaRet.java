
import java.util.Scanner;

public class CasaRet{
	public static void main(String args[]){
	
	//Scanner ler=new Scanner(System.in);
	//final int CASO = 3;
	//int CASO;

	
/*

	boolean valorOk = false;
	double preco;
	int a;


	preco = 20;
	valorOk =preco>=0;
*/

/*

if (valorOk){
		System.out.println(" O valor da construção é "+preco);
	}else{
		System.out.println("Valor de área é negativo!");
}

*/
/*	if (valorOk)
		System.out.println(" O valor da construção é "+preco);
	else
		System.out.println("Valor de área é negativo!");
*/
/* //  Operador Ternário

	System.out.println((valorOk)?" O valor da construção é "+preco: "Valor de área é negativo!");
	a=(valorOk)?1:0;

	System.out.println("Valor de 'a' é " +a);
*/

/*
// SWITCH; while; do...while  e for são iguais ao C.

	System.out.println("Informe um valor entre 1 e 3 para a variável caso");
	CASO = ler.nextInt();

	switch(CASO){
		case 0: System.out.println("Valor é " +CASO);
		break;
		case 1: System.out.println("Valor é " +CASO);
		break;
		default: System.out.println("Valor é " +CASO);
		break;
	}
*/

  Scanner ler = new Scanner(System.in);      
 // 2. instanciando e criando um objeto Scanner

  int a, b;
/*

 // int c [] = {2, 4}; ou

 int [] c =new int [2];  c[0]=2; c[1]=4; // cria arranjo (array) com duas posições e depois atribui valores.


a=3;
b=4;

  System.out.printf(" A soma entre  a variavel a (%d) +  a variabel b (%d) é = %3d\n", a, b, (a + b));
  System.out.printf("%d - %d = %3d\n", a, b, (a - b));
  System.out.printf("%d * %d = %3d\n", a, b, (a * b));
  System.out.printf("%d / %d = %3d (divisão inteira)\n", a, b, (a / b));
  System.out.printf("%d / %d = %6.2f (divisão exata)\n", a, b, ((double)a / b));
 System.out.printf("%d / %d = %3f (divisão inteira)\n", a, c[0], ((double)(a / c[0])));
*/
 

System.out.printf("Informe o primeiro valor: ");
  a = ler.nextInt();         // 3. entrada de dados (lendo um valor inteiro)

  ler.nextLine();  // esvazia o buffer do teclado

  System.out.printf("Informe o segundo valor.: ");
  b = ler.nextInt();     // 3. entrada de dados (lendo um valor inteiro)

  System.out.printf("\nResultados:\n");
  System.out.printf(" A soma entre  a variavel a (%d) +  a variabel b (%d) é = %3d\n", a, b, (a + b));
  System.out.printf("%d - %d = %3d\n", a, b, (a - b));
  System.out.printf("%d * %d = %3d\n", a, b, (a * b));
  System.out.printf("%d / %d = %3d (divisão inteira)\n", a, b, (a / b));
  System.out.printf("%d / %d = %6.2f (divisão exata)\n", a, b, ((double)a / b));

  }

}



