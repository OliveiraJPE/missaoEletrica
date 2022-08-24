#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*INCREMENTA X DENTRO DA FORMULA E DEPOIS X MANTEM ESSE NOVO VALOR
    int prog=5, res=5, x=5;
    printf("programacao %d e resultado %d e x =  %d\n", prog, res, x);

        prog*=x++;
    printf("programacao %d e resultado %d e x =  %d\n", prog, res, x);

        res=++x+x;
    printf("programacao %d e resultado %d e x =  %d\n", prog, res, x);
    */

    int i=0;
    int x=0;
    int valDigitado = 0;

    printf("Quantidade de vezes: \n");
    scanf(" %d", &valDigitado);
    while (i<=10){
        printf(" %d\n", i);

        i++;
    }
    while(x< valDigitado){
        printf("%d\n", x*10);
        x++;
    }



    return 0;
}
