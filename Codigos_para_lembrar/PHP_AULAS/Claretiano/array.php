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
<h1> Array</h1>
    <div id="tudo">
    <?php
     // busca em arrays
     $r=array(9, 1, 4, 6, 7);

     foreach($r as $s){    
     print_r($s);
     }
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
    
 
     echo "<br/>";


     
   ?>
   
   
   </div>
   </body>
   </html>