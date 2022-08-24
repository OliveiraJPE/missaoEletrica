#include <stdio.h>
#include <stdlib.h>

void main(){
/*float calculo;
float horagemint, horagemfrac, horagem;
float minutagem;
float valor = 200.00;

    horagem=valor/60;
    horagemint=(int)horagem;
    horagemfrac= horagemint-horagem;

    calculo=(float)(horagemint*2);


    if(calculo<10 && horagemfrac!=0){
        calculo=calculo+0.50;
    }else if(calculo>=10){
        calculo =10.00;
    }


    //calculo=(float)((((int)(valor/60))*2.0)+ (((valor/60)-((int)(valor/60)))*0.50));

    printf(" %.4f------%.4f-------%.4f", horagem, horagemint, horagemfrac);
    printf(" %.4f", calculo);*/
float diaE,horaE, minE, diaS, horaS, minS;
    float convhE;
    float convhS;
    float min;
    float hora;

    diaE=1.0;
    diaS=2.0;
    horaE=20.0;
    horaS=1.0;
    minE=30.0;
    minS=0.0;

    if (diaE == diaS)
    {
        convhE=(horaE*60)+minE;
        convhS=(horaS*60)+minS;
        min= convhS-convhE;
        hora=min/60;

    }else
    {
    min=(((24.00-(horaE+1))*60)+(60-minE))+(horaS*60+minS);
    hora=min/60;
    }

    printf("hora %f", min);
     //return hora;

return 0;
}
