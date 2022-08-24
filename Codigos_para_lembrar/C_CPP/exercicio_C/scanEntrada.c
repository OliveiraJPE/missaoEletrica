#include <stdio.h>
#include <stdlib.h>


/*

Ler entrada de daods com scanf("%tipo", &Variavel)ou
scanf("%tipo1%tipo2", &var1, &var2);

*/
int main()
{
    int num1, num2;

    printf("Digite o valor 1.\n");
    scanf(" %i", &num1);  //espaço antes da string de controle de formato

    printf("Digite o valor 2. \n");
    scanf(" %i", &num2);

    int soma = num1 + num2;
    printf("O valor esperado e: %i \n", soma);

    return 0;
}
