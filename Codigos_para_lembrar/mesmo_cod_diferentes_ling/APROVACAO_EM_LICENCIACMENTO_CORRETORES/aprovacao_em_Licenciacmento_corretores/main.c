#include <stdio.h>
#include <stdlib.h>

/*"aprovacao_em_Licenciacmento_corretores"
CONTADOR
Pedro Ernesto 16/5/2022
Repetir em VisualG, PortugolStudio, C, c++, Python, JS e PHP.
*/


int main(){
   		int contador, res, aprovados, reprovados, totAlunos;
		float per;
		per=0;
		contador=1;
		aprovados=0;
		reprovados=0;

		printf("\nDigite o Número de alunos a serem avaliados: ");
		scanf(" %d", &totAlunos);

		while(contador<=10){
			printf("\n\nDigite 1 -Para aprovado e 2 -para reprovado:  ");
			scanf(" %d", &res);

			if(res!=1 && res!=2)
			{
				printf("\n\nValor incorreto. Insira 1 - para Aprovado e 2 para Reprovado!");
			}else{
				if(res==1)
				{
					aprovados+=1;
				}else{
					reprovados+=1;
				}
				 contador++;
            }
		}
		printf("\n\nTotal de aprovados=  %d ", aprovados);

		printf("\n\n\nTotal de reprovados=  %d ", reprovados);

		per=((float)aprovados/(float)totAlunos)*100;

		printf("\n\nO percentual de aprovados e: %4.2f ", per);

		if(per>=80)
		{
			printf("\n\nCobrar taxa escolar!\n\n");
		}else{
			printf("\n\nNão cobrar taxa escolar!\n\n");
		}


    return 0;
}
