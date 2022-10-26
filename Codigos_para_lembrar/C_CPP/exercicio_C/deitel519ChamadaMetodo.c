#include <stdio.h>
#include <stdlib.h>

int margem (void);
int calculo(void);
int calculo2(void);

int main()
{

    margem();
    calculo();
    calculo2();

    return 0;
}
int margem(){
    int lado, i, j;
    char fig;

    printf("\nDetermine o lado do quadrado:   >>>  ");
    scanf(" %d", &lado);
    printf("\nDetermine a figura:  >>>  ");
    scanf(" %c", &fig);

   for(j=1; j<=lado; j++){
        for(i=1; i<=lado; i++){
        printf(" %c\t",  fig);
        }
   printf("\n\n");
   }
return 0;
}
int calculo(){
int a, b;
int c, r;

    printf("\n Insira um valor para 'a': >>>  ");
    scanf(" %d", &a);
    printf("\n Insira um valor para 'b': >>>  ");
    scanf(" %d", &b);



c=(int)(a/b);
r=(int)(a%b);

printf("\nparte inteira A)    %i\n",c);
printf("\nresto B)    %i\n",r);

return 0;
}
int calculo2(){
int a, b, c, d, e, f, g, r;

a=b=c=d=e=f=g=r=0;
    printf("\n Insira um valor para 'a': >>>  ");
    scanf(" %d", &a);

    if(a>=1 && a<=32767){
            if((int)(a/10000)>0 && a<=32767){
                    b=(int)(a/10000);
                     c=(int)((a - (b*10000))/1000);
                      d=(int)((a - (b*10000)-(c*1000))/100);
                       e=(int)((a - (b*10000)-(c*1000)-(d*100))/10);
                        f=(int)((a - (b*10000)-(c*1000)-(d*100)- (e*10)));
            }else if((int)(a/1000)>0 && a<=9999){
                    c=(int)(a/1000);
                     d=(int)((a - (b*10000)-(c*1000))/100);
                       e=(int)((a - (b*10000)-(c*1000)-(d*100))/10);
                        f=(int)((a - (b*10000)-(c*1000)-(d*100)- (e*10)));
            }else if((int)(a/100)>0 && a<=999){
                    d=(int)(a/100);
                      e=(int)((a - (b*10000)-(c*1000)-(d*100))/10);
                        f=(int)((a - (b*10000)-(c*1000)-(d*100)- (e*10)));
            }else if((int)(a/10)>0 && a<=99){
                    e=(int)(a/10);
                       f=(int)((a - (b*10000)-(c*1000)-(d*100)- (e*10)));
            }else if((int)(a/1)>0 && a<=9)
                    f=(int)(a/1);
    }

    printf("\n << %d >><< %d >><< %d >><< %d >><< %d  >>", b, c, d, e, f);

return 0;
}
