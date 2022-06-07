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
       return 0;
}
