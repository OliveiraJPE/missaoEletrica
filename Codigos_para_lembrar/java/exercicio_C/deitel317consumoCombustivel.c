#include <stdio.h>
#include <stdlib.h>

void main(){

float km, lt, med, medt, totkm, totlt;
char s='1', c='1';
int i=1;
		km=lt=med=medt=totkm=totlt=0.0;


	while(s!='s' && s!='S')
	{
		printf("\n");
		printf("Digite s para sair ou c para continuar.>>>\t\t");
		scanf(" %c", &c);
		s=c;
		if(c=='c')
		{
			printf("\nDigite a quilometragem do veiculo %d \t\t>>>  ",i);
			scanf(" %f",&km);
			printf("\nDigite a litragem abastecida do veiculo %d \t\t>>>  ",i);
			scanf(" %f",&lt);
		

			totkm+=km;
			totlt+=lt;
			med=km/lt;
 			medt=totkm/totlt;
			//medt=med/i;
			printf("\n\n");
			printf("\nConsolidado de km/l para veiculo %d  >>>>>  %f.", i, med);
	i++;
		}
	}
	printf("\n\n");
	printf("\nO consolidado de km/l e >>>>>   %.2f.  ", medt);
	//printf("\nA media final por veiculo:  km/l e >>>>>   %.2f.  ", medt);

printf("\n\n");
return 0;
}
