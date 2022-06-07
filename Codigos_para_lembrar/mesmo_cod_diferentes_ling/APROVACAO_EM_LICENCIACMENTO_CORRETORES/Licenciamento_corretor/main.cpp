#include <iostream>

using namespace std;

int main()
{
/*"aprovacao_em_Licenciacmento_corretores"
CONTADOR
Pedro Ernesto 16/5/2022
Repetir em VisualG, PortugolStudio, C, c++, Python, JS e PHP.
*/
//pular linha << endl; cout - imprimir; cin - leia.

   		int contador, res, aprovados, reprovados, totAlunos;
		float per;
		per=0;
		contador=1;
		aprovados=0;
		reprovados=0;

		cout<<"Digite o Número de alunos a serem avaliados: ";
		cin>>totAlunos;

		while(contador<=10){
			cout<<"\n\nDigite 1 -Para aprovado e 2 -para reprovado:  ";
            cin>>res;

			if(res!=1 && res!=2)
			{
				cout<<"\n\nValor incorreto. Insira 1 - para Aprovado e 2 para Reprovado!";
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
		cout<<"Total de aprovados= ";
		cout<<aprovados<< endl;

		cout<<"Total de reprovados= ";
		cout<<reprovados<< endl;

		per=((float)aprovados/(float)totAlunos)*100;

		cout<<"O percentual de aprovados e: ";
		cout<< per<< endl;;

		if(per>=80)
		{
			cout<<"\n\nCobrar taxa escolar!\n\n"<< endl;
		}else{
			cout<<"\n\nNão cobrar taxa escolar!\n\n"<< endl;
		}


    return 0;
}
