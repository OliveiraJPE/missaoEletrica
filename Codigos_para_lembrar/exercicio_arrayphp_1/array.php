<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    
    <title>Livro_PHP na pratica 2014 julia</title>
</head>
<body>
<h1> Array</h1>
    <div id="tudo">
<?php
     echo "Criando arquivos";
     echo "<br/>"; 
     echo "<br/>";    
     echo "Criando arquivos 1 - Sr=array(9, 1, 4, 6, 7).";
     echo "<br/>";
     echo "<br/>";
     $r=array(9, 1, 4, 6, 7);
     print_r($r);
     echo "<br/>";
     echo "O print_r() mostra os elementos do vetor é usado somente nos teste";
     echo "<br/>";
     echo "<br/>";
     echo "Criando arquivos 1 - Sw=range(5,20,2);//cria vetor de 5 ate 20 de 2 em 2.";
     echo "<br/>";
     echo "<br/>";
     $w=range(5,20,2);//cria vetor de 5 ate 20 de 2 em 2.
     print_r($w);
     echo "<br/>";
     echo "<br/>";
     echo "Criando arquivos 1 - Sq=[9, 1, 4, 6, 7]";
     echo "<br/>";
     echo "<br/>";
     $q=[9, 1, 4, 6, 7];
     print_r($r);
     echo "<br/>";
     echo "<br/>";
     echo "Criando arquivos 1 - Se[1]=4; Se[3]=2;";
     echo "<br/>";
     echo "<br/>";
     $e[1]=4;
     $e[3]=2;
     print_r($e);
     echo "<br/>";
     echo "<br/>";
     echo "Criando arquivos 1 - Se[]='t'; //cria no final de vetor existente";
     echo "<br/>";
     echo "<br/>";
     $e[]="t"; //cria no final de vetor existente
     print_r($e);
     echo "<br/>";
     echo "<br/>";
     echo "Criando arquivos 1 - St=array(1=>'a',7=>6, 2=>2, 9=>'a1'); //cria vetor personalizado";
     echo "<br/>";
     echo "<br/>";
     $t=array(1=>"a",7=>6, 2=>2, 9=>"a1"); //cria vetor personalizado
     print_r($t); 
     echo "<br/>"; 
     echo "<br/>";
     echo " unset(St[9]); //retira elemento do vetor";
     echo "<br/>";
     echo "<br/>";
     unset($t[9]); //retira elemento do vetor
     print_r($t); 
     echo "<br/>";
     echo "<br/>"; 
     echo "Criando arquivos string - Sy=array('nome'=>'Ana','idade'=>16, 'peso'=>62.5, 9=>'a1')";
     echo "<br/>";
     echo "<br/>";
     $y=array("nome"=>"Ana","idade"=>16, "peso"=>62.5, 9=>"a1");
     print_r($y); //vetores com nomes em string
     echo "<br/>"; 
     echo "<br/>"; 

?>
<pre>

<?php

echo "<b>//foreach com números</b>";
echo "<br/>";
echo "<br/>";
$w=range(5,20,2);
echo"Sw=range(5,20,2) //cria vetor de 5 ate 20 de 2 em 2.";
echo "<br/>";
echo "foreach(Sw as Ss){ echo Ss;}// (para cada elemento Sw coloca e, Ss)";
echo "<br/>";
echo "<br/>";
echo "<tr>";
     foreach($w as $s){    // (para cada elemento $w coloca e, $s)
       echo" ".$s."";       
     }
;   
     echo "<br/>";
     echo "<br/>";
     echo "<br/>";

     echo "<b>//forech buscando em vetores com indiices ou chaves string:<br/>Su=array('nome'=>'Ana','idade'=>16, 'peso'=>62.5, 9=>'a1');.</br> foreach(Su as Scampo=>valor){  echo 'O valor de Scampo é Svalor'}<br/>";
$u=array("nome"=>"Ana","idade"=>16, "peso"=>62.5, 9=>"a1");    
echo "<br/>"; 
echo "<br/>";    
    foreach($u as $campo=>$valor){  
        echo "O valor de $campo é $valor<br/>";
    }
echo "";
        echo "<br/>";
?>
</pre>

<pre><!--mostra linha por linha.-->  

<?php
 echo "Criando arquivos 1 - Sr=array(9, 1, 4, 6, 7) dentro das tag pre</pre.";
 echo "<br/>";
 echo "<br/>";
     print_r($r);
     echo "<br/>";
     //sort($r);// ordena crescente o array
     //print_r($r);
     //arsort($r);//ordena decrescente
     //print_r($r);
     //asort($r); //ordena os mantendo a relação entre o indice originallocalhost
     
     //print_r($r);
     //ksort($r); //ordena os indice de 0 em diante.
     //print_r($r);
?>
</pre>

   <?php 
   echo "// Matrizes multidimensionais  - vetores dentro de vetores<br/><br/>";
   echo" //Referenciando em matriz<br/><br/>";
   echo"Si=array(array(5,20), array(2,4), array(56,10))<br/><br/>";
echo "<pre>";
   $i=array(array(5,20), array(2,4), array(56,10));
   print_r($i);
           //foreach($i as $campo=>$valor){    // (para cada elemento $w coloca e, $s)
          // echo"O valor de $campo é $valor  ";
          
       // }  
echo "</pre>";
   
   ?>
   
   </div>
   </body>
   </html>