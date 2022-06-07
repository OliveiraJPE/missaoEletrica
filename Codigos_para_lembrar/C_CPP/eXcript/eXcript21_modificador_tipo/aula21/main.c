#include <stdio.h>
#include <stdlib.h>

int main()
{/* Modificadores de tipo.
    char, int, float, double, void.

   As Quatro instruções para serem usadas nas declaracoes
   de variáveis:

   economiza ou expande memoria

    signed - sinal - + e  - (inteiros por exemplo)
    unsigned  - sem sinal - so +
    long - Aumentar a capacidade de
    armazenamencto da nossa cvariavel
    short - Diminuir o tamanho de armazenamento.

  */
    int p;
    unsigned short int u; //diminui pela metade o espaço de armazenamento.
    double o; // não suporta short
    long double v;// long dobra

    printf("Tamanho de u = %i Bytes\n", sizeof(u));
      printf("Tamanho de p = %i Bytes\n", sizeof(p));
      printf("Tamanho de o = %i Bytes\n", sizeof(o));
       printf("Tamanho de v = %i Bytes\n", sizeof(v));

    return 0;
}
