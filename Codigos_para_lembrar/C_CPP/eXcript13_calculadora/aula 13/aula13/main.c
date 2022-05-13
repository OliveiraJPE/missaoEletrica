#include <stdio.h>
#include <stdlib.h>


int main()
{
    float n1, n2, res;
    char op;

    printf("Escreva um numero real(0.0):  ");
    scanf(" %f", &n1);

    printf("Escreva outro numero real(0.0):  ");
    scanf(" %f", &n2);

    printf("Escreva a operacao desejada: (+  -  *  /)  ");
    scanf(" %c", &op);
    printf("\n\n");

    if(op=='+'){
    res=n1+n2;
    }else if(op=='-'){
    res=n1-n2;
    }else if(op=='*'){
    res=n1*n2;
    }else if(op=='/' && n2<=0){
    printf("Divisao por 0.\n");
    }else if(op=='/' && n2>0){
    res=n1/n2;
    }else{
    printf("operacao invalida: operador invalido");
    printf("\n\n");
    }
    printf("Operacao:   %c", op);
    printf("\n\n");
    printf("Resultado:    %f",res);
    printf("\n\n");
    return 0;
}
