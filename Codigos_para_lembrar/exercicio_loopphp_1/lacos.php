<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_css/estil.css">
    
    <title>Livro_PHP na pratica 2014 julia</title>
</head>
<body>
<h1> Laços de repetição Exercicios pg 12 ..... </h1>
    <div id="tudo">
        <?php
     for ($i=1; $i<=5; $i++){
          echo $i." ";
      }
      echo "<br/>";

      $i=2;
      while($i<=10){
        echo$i." ";
        $i+=2;
      }

      echo "<br/>";
      $i=1;
      do{
        echo$i." ";
        $i+=2;
      } while($i<=10);
      
      echo "<br/>";
      echo "*****************************************";
      echo "<br/>";
      $a=true;
      $b=-2;
      $c=7;
      for (;$b<$c || $a; $b++){
          if($c+$b*2>20){
              $a=false;
            }
        echo $b." ";

    }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
      echo "*****************************************";
      echo "<br/>";
      $a=true;
      $b=-2;
      $c=6;
      for (;$b<$c || $a; $b++){
          if($c+$b*2>20){
              $a=false;
            }
        echo $b." ";

    }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
$num=5;
$res=1;
do{
    $res*=$num--; //$res=$res*($num-1)
}while($num>1);
echo $res;

    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
$num=4;
$res=1;
do{
    $res*=$num--; //$res=$res*($num-1)
}while($num>1);
echo $res;

    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";

$a=0;
while(++$a<=5){
    for($i=1;$i<=$a; $i++){
        echo $i." ";
    }
    echo "<br/>";
};


    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";

// Exercícios 19 -38 pg 12-17
// Exercício 19 - Exibir número entre 01 e 20
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
        for($i=1; $i<=20; $i++){
            echo $i." ";
        }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 20 - Exibir número entre -10 e 10
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
        for($i=-10; $i<=10; $i++){
            echo $i." ";
        }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 21 - - Exibir número entre -15 e -5
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
        for($i=-15; $i<=-5; $i++){
            echo $i." ";
        }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 22 - Exibir número entre 0 e -30
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    for($i=0; $i>=-30; $i--){
        echo $i." ";
    }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 23 - Exibir número impares entre 100 e 200
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    for($i=100; $i<=200; $i++){
        if($i%2!=0){
        echo $i." ";
        }
    }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 24 - Exibir número pares entre 349 e 401
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    for($i=349; $i<=401; $i++){
        if($i%2==0){
        echo $i." ";
        }
    }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 25 - exibir 1 -2 3 -4 5 -6
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    for($i=1; $i<=6; $i++){
        if($i%2!=0){
        echo $i." ";
        }else{
            echo "-".$i." ";
        }
    }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
     // Exercício 25 - exibir 1 -2 3 -4 5 -6
     echo "<br/>";
     echo "*****************************************";
     echo "<br/>";
     for($i=1; $i<=6; $i++){
         if($i%2==0){
         echo (-$i)." ";
         }else{
             echo $i." ";
         }
     }
     echo "<br/>";
     echo "*****************************************";
     echo "<br/>";
    // Exercício 26 - sorteio de nº entre 1 e 30 e verificar se é primo.
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    $num=rand(1, 30);
    echo $num;
    $primo=true;
    if($num==1){
        $primo=false;
    }
    echo "<br/>";
    for($i=2; $i<($num/2); $i++){   
        if($num%$i==0){
            $primo=false;
    } 
    }  
    if($primo){
       echo  $num." é primo.";
    }else{
        echo $num. " Não é primo.";
    }
      
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 27 - sorteio de número e exibição em sequancia.
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    $n1=rand(1, 15);
    $n2=$n1*2;
    echo "<br/>";
    echo $n1;
    echo "<br/>";
    echo $n2;
    echo "<br/>";
    for($i=$n1; $i<= $n2; $i++){
        echo $i." ";

    }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 28 - número sorteado ate número divisível por 7
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    $n1=rand(1, 15);
    $n2=$n1*3;
    echo "<br/>";
    echo $n1;
    echo "<br/>";
    echo $n2;
    echo "<br/>";
    $i=$n1;
    while($i<=$n2  xor $i%7==0){
        echo $i." ";
        $i++;
    }

    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";


    // Exercício 30 - soma de número
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    $n1=rand(1, 15);
    $n2=rand(15, 25);
    echo "<br/>";
    echo $n1;
    echo "<br/>";
    echo $n2;
    echo "<br/>";
    $soma=0;
   for($i=$n1; $i<=$n2; $i++){
   $soma=$soma+$i;
   }
    echo $soma;
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
   

    // Exercício 31 - Média de uma soma de sequencia
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    $soma=0;
    $quantidade=0;
    for($i=13; $i<=73; $i++){
        $soma+=$i;
        $quantidade++;
        echo $i." ";
    }
    $media=$soma/$quantidade;
    echo "<br>";

    echo $soma."  ".$quantidade."  ".$media;

    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";

     
    // Exercício 32- plim
        echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    
    for($i=13; $i<=73; $i++){
       if($i%4==0){
        echo "plim,  ";
        }else{
            echo $i.", ";
        }
    }
    for($i=13; $i<=73; $i++){
        if($i%4==2){
         echo "ping,  ";
         }else if($i%2==0){
            echo "Pong,  ";
         }else{
             echo $i.", ";
         }
     }
       echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
   
    // Exercício 35 - alfabeto
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    for($i="A"; $i<"Z"; $i++){
       if($i=="A" || $i=="E" || $i=="I" || $i=="O" || $i=="U" ){
         echo "<font color='red'>$i</font>";
    }else{
        echo "<font color='green'>$i</font>";
    }}
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
     

    // Exercício 36 - texto com quebra de linha
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    $texto= "Eu gosto de aprender a programar na linguagem PHP";
    $tamanho = strlen($texto);
    for( $c=0;$c<$tamanho;$c+=10){
        echo substr($texto, $c, 10);
    }
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";

    
    // Exercício 37 - tabuada
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo"<table border='1px'>";
    echo "<tr>";
    echo "<th>*</th>";
    for($linha=0; $linha<10; $linha++){
        echo "<th>.$linha.</th>";
    }
    echo "</tr>";
    for($linha=0; $linha<10; $linha++){
        echo "<tr>";
        echo "<th>.$linha.</th>";
        for($coluna=0; $coluna<10; $coluna++){
            echo "<td>".($linha*$coluna)."</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    
    // Exercício 38- erro no código
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    $a=0;
    while($a++<6){
        for($i=1; $i<=$a; $i++){ //<
           // if($i%2=1)  erro =
                echo $i." ";
            
        }
        echo "<br/>"; // erro "<br>"
    }
       
    

       ?>


       </div>
    
</body>
</html>