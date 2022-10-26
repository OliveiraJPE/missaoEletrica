 /* Funcao recursiva para fatoriais */
#include <stdio.h>
 long fatorial(long); //prototipo da funcao

 int main() {
 int i ;
 for (i = 1; i <= 10; i++)
 printf("%2d! = %ld\n", i, fatorial(i));
 return 0;
 }
  /* Definição recursiva da funcao fatorial */
 long fatorial(long numero)
 {
 if (numero <= 1){
 return 1;
 }else{
 return (numero * fatorial(numero - 1));
 }
 }

