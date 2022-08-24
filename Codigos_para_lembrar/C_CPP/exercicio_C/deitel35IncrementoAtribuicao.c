#include <stdio.h>
#include <stdlib.h>

void main(){

	int produto=5;
	int resultado=5;
	int x=5;

	produto*=x++;
	resultado=++;//+x;
	printf("Produto: %d; Resultado:  %d.", produto, resultado);
return 0;
}
