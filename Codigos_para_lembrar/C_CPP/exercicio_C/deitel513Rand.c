#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
int n, a, b;
for (int i=1; i<=10; i++){
//printf("Escreva um valor para a e outro para b");
//scanf(" %d%d", &a, &b);

n=6 + (rand() % 16);
if(n%2==0){
    printf("\nO valor de   n  e %d\n",n);
}
}

    return 0;
}
