#include <stdio.h>
#include <stdlib.h>
#include <time.h>


//Uso de rand() e srand()
//A função srand utiliza um argumento inteiro
//unsigned para ser a semente da função rand de
//forma que seja produzida uma seqüência
//diferente de números aleatórios em cada execução do
//programa
main()
{
/*int i;

for(i=1; i<=20; i++){
    printf(" %10d", 1+(rand()%6));
    if(i%5==0){
    printf("\n");
    }
}
*/
/* 6000 lançamentos de um dado de seis faces
int face, jogada, frequencia1 = 0, frequencia2 = 0,
 frequencia3 = 0, frequencia4 = 0,
 frequencia5 = 0, frequencia6 = 0;
 printf("%s%13s\n", "face", "frequencia");
 for (jogada = 1; jogada <= 6000; jogada++) {
 face = 1 + (rand( ) % 6);
 switch (face) {
 case 1:
 ++frequencia1;
 break;
 case 2:
 ++frequencia2;
 break;
 case 3:
 ++frequencia3;
 break;
 case 4:
 ++frequencia4;
 break;
 case 5:
 ++frequencia5;
 break;
 case 6:
 ++frequencia6;
 break;
}

}
printf("1) %13d\n", frequencia1);
printf("2) %13d\n", frequencia2);
printf("3) %13d\n", frequencia3);
printf("4) %13d\n", frequencia4);
printf("5) %13d\n", frequencia5);
printf("6) %13d\n", frequencia6);
*/
/* Randomizando o programa de lançamento de um dado */

/* int i;
 unsigned semente;
 printf("Entre com a semente: ");
 scanf(" %u", &semente);
 srand(semente);
 for (i = 1; i <= 10; i++){
 printf ("%10d", 1 + (rand() % 6));
 if (i % 5 == 0)
 printf("\n");
 }*/

 /* Craps */

 int rollDice(void);//prototipo da função aleatorio
 int gameStatus, sum, myPoint;

srand(time(NULL));
sum = rollDice(); /* primeira jogada dos dados */
 switch(sum) {
 case 7:
 case 11: /* vence na primeira jogada */
 gameStatus = 1;
 break;
 case 2:
 case 3:
 case 12: /* perde na primeira jogada */
 gameStatus = 2;
 break;
 default: /* armazena o ponto */
 gameStatus = 0;

 myPoint = sum;
 printf("O ponto e %d\n", myPoint);
 break;
 }
 while (gameStatus == 0) { /* continua jogando */
 sum = rollDice();
 if(sum == myPoint) /* vence fazendo o ponto */
 gameStatus = 1;
 else
 if(sum == 7) /* perde obtendo o valor 7 */
 gameStatus = 2;
 }
 if(gameStatus == 1)
 printf("Jogador vence\n") ;
 else
 printf("Jogador perde\n");
 return 0;
 }
 int rollDice(void) {
 int die1, die2, workSum;
 die1 = 1 + (rand() % 6);
 die2 = 1 + (rand() % 6);
 workSum = die1 + die2;
 printf("Jogador obteve %d + %d = %d\n", die1, die2, workSum);
 return workSum;
 }

