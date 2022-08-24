#include <stdio.h>
#include <stdlib.h>


 /* FATORIAL n!  = n * (n - 1) * (n - 2) * ... * 1

 n! = n * (n - 1)!
(n-1)!= (n-1)* (n-2)!

recursao >> return numero * fatorial (numero — 1);
*/

int main()
{
int fatorial = 1, numero, contador;

printf("Digite um numero:  ");
scanf(" %d", &numero);

    for(contador = numero; contador >= 1; contador--) {
        fatorial *= contador;
    }
        printf("o fatorial de %d e %d", numero, fatorial);
    return 0;
}
