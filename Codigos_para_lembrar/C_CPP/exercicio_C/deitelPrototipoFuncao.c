/* Um exemplo de escopos */
 #include <stdio.h>
 void a(void); /* protótipo de funcao */
 void b(void); /* protótipo de funcao */
 void c(void); /* protótipo de funcao */
 int x = 1; /* variável global */
 main() {
 int x = 5; /* variável local para main */
 printf("x local no escopo externo de main e %d\n", x) ;
  { /* inicia novo escopo */
 int x = 7;
 printf("x local no escopo interno de main e %d\n", x) ;
 } /* encerra novo escopo */
 printf("x local no escopo externo de main e %d\n", x) ;
 a(); /* a tem x local automático */
 b(); /* b tem x local estático */
 c(); /* c usa x global */
 a(); /* a reinicializa x local automático */
 b(); /* x local estático conserva seu valor anterior */
 c(); /* x global também conserva seu valor */
 printf("x local em main e %d\n", x);

 return 0;
 }
 void a(void) {
 int x = 25; /* inicializada sempre que a e chamada */
 printf("\nx local em a e %d depois de entrar em a\n", x);
 ++x;
 printf("x local em a e %d antes de sair de a\n", x);
 }
 void b(void) {
 static int x = 50; /* apenas inicialização estática */
 /* primeira vez que b e chamada */
 printf("\nx local estático e %d ao entrar em b\n", x);
 ++x;
 printf("x local estático e %d ao sair de b\n", x);
 }
 void c(void) {
 printf("\nx global e %d ao entrar em c\n", x);
 x *= 10;
 printf("x global e %d ao sair de c\n", x);
 }
