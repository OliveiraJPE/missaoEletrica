#include <stdio.h>
#include <stdlib.h>

int main()
{// Operadores condicionais/relacionais II

    //&& condição e.
    //|| condição ou.
    // ! negação.

    int i;
    int condicao = (i>40)&&(i<60);

    printf("Escreva um valor inteiro.");
    scanf("%d", &i);

    printf("i e maior do que 40 e menor doque 60? \n\n");
    printf("%d", condicao);
    printf("\n");
    printf("%d",  !condicao);

    //se i for menor que 40 e maior que 60 retorne 1 (verdadeiro)
    return 0;
}
