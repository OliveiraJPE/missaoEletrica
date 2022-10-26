#include <stdio.h>
#include <stdlib.h>

void main(){

int x,  y,  t=0;
char i='c';

printf(" escreva o primeiro numero:  ");
scanf(" %d",&x);
printf("\n Escreva o segundo numero:  ");
scanf(" %d",&y);

t=x+y;
printf(" T =  %d + %d = %d\n\n", x, y, t);

while(i!='s'){
	printf("\nPara encerrar digite s, e para continuar digite c. \n\n");
	scanf(" %c",&i);
	if(i=='c'){
	printf("Agora digite um numero inteiro seguido de enter para obter a soma.\n\n");
	scanf(" %d",&x);
	t+=x;
	printf("O valor da soma neste momento é:  %d\n", t);
}
}
	printf(" A soma final dos numeros digitados e  %d\n", t);



return 0;
}

