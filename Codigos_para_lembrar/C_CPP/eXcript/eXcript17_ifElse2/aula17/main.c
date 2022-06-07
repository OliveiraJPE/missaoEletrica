/* #include <stdio.h>
#include <stdlib.h>

void main()
{
    int a;
    int b;
    int c;
    scanf(" %d", &a);
    printf("\n\n");
    scanf(" %d", &b);
    printf("\n\n");
    a*=b;
    c=a*b;

    printf(" O valores ao %d  e  %d.\n", a, b);
    printf(" O valor de c e: %d.\n",c);

    return 0;
    */
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




    /*float N1, N2, N3, res;
    int op;

    printf("Entre com tres números:  \n");
    scanf(" %f%f%f",&N1, &N2, &N3);

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
            printf("Opçao invalida!!!");
         break;
    }
    printf("Opcao: (%d). Resposta =  %4.2f",op, res);



    return 0;
    */

   /* for(int i=0; i<3; i++){
    printf(" * * * * * * * * * * * * *\n");
    printf("* * * * * * * * * * * * * \n");
    }
    printf("\n");
    int N1, N2, res;
    printf("Escreva dois numeros inteiros com tres digitos:  \n");
    scanf(" %d", &N1);
    scanf(" %d", &N2);

    res = N1%2;
    if(res==0){
        printf("%d e par.", N1);

    }else{
        printf("%d e impar.", N1);
    }

    if(N1%N2==0){
        printf(" %d e multiplo de %d.", N1, N2);
    }else if(N2%N1==0){
        printf(" %d e multiplo de %d.", N2, N1);
    }else{
        printf(" %d e %d nao sao multiplos.",N1, N2);
    }

    printf("\n\n");
    for(int i=0; i<3; i++){
    printf(" * * * * * * * * * * * * *\n");
    printf("* * * * * * * * * * * * * \n");
    }



    printf("****Escrevendo numeros inteiro correspondentes a strings.");
    printf("\n");
    printf("A =        %d",  'A',"\n");
     printf("B =        %d",  'B',"\n");
      printf("C =        %d",  'C',"\n");
       printf("0 =        %d",  '0',"\n");
        printf("$ =        %d",  '$',"\n");
         printf("  =        %d",  ' ',"\n");

return 0;
*/

/*int i, q, c;

printf("|\tnumero\t\t|\t\tquadrado\t\t|\t\tcubo\t|\n\n");
for(i; i<=10; i++){
    //q= i*i;
    q=pow(i, 2);
    //c=i*i*i;
    c=pow(i, 3);
    printf("|\t%d\t\t|\t\t%d\t\t|\t\t%d\t|\n\n", i, q, c);

}
*/

/*int contador = 0, cont =1, j=2 , i;

while(++contador<=10)
    printf("Contador = %d\n\n", contador);

for(i=1; i<=15;i++)
     printf(" i = %d\n\n", i);
for(; j<=12;){
    printf("j = %d\n", j);
    j+=2;
}
for (i = 100; i >= 1; i--)
    printf(" i = %d\n\n", i);

while(cont<=10){
    printf("Cont = %d\n", cont);

    ++cont;
}*/

#include <stdio.h>
#include <math.h>
main ()
{
/* int ano;
 double quantia, principal = 1000.0, taxa = 1.05;
 printf ("%4s%21s\n", "Ano", "Saldo na conta");
 for (ano = 1; ano <= 10; ano++) {
 quantia = principal * pow(taxa, ano);
 printf("%4d%21.2f\n", ano, quantia);
 }*/



printf ("%15.1f\n", 333.546372546372); /* imprime 333.5 */
printf("%15.2f\n", 1123456789124333.546372546372); /* imprime 333.55 */
printf("%-15.3f\n", 1123456789124333.546372546372); /* imprime 333.546 */
printf("%-15.4f\n", 333.546372546372); /* imprime 333.5464 */
printf("%-15.5f\n", 333.546372546372); /* imprime 333.54637 */
printf("%10.2f\n", pow (2.5, 3)); /* imprime 15.63 */
 return 0;

}

