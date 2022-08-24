#include <stdio.h>
#include <stdlib.h>
#include <math.h>

double hipotenusa(double, double);
double potencia(double, double);
int main()
{
    int i=1, n1, e1;
    double a, b, c;
    b=2;
    c=4;

    a=hipotenusa(b, c);
    printf("\nO valor da hipotenuza e %lf \n", a);
    a=potencia(b, c);
    printf("\nO valor da potencia e %lf \n", a);
    return 0;
}
double hipotenusa(double x, double y){

double z;

z=sqrt((pow(x, 2))+(pow(y, 2)));
 return z;

}
double potencia(double n1, double e1){
 double d, p;
 int i;

 d=n1;
for(i=1;i<e1;i++){
//printf("\n\n %lf", n1, "\n\n");
    n1=n1*d;
//printf("\n\n %lf", n1, "\n\n");
}

p=n1;

return p;
}
