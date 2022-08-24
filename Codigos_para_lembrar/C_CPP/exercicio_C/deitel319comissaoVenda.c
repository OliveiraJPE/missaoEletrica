#include <stdio.h>
#include <stdlib.h>


// Receber vendas e calcular salario de vendedor

void main(){

double  salVendedor, percVendas, novoSaldo[10];
char s='1', c='1';
int i=1, vendedor[10];
salVendedor=200.00;
percVendas=0.09;
	while(s!='s' && s!='S')
	{
		printf("\n");
		printf("Digite s para sair ou c para continuar.>>>\t\t");
		scanf(" %c", &c);

		s=c;

		if(c=='c')
		{
			printf("\nDigite a matricula do vendedor (0%d) sem digito >>>>>  ",i);
			scanf(" %d",&vendedor[i]);

			printf("\nEntre com o total de vendas  do Vendedor (0%d)  >>>>> R$ ", vendedor[i]);
			scanf(" %lf",&novoSaldo[i]);
			

			salVendedor+=novoSaldo[i]*percVendas;
			printf("\n\n");
			
			printf("\nSalario do Vendedor (0%d)  >>> %.2f.",vendedor[i], salVendedor);
		}
			i++;
	}
	
	printf("\n\n");
	printf("\n\n");
return 0;
}
