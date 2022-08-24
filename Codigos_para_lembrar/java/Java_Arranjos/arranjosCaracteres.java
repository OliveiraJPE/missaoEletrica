public class arranjosCaracteres{
static char[] nAlvenaria={'A', 'L', 'V', 'E', 'N', 'A', 'R', 'I', 'A'};
	public static void main(String[]args){
		char c = 'a';
		
		int y=100;
		if(c=='a')
			System.out.printf("\nImpressão da letra: " , c);
			System.out.printf("Impressão de letra recebida  por ASCII 100: " +(char)y);
			System.out.println("\n");
		for(int i=32; i<126; i++)
			System.out.println(i+ " : " +(char)i);

		System.out.println("\n");
		
		for(char i=32; i<126; i++)
			System.out.println(i+" : " +i);

		System.out.println("\n");
		System.out.println(nAlvenaria);

	nAlvenaria[0]='o';
		
		System.out.println("\n");
		System.out.println(nAlvenaria);

// char guarda tambem inteiros logo 2 é diferente de '2'.
	}
}