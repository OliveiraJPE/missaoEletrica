public class arranjos{
	public static void main(String[]args){
		double media = 0;
		int precos[]={1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
		int precos2[]= new int[10]; // criar novo arranjo com 10 elementos;

		for(int i=0;i<precos.length;i++){
//   .length guarda o comprimento o número de elementos do arranjo.
			media+=precos[i];

		}
	media=media/precos.length;
	System.out.println(media);	

System.out.println("\n\n");


// Existe uma segunda opção para p laço for em Java. Utilizando o tipo da variavel de controle criada no for e chamendo o tamanho do arranjo.

media= 0;
		for(double valor:precos){
//Media agora recebe a variavel valor + media em cada iteração.
			media+=valor;

		}
	media=media/precos.length;
	System.out.println(media);
System.out.println("\n\n");

// copiar um arranjo para outro.

//ERRADO: caso posteriormente mude um elemento de precos mudará em precos2, todas as vezes, pois o que é copiado é o endereço e não o valor.
	
	precos2=precos;

		for(double val1:precos){
			System.out.printf(val1+", ");


		}
System.out.println("\n\n");
		for(double val2:precos2){
			System.out.printf(val2+", ");

		}
System.out.println("\n\n");

//CERTO	

	for(int i=0; i<precos.length; i++)
			precos2[i]=precos[i];
		for(double val1:precos){
			System.out.printf(val1+", ");

		}
System.out.println("\n\n");
		for(double val2:precos2){
			System.out.printf(val2+", ");

		}
System.out.println("\n\n");
	}
}