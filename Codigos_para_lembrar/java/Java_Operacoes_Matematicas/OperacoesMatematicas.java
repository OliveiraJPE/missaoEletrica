import java.util.Scanner;
//import java.util.Missing;

public class OperacoesMatematicas{

// variavel global
static int numero = 120;
	public static void main(String[]args){

    int nuM1=15;
    int nuM2=20;
    double div=0.0f;
    int res, soma;

	soma= nuM1 + nuM2;
	res = numero*soma;

    System.out.printf("A soma entre nuM1 e nuM2 e igual a %d \n", soma);
    System.out.printf("Resultado usando variavel global e %d x %d = %d\n",numero, soma,  res);

    int subtracao =nuM1 - nuM2;
    System.out.printf("A subtracao entre nuM1 e nuM2 e igual a %d \n", subtracao);

    int mult = nuM1 * nuM2;
    System.out.printf("A multiplicacao entre nuM1 e nuM2 e igual a %d \n", mult);

    // para divisao deve converter intereger para float
    div = (double)nuM1/ (double) nuM2;
    System.out.printf("A divisao entre nuM1 e nuM2 e igual a %.2f \n",  div);
  }
}
