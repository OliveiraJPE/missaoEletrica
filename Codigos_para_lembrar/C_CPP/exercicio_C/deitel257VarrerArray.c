/* Programa de votação estudantil */
#include <stdio.h>
#include <stdlib.h>
#define TAMANHO_RESPOSTAS 40
#define TAMANHO_FREQUENCIA 11

 main()
 {
 char string[]="primeiro teste", string2[]={0};
 int  i, j;
 /*int opiniao, nivel;
 int respostas[TAMANHO_RESPOSTAS] =
 {1,2,6,4,8,5,9,7,8,10,1,6,3,8,6,10,3,8,2,7,6,5 ,7,6,5,7,6,8,6,7,5,6,6,5,6,7,5,6,4,8,6,8,10};
 int frequencia[TAMANHO_FREQUENCIA] = {0};

 for (opiniao = 0; opiniao <= TAMANHO_RESPOSTAS - 1; opiniao++){
 ++frequencia[respostas[opiniao]];

 printf("%s%17s\n", "Nivel", "Frequencia");
 for (nivel = 1; nivel <= TAMANHO_FREQUENCIA - 1; nivel++){
 printf("%5d%17d\n", nivel, frequencia[nivel]);

 }
 }*/
for(i=0; string[i]!='\0'; i++){

printf(" %c\n", string[i]);
}

printf("*\n*\n");
printf(" %s\n*", string);

 //for(i=0; i<=19; i++){
    printf("\nDigite um valor de string para o array.");
    scanf(" %s", string2);
    printf("\n\n %s", string2);


    for (j=0; string2[j]!='\0'; j++){
    printf("\n %c", string2[j]);
   // }
}

 return 0;
 }
