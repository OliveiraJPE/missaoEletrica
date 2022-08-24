#include <stdio.h>
#include <stdlib.h>

void main(){
	int i=1;
	int j=0;
	int s;
	while(i<=10){
	s=j+i;
	printf(" %d) A soma de %d e %d  e: %d\n\n",i, j, i, s );
	j+=i;
	i++;
	}
	printf("A soma de 1 a 10  e: %d\n\n", j);
return 0;
}
