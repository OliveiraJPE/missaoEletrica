#include <stdio.h>
#include <stdlib.h>

void main(){

	int par=0;
	int impar=0;
	int salto=1;
	int numUsuario;

 printf("Informe um numero inteiro:  ");
 scanf(" %i", &numUsuario);

  while(salto <= numUsuario){
	if(salto%2==0){
		par=par+1;

	}else{
		impar=impar+1;

	}

	salto++;
 }
 	printf("\nA quantidade de números pares entre  0 e %i e: %i\n ", numUsuario, par);
	printf("\nA quantidade de numeros impares entre 0 a %i e:  %i\n", numUsuario, impar);
	printf("\nsequencia com duas casas e ponto flutuante:  %.2f\n", 123.345);
	printf("\nPI com três casas e ponto fluante:  %.3f\n", 3.14160);

return 0;
}
