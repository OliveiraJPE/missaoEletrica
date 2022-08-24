#include <stdio.h>
#include <stdlib.h>


// Controle de limuite de credito em conta

void main(){

double saldoIni[10], totCobrados[10], totCreditos[10], limiteCred[10], novoSaldo[10];
char s='1', c='1';
int i=1, numConta[10];


	while(s!='s' && s!='S')
	{
		printf("\n");
		printf("Digite s para sair ou c para continuar.>>>\t\t");
		scanf(" %c", &c);

		s=c;

		if(c=='c')
		{
			printf("\nDigite o numero da conta (0%d) sem digito >>>>>  ",i);
			scanf(" %d",&numConta[i]);

			printf("\nEntre com o Saldo Inicial da conta (0%d)  >>>>> R$ ",numConta[i]);
			scanf(" %lf",&saldoIni[i]);

			printf("\nEntre com o total de cobranças  da conta (0%d)  >>>>> R$ ", numConta[i]);
			scanf(" %lf",&totCobrados[i]);

			printf("\nEntre com o total de creditos  da conta (0%d) >>>>> R$ ",numConta[i]);
			scanf(" %lf",&totCreditos[i]);

			printf("\nEntre com o Limite de credito  da conta (0%d) >>>>> R$ ",numConta[i]);
			scanf(" %lf",&limiteCred[i]);

			novoSaldo[i]=saldoIni[i]+totCobrados[i]-totCreditos[i];
	
			printf("\nA Conta %d, possui novo saldo de %.2lf e Limite de credito de %.2lf." ,numConta[i], novoSaldo[i], limiteCred[i]);
			printf("\n\n");
			
			if(novoSaldo[i]>limiteCred[i]){
				printf("\nSaldo >>> %.2lf. LIMITE DE CREDITO EXCEDIDO!!!", novoSaldo[i]);
			}
			i++;
		}
	}
	printf("\n\n");
	printf("\n\n");
return 0;
}
