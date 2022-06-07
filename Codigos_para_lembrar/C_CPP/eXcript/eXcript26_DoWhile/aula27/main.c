#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
//Do While
int main()
{
    int i=0;
    char c; // usar aspas simples
    do{

     i++;
     printf("Digite 0 para sair\n");
     printf(" %i quantidade de vezes", i);
     c=getchar();
    }while(c!=EOF);//EOF ctrl+z. LIB ctype.h


   return 0;
}
