#include <stdio.h>
#include <stdlib.h>

void main(){

	int produto = 4;

	int var;

	printf(" Escolha a opção 1 para *= ou 2 para = * \n\n ");

	scanf(" %d", &var);

	if (var == 1){

		produto*=2;
	}else{
		produto = produto * 4;
	}

	printf(" O produto obteve o resultado  = %d\n\n", var);
	printf(" O valor final é =  %d \n\n", produto);
	return 0;
}
