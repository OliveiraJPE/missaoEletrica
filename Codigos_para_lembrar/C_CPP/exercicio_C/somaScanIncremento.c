#include <stdio.h>
#include <stdlib.h>

void main(){

int x, y, z;
z=0;

printf("Atribua um valor inteiro para x:  ");

scanf(" %d", &x);

printf("Atribua um valor inteiro para y:  ");

scanf(" %d", &y);

z = x + y;

printf(" A soma entre x = %d e y = %d e: z = x + y = %d ", x, y, z);

x++;

z= x+y;
printf(" A soma entre o novo x = %d e y = %d e: z = x + y = %d ", x, y, z);


return 0;
}
