#include <stdio.h>
#include <stdlib.h>

main(){

int x, y, i=1, potencia=1;

printf("\nDigite um valor inteiro para x. X = ");
scanf(" %d", &x);
printf("\nDigite um valor inteiro para y. Y =  ");
scanf(" %d", &y);

potencia*=x;
printf(" Potencia = %d\n", potencia);

printf(" x= %d, e y = %d\n", x, y);
y++;

printf("Novo y = %d\n", y);

if(y<=x)
{
	printf(" Y e menor ou igual do que x\n");
}else{

	printf("X e menor do que y\n");
}
return 0;
}
