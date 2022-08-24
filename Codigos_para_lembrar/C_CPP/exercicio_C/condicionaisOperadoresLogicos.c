#include <stdio.h>
#include <stdlib.h>

int main()
{
    //Operadores lógicos e condicionais

    int jovem, idoso, idade;
    jovem =17;
    idoso = 60;


    printf("Digite sua idade:  ");
    scanf("%i", &idade);

    if(idade<=jovem){
        printf("\nA idade informada e de um jovem!");
    }else{
        if(idade>= idoso){
        printf("\nA pessoa e idosa!");
        }else{
            if((idade>jovem) && (idade<idoso)){
                printf("\nA pessoa e de meia idade");
            }
        }
    }

//Operadores condicionais/relacionais II

    //&& condi??o e.
    //|| condi??o ou.
    // ! nega??o.

    int i;
    int condicao = (i>40)&&(i<60);

    printf("Escreva um valor inteiro.");
    scanf("%d", &i);

    printf("i e maior do que 40 e menor doque 60? \n\n");
    printf("%d", condicao);
    printf("\n");
    printf("%d",  !condicao);

    //se i for menor que 40 e maior que 60 retorne 1 (verdadeiro)
       return 0;
}
