#include <stdio.h>
#include <stdlib.h>
#include <time.h>
 /* Funcao recursiva para fatoriais */

/*long fatorial(long); //prototipo da funcao

 int main() {

 int i ;
 for (i = 1; i <= 10; i++)
 printf("%2d! = %ld\n", i, fatorial(i));

 printf ("fmod(%.3f/%.3f) = %.3f\n", 13.0, 5.5, fmod(13.0, 5.5));
 return 0;
 }
  // Definição recursiva da funcao fatorial
 long fatorial(long numero)
 {
 if (numero <= 1){
 return 1;
 }else{
 return (numero * fatorial(numero - 1));
 }
 }*/
 /*main(){
 float x=0;
 printf("X e igual a  %f:\n", x);
 x=fabs(7.5);
 printf("X e igual a  %f:\n", x);
 x=floor(7.5);
 printf("X e igual a  %f:\n", x);
 x=fabs(0.0);
 printf("X e igual a  %f:\n", x);
 x=ceil(0.0);
 printf("X e igual a  %f:\n", x);
 x=fabs(-6.4);
 printf("X e igual a  %f:\n", x);
 x=ceil(-6.4);
 printf("X e igual a  %f:\n", x);
 x= ceil(-fabs(-8+floor(-5.5)));
 printf("X e igual a  %f:\n", x);


 return 0;
 }*/


int valorEntrada(int, int);
int valorSaida(int, int);
int valorDia(int, int);
main(){
//txmin3h=2.00 adicional 0.50 por hora ou fração. txmax24h = 10.00
float txmin3h, taxmax24h;
int valorFinal , diaEntrada, diaSaida;
txmin3h=taxmax24h=valorFinal=0.0;
int hEntrada, hSaida, mEntrada, mSaida, entrada, saida;

printf("\n----------------Estacionamento-----------------\n");
printf("\n\n");
printf("Entre com o dia da entrada e pressione enter:  ");
scanf(" %d", &diaEntrada);
printf("Entre com a hora da entrada e pressione enter:  ");
scanf(" %d", &hEntrada);
printf("Entre com a horaos minutos da entrada e pressione enter:  ");
scanf(" %d", &mEntrada);
printf("\n\n");
printf("Entre com o dia de saida e pressione enter:    ");
scanf(" %d", &diaSaida);
printf("Entre com a hora de saida e pressione enter:    ");
scanf(" %d", &hSaida);
printf("Entre com a hora de saida e pressione enter:    ");
scanf(" %d", &mSaida);
printf("\n-----------------------------------------------\n");

valorFinal=valorDia(diaEntrada, diaSaida);
entrada = valorEntrada(hEntrada, mEntrada);
saida = valorSaida(hSaida, mSaida);

return 0;
 }
int valorEntrada(int c, int d){
    int tot = (c*60)+ d;
    return tot;

}
int valorSaida(int e, int f){
    int tot2 = (e*60)+f;
}
int valorDia(int diaEntrada, int diaSaida){
if(diaEntrada==diaSaida)
    return valorSaida(int e, int f)- valorEntrada(int c, int d);
else
    return (24- valorEntada(int c, int d))+(0.0 +valorSaida(int e, int f));
}
