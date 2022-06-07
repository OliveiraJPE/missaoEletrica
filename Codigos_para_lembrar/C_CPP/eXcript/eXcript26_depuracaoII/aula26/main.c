#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

//Depuracao - Monitorar o programa e acompanhar a execução.
/*
marcar break point com botao direito
e add break point em c\nima da linha que desecja
iniciar a depuração.

no menu DEBUG setar step into.
pressixonar f7 para executar linha por linha.
*/

int main()
{
printf("Digite o numero 1: \n");

char c;
c= getchar();//semelhante a scanf,
//porem somente lê um caracter, e necessita da lib
//ctype.h.


if( c == '1')
{
    printf(" \nCaractere certo.\n");
}else{
    printf("\n O valor e invalido.\n");
    printf("Voce digitou  >%c<. \n",c);
}


    return 0;
}
