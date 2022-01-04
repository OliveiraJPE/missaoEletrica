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
<h1> Exercicios 11, 12,     pg 10 </h1>
    <div id="tudo">
        <?php
       $menino="Marcio";
       $menina="Maria";
       $idmarcio=$_GET["a"];
       $idmaria=$_GET["b"];

       if($idmarcio<$idmaria){
            echo "Maria tem $idmaria, logo é mais velha do que Marcio que tem $idmarcio.";
       }elseif($idmarcio>$idmaria){
            echo "Maria tem $idmaria, logo é mais nova do que Marcio que tem $idmarcio.";
       }else{
        echo "Maria tem $idmaria, logo tem a mesma idade de Marcio que também tem $idmarcio.";
       }
       echo "<br/>";
       $sist=date('H');
       echo $sist;
       echo "<br/>";
       $hora=rand(0, 23); // número rondonico
       echo $hora;
       echo "<br/>";
       switch($sist&&$hora){
           case ($sist>$hora);
           echo "seu relógio está atrasado";
           break;
           case ($sist<$hora);
           echo "seu relógio está adiantado";
           break;
           case ($sist==$hora);
           echo "seu relógio está certo";
           break;
       }
      
       ?>


       </div>
    
</body>
</html>