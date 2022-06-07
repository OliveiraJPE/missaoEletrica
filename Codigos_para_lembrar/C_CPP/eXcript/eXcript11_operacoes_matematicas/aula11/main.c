/*Operações Matemáticas*/

/*inclusão de Bibliotecas*/

#include <stdio.h>
#include <stdlib.h> // Arquivo de cabeçalho

int main()
{
    int num1, num2;
    num1=15;
    num2=20;

    int soma= num1 + num2;
    printf("A soma entre num1 e num2 e igual a %i \n", soma);

    int subtracao =num1 - num2;
    printf("A subtracao entre num1 e num2 e igual a %i \n", subtracao);

    int mult = num1 * num2;
    printf("A multiplicacao entre num1 e num2 e igual a %i \n", mult);

    // para divisão deve converter intereger para float
    float div = (float)num1 / (float)num2;
    printf("A divisao entre num1 e num2 e igual a %.2f \n", div);



        return 0;
}
