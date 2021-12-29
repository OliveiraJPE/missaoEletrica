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
<h1> Laços de repetição Exercicios pg 12 </h1>
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
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    // Exercício 19
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";

       ?>


       </div>
    
</body>
</html>