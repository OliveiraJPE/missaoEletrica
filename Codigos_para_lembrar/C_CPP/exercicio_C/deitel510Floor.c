#include <stdio.h>
#include <stdlib.h>

int main()
{
    char sair = 1;
    float y, x;
    while(sair!='0')
    {
        printf("\nEscreva um valor para x");
        scanf(" %f", &x);

        y=floor (x*100)/100;

        printf("\n O valor final arredondado para o valor mais proximo e  %f", y);
        printf("\nPara sair digite 0 ou qualquer tela para continuar");
        scanf(" %c", &sair);
    }

        return 0;
}
