#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <math.h>

int main()
{
   printf("\n_________________Maniplulaçao de caracteres : toupper()________________________\n");

 //maniplulaçao de caracteres : toupper()
    //Tomada de decisão
    char a1;
    char b1;
    char c1;
    	printf("\nEscreva uma letra minuscula: \n");
   	 scanf(" %c",&a1);
    // pacra scanf nao dar erro deixar espaço antes do digito de controle de formato %c.
   	 printf("\nEscreva outra uma letra minuscula:  \n");
    	scanf(" %c",&b1);
    
	printf("\nEscreva mais uma letra minuscula:  \n");
   	scanf(" %c",&c1);
    
	printf("\nAs letra digitadas foram: \t> %c < \t> %c <\t > %c <\n",toupper(a1), toupper(b1), toupper(c1));

    if(a1==b1 && a1!=c1 && b1!=c1)
    {
        	printf("\n1) %c e %c sao iguais!\n", a1, b1);
    }else if (b1==c1 && a1!=c1 && b1!=a1){
       	 printf("\n2) %c e %c sao iguais!\n", b1, c1);
    }else if(a1==c1 && a1!=b1 && b1!=c1){
        	printf("\n3) %c e %c sao iguais!\n", a1, c1);
    }else if(a1==b1 && b1==c1){
        	printf("\n4) %c, %c e %c , Todas as letras sao iguais.\n", a1, b1, c1);
    }else{
        	printf("\n5) %c, %c e %c , Todas as letras sao diferentes.\n", a1, b1, c1);
    }


	printf("\n____________________Teste logico__________________________\n");
 
int j,  i =10;

   	 printf("\ni == 10 e  %i", i==10); // Verdadeiro, logo, retorna o valor 1.
   	 printf("\n");
   	 printf("\ni != 10 e   %i", i!=10); // Falso. Logo, reotrna o valor 0.
  	 printf("\n");
   	 printf("\n!( i == 10) e  %i\n", !(i==10)); // Falso. ! é o NOT. Logo, reotrna o valor 0.

    	printf("\nDigite um numero ,diferente de 5:  ");
    	scanf(" %i", &j);
    
if(!(j==5)){

// == comparação. != comparação negativa
        printf("\nTRUE\n");
    }else{
        printf("\nFALSE\n");
    }



printf("\n__________________________Ler com scan ___________________________________\n");

    int a;
    int b;
    int c;
	printf("\nEscreva um valor inteiro para a : ");   
	 scanf(" %d", &a);
    printf("\n\n");
	printf("\nEscreva um valor inteiro para b : ");   
    	scanf(" %d", &b);
    printf("\n\n");
    
	a*=b;
    	c=a*b;

    printf(" \nO valores ao %d  e  %d.\n", a, b);
    printf(" \nO valor de c e: %d.\n",c);

   
printf("\n__________________________Ler com scan de calcular co tres numeros com switch ___________________________________\n");
 /*
    Escreva um programa em C que receba três números inteiros
     diferentes digitados no teclado e imprima a soma, a
     média, o produto, o menor e o maior desses números.
     Entre com três inteiros diferentes: 13 27 14

A soma e 54
A media e 18
O produto e 4914
O menor e 13
O maior e 27
    */

	float N1, N2, N3, res;
    	int op;

    printf("\nEntre com N1:  ");
    scanf(" %f",&N1);

     printf("\nEntre com N1:  ");
    scanf(" %f",  &N2);
    
     printf("\nEntre com N1:  ");
    scanf(" %f",  &N3);


    printf("------------------------------\n");
    printf("    Escolha uma operacao: \n");
    printf("------------------------------\n");
    printf("1)\tsoma.\n2)\tMedia.\n3)\tMultiplicacao\n4)\tMaior\n5)\tMenor\n");
    printf("------------------------------\n");

    scanf(" %d",&op);

    switch (op)
    {
        case 1:
            res=N1+N2+N3;
        break;
        case 2:
            res=(N1+N2+N3)/3;
        break;
        case 3:
             res=N1*N2*N3;
        break;
        case 4:
            if(N1>N2>N3){
                res=N1;
            }else if(N2>N3>N1){
                res=N2;
            }else{
                res=N3;
            }
         break;
         case 5:
            if(N1<N2>N3){
                res=N1;
            }else if(N2<N3<N1){
                res=N2;
            }else{
                res=N3;
            }
         break;
         default:
            printf("\nOpçao invalida!!!");
         break;
    }
    printf("\nOpcao: (%d). Resposta =  %4.2f",op, res);


printf("\n__________________________Ler com scan e calcular co for e condicionais.___________________________________\n");

   for(int i=0; i<3; i++){
    printf(" * * * * * * * * * * * * *\n");
    printf("* * * * * * * * * * * * * \n");
    }
    printf("\n");
    int N11, N21, rEs;
    printf("Escreva dois numeros inteiros com tres digitos:  \n");
    scanf(" %d", &N11);
    scanf(" %d", &N21);

    rEs = N11%2;
    if(rEs==0){
        printf("\n %d e par.", N11);

    }else{
        printf("\n %d e impar.", N11);
    }

    if(N11%N21==0){
        printf("\n %d e multiplo de %d.", N11, N21);
    }else if(N21%N11==0){
        printf(" \n%d e multiplo de %d.", N21, N11);
    }else{
        printf("\n %d e %d nao sao multiplos.",N11, N21);
    }

    printf("\n\n");
    for(int i=0; i<3; i++){
    printf(" * * * * * * * * * * * * *\n");
    printf("* * * * * * * * * * * * * \n");
    }



    printf("\n___________________Escrevendo numeros inteiro correspondentes a strings._______________________\n");
    printf("\n");
    printf("A =        %d",  'A',"\n");
     printf("B =        %d",  'B',"\n");
      printf("C =        %d",  'C',"\n");
       printf("0 =        %d",  '0',"\n");
        printf("$ =        %d",  '$',"\n");
         printf("  =        %d",  ' ',"\n");





printf("\n___________________Uso de metodo pow_______________________\n");


int i1, q, c11;

printf("\n|\tnumero\t\t|\t\tquadrado\t\t|\t\tcubo\t|\n\n");
for(i1; i1<=10; i1++){
    //q= i1*i1;
    q=pow(i1, 2);
    //c11=i1*i1*i1;
    c11=pow(i1, 3);
    printf("|\t%d\t\t|\t\t%d\t\t|\t\t%d\t|\n\n", i1, q, c11);

}

printf("\n___________________Uso de contador_______________________\n");


int contador = 0, cont =1, j2=2 , i2;

while(++contador<=10){
    printf("Contador = %d\n\n", contador);
}
for(i2=1; i2<=15;i2++){
     printf(" i2 = %d\n\n", i2);
}
for(; j2<=12;){
    printf("j2 = %d\n", j2);
    j2+=2;
}
for (i2 = 100; i2 >= 1; i2--){
    printf(" i2 = %d\n\n", i2);
}
while(cont<=10){
    printf("Cont = %d\n", cont);

    ++cont;
}


printf("\n___________________Calculo de juros______________________\n");


 int ano;
 double quantia, principal = 1000.0, taxa = 1.05;
 printf ("%4s%21s\n", "Ano", "Saldo na conta");
 for (ano = 1; ano <= 10; ano++) {
 quantia = principal * pow(taxa, ano);
 printf("%4d%21.2f\n", ano, quantia);
 
}
printf("\n___________________Impressão de pontos flutuantes_____________________\n");

printf ("%15.1f\n", 333.546372546372); /* imprime 333.5 */
printf("%15.2f\n", 1123456789124333.546372546372); /* imprime 333.55 */
printf("%-15.3f\n", 1123456789124333.546372546372); /* imprime 333.546 */
printf("%-15.4f\n", 333.546372546372); /* imprime 333.5464 */
printf("%-15.5f\n", 333.546372546372); /* imprime 333.54637 */
printf("%10.2f\n", pow (2.5, 3)); /* imprime 15.63 */


    return 0;
}
