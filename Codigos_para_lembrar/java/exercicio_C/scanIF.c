#include <stdio.h>
#include <stdlib.h>

void main(){

int a, b;
	printf("Escreva dois numeros:  ");
	scanf(" %d%", &a);
	scanf(" %d", &b);

	if(a>b){
		printf(" O primeiro numero (%d), e maior que o segundo(%d).", a, b);
	}else{
		printf(" O Segundo numero (%d), e maior do que o primeiro (%d).", b, a);

	}
}
