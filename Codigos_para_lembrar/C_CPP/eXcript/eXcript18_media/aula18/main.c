#include <stdio.h>
#include <stdlib.h>

int main()//Condicional M�dia escolar
{
    float nota1, nota2, nota3, nota4, media;
    nota1=nota2=nota3=nota4=media=0;


    printf("=========Media Escolar==========\n\n");
     printf("       Escreva a nota 01:  "),
    scanf(" %f", &nota1);
     printf("       Escreva a nota 02:  "),
    scanf(" %f", &nota2);
     printf("       Escreva a nota 03:  "),
    scanf(" %f", &nota3);
     printf("       Escreva a nota 04:  "),
    scanf(" %f", &nota4);

    media=(nota1+nota2+nota3+nota4)/4;
    printf("Sua media  foi: %f \n", media);

    if(media<4){
        printf("Aluno em reprovado!");
    }else if(media<6){
        printf("Aluno em recupera��o!");
    }else if(media>=6 && media<=9){
        printf("Aluno em Aprovado!");
    }else if(media>9){
        printf("Aluno em Aprovado BOMSAO!");
    }
    return 0;
}
