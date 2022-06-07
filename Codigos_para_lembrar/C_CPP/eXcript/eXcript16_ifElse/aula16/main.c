#include <stdio.h>
#include <stdlib.h>
#include<ctype.h>
void main()
{
    //maniplulaçao de caracteres : toupper()
    //Tomada de decisão
    char a1;
    char b1;
    char c1;
    printf("Escreva uma letra minuscula: \n");
    scanf(" %c",&a1);
    // pacra scanf nao dar erro deixar espaço antes do digito de controle de formato %c.
    printf("Escreva outra uma letra minuscula:  \n");
    scanf(" %c",&b1);
    printf("Escreva mais uma letra minuscula:  \n");
    scanf(" %c",&c1);
    printf("As letra digitadas foram: \t> %c < \t> %c <\t > %c <\n",toupper(a1), toupper(b1), toupper(c1));

    if(a1==b1 && a1!=c1 && b1!=c1)
    {
        printf("1) %c e %c sao iguais!\n", a1, b1);
    }else if (b1==c1 && a1!=c1 && b1!=a1){
        printf("2) %c e %c sao iguais!\n", b1, c1);
    }else if(a1==c1 && a1!=b1 && b1!=c1){
        printf("3) %c e %c sao iguais!\n", a1, c1);
    }else if(a1==b1 && b1==c1){
        printf("4) %c, %c e %c , Todas as letras sao iguais.\n", a1, b1, c1);
    }else{
        printf("5) %c, %c e %c , Todas as letras sao diferentes.\n", a1, b1, c1);
    }
    return 0;
}
