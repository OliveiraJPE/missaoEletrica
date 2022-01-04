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
        
      $ini=isset($_GET["num1"])?$_GET["num1"]:0;
      $f=isset($_GET["num2"])?$_GET["num2"]:0;
      $inc=isset($_GET["num3"])?$_GET["num3"]:0;
      if($ini<$f){
        for($i=$ini; $i<=$f; $i+=$inc){echo $i.",  ";}
      }
      else{
        for($i=$ini; $i>=$f; $i-=$inc){echo $i.",  ";}
      }
 
         
    
      ?>
      
      
   
        

     

        <br/>
       <a href="index.php">voltar<a>
        <br/>


       </div>
    
</body>
</html>