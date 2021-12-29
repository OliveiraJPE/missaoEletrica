<!DOCTYPE html>
<html lang="pt-br">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <title>Form Guanabara</title>
    
</head>
<body>
<h1> Formulários: Cores </h1>
    <div id="tudo">

  <?php
      /*$valor=isset($_GET["val"])?$_GET["val"]:0;
      $i=$valor;
      $fat=1;
      do{
       $fat=$fat*$i;
        $i--;
      }while($i>=1);
      echo "Fatorial de $valor! é $fat";*/
      $i=1;
      $valor=isset($_GET["val"])?$_GET["val"]:0;
      Echo " A Tabuada de $valor é: <br/> ";
      do{    
        echo $valor. " x ".$i." = ". ($valor*$i)." <br/>";
         $i++;
       }while($i<=10);
       
      
  ?>
    
      
   
        

     

        <br/>
       <a href="index.php">voltar<a>
        <br/>


       </div>
    
</body>
</html>