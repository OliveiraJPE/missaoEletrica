#include <stdio.h>
#include <stdlib.h>

int main()
{
  /*  int a;
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

    for(int i=0; i<3; i++){
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

}

