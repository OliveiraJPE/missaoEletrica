#include <stdio.h>
#include <stdlib.h>
#include <math.h>
void main(){

int x=1, total, y=0;

while(x<=10){y=x*x; printf(" %d\n", y); total+=y; ++x;}

printf(" total = %d", total);

return 0;
}

