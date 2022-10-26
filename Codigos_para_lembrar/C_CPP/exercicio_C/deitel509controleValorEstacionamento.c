#include <stdio.h>
#include <stdlib.h>
#include <math.h>


// cobranca de estacionamento
// taxamin=2.00 at� 3h, fracaoh=0.50, taxamax=10.00 - 24h

float calc(float);
float tempo(float, float, float, float, float, float);


void main(){

char s, e, x , c, z;
int i=0,j=0,k=0, f=0, m=0, h=0;
float diaent[10], horaent[10], minent[10], diasaida[10], horasaida[10], minsaida[10], clienteE[10], clienteS[10], valorret[10];

for(j=0; j<10; j++){

    diaent[j]=horaent[j]=minent[j]=diasaida[j]=horasaida[j]=minsaida[j]=clienteE[j]=clienteS[j]=valorret[j]=0.0;

}
	while(x!='x'&& x!='X')
	{

		printf("\n");
		printf("Digite 'x' para sair, ou 'z' para mostrar tabela, ou 'e' para veiculo que entra, ou 's' para veiculo que sai, ou 'c' para calcular valor.>>>\t\t");
		scanf(" %c", &x);

		e=s=c=z=x;

		if(e=='e'|| e=='E')
		{
			printf("\nDigite a ordem do carro >>>>>  ");
			scanf(" %d",&i);
			printf("\nDigite os numeros da placa do carro do cliente %d>>>>>  ",i);
			scanf(" %f", &clienteE[i]);

			printf("\nEntre com entrada para %f:  \n", clienteE[i]);
			printf("\nDia:    ");
			scanf(" %f", &diaent[i]);
			printf("\nHora:    ");
			scanf(" %f", &horaent[i]);
			printf("\nMinutos:    ");
			scanf(" %f", &minent[i]);
		}
       if(s=='s'|| s=='S')
		{
			printf("\nDigite a ordem do carro >>>>>  ");
			scanf(" %d",&f);
			printf("\nDigite os numeros da placa do carro do cliente %d>>>>>  ",f);
			scanf(" %f", &clienteS[f]);

			printf("\nEntre com saida para %f:  \n", clienteS[f]);
			printf("\nDia:    ");
			scanf(" %f", &diasaida[f]);
			printf("\nHora:    ");
			scanf(" %f", &horasaida[f]);
			printf("\nMinutos:    ");
			scanf(" %f", &minsaida[f]);

        }

         if(c=='c'|| c=='C')
		{
			printf("\nDigite a ordem do carro >>>>>  ", m);
			scanf(" %d",&m);

        if(clienteE[m] == clienteS[m]){

        printf("Confira se numero do cliente entrada %.0f e igua al cliente de saida %.0f. ", clienteE[m], clienteS[m]);
        printf("Depois pressione 'Enter' para continuar ou reiniciar.");
        getch();
                //m=f=i;
        printf("\n\n");

                valorret[m]=calc(tempo(diaent[m], horaent[m], minent[m], diasaida[m], horasaida[m], minsaida[m]));
                printf("<<<   Ordem   Placa   Entrada-hora:min   Saida-hora:min   Valor   >>>");
                printf("\n<<<   %d   %8.2f   %8.0f:%.0f   %8.0f:%.0f   %12.2f   >>>\n", k, clienteE[m],horaent[m], minent[m], horasaida[m], minsaida[m], valorret[m] );
                printf("\n\n");

                }else{
                    printf("\nNão existe entrada com esta placa!\n");
                    printf("\nPressione enter para continuar.\n");
                    x=1;
                    getch();
                }
                printf("\n\n");

		}
		if(z=='z'|| z=='z'){
                printf("<<<   Ordem   Placa   Entrada-hora:min   Saida-hora:min   Valor   >>>");
                for(k=0; k<10; k++){
                printf("\n<<<   %d   %8.2f   %8.0f:%.0f   %8.0f:%.0f   %12.2f   >>>\n", k, clienteE[k],horaent[k], minent[k], horasaida[k], minsaida[k], valorret[k] );
                }
		}
			i++;
	}
	printf("\n\n");
	printf("\n\n");

return 0;
}
float tempo(float diaE, float horaE, float minE, float diaS, float horaS, float minS){
    float convhE;
    float convhS;
    float min;
    float hora;

    if (diaE == diaS)
    {
        convhE=(horaE*60)+minE;
        convhS=(horaS*60)+minS;
        min= convhS-convhE;

    }else
    {
    min=(((24.00-(horaE+1))*60)+(60-minE))+(horaS*60+minS);
    //hora=min/60;
    }
     return min;
}

float calc(float valor){

float calculo, calculo2;
float horagemint, horagemfrac, horagem;
float minutagem, valor2;

valor2=valor -180;
printf("Valor = %f", valor);
    horagem=valor/60;
    horagemint=(int)horagem;
    horagemfrac= horagemint-horagem;

    if(valor<=180)
    {
        calculo=5.0;
    }else if(valor>180)
    {
        calculo2=5;
         while(valor2>0)
        {
                calculo2+=2;
                valor2-=60;
        }
        if(calculo2>=20)
        {
        calculo=20;
        }else if(calculo2<20 && calculo2>5){
        calculo=calculo2;
        }
    }
return calculo;
}
