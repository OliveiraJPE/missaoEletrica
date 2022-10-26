#include <stdio.h>
#include <stdlib.h>
char palavra(void);
int main()
{
     char t="a";

     scanf(" %c", &t);
     printf("\n");

     if(t!="a"){
        char b[80]=palavra();
        printf("%s", b);
     }

    return 0;
}
char palavra(){

 char s[80];
        printf("Entre com a frase: ");
        gets(s);

        //printf(" %s", s);
     return s;
}
