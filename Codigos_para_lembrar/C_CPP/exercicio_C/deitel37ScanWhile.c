#include <stdio.h>
#include <stdlib.h>
#include <math.h>
void main(){

long int x, y, potencia=1, i=0;

scanf(" %ld", &x);
scanf(" %ld", &y);

while(++i<=y){
	potencia*=x;
}
printf(" potencia = %ld", potencia);

x=pow(x, y);

printf(" X = %ld", x);
return 0;
}

