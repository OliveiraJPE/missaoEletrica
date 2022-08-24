#include <stdio.h>
#include <stdlib.h>
//#include <ctype.h> //para habilitar getchar.() não funciona da segunda vez
#include <conio.h> // habilita getche() para avancar sem apertar enter


//Calculadora
int main()
{
    float num1, num2, res;
     char op='0';

    do{

        num1=num2=res=0;//resetar variáveis.
        printf(" Escolha uma das Operacoes abaixo:\n");
        printf(" (0) Para Sair\n");
        printf(" (1) Para Somar\n");
        printf(" (2) Para Subtrair\n");
        printf(" (3) Para Multiplicar \n");
        printf(" (4) Para Dividir\n");
            printf("\n\n");
            printf("\t\t\t Digite o valor da operacao  >>>>  ");
            op=getche();
            //op=getchar();
            printf("\n\n");

        if(op!='0'){
        printf("\nDigite o primeiro numero:  ");
        printf("\t\t\t >>>>  ");
        scanf(" %f", &num1);
        printf("\nDigite o segundo numero:   ");
        printf("\t\t\t >>>>  ");
        scanf(" %f", &num2);


        switch (op){
        case '1':
            res=num1+num2;
        break;
        case '2':
            res=num1-num2;
        break;
        case '3':
            res=num1*num2;
        break;
        case '4':
            if(num2!=0)
            {
                res=num1/num2;
            }
            else
            {
                printf("Valor do segundo numero e invalido para operacao de divisao\n\n");
            }
        break;
        default:
            printf(" Opção inválida!!!\n\n");
        break;
        }
            printf("O resultado para operacao %c e: %.2f\n\n", op, res);

        }
        //system("pause");// Imprime msg solicitando que pressione tecla para continuar.
        //OU use getch()

        printf("Pressione uma tecla qualquer Pássaro: ");
        getch();

        system("cls");//limpa tela
    }while(op!='0');

            printf("Fim do Programa\n\n");
    return 0;
}
