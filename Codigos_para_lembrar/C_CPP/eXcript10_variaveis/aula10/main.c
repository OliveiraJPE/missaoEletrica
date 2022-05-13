#include <stdio.h>
#include <stdlib.h>

//Formatando os tipos na função printf
int main()
{
    // printf("%tipo_de_dados", valor_a_ser_impresso);
    // printf("%tipo1, %tipo2", var1, var2);

    int num=11;
    printf("%i\n", num); // %i caractere do tipo inteiro


    float f=2.2;
    printf("%f\n", f); // %f caractere do tipo real

    //integer %i ou %d
    //Float ou double - %f
    //char %c
    //String %s

    // %u imprimir módulo de um número
    // %p imprimir endereço de memória
    // %e ou %E imprimir notação científica
    // %% imprimir o simbolo de porcecntagem.

    int x=10;
    printf("%i\n",x);

    float ff =4.12;
    printf("%f \n", ff);

    printf("%i  -  %f \n ", x,  ff);

    return 0;
}
