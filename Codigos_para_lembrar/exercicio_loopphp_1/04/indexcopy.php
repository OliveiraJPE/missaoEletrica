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
      $valor=isset($_GET["val"])?$_GET["val"]:0;
      $primo=0;
      // echo "O nímero $valor é divisível por ";
      for($i=1; $i<=$valor; $i++){
       $res=$valor%$i;
        if($res==0){
          $primo++;
          $v=$i;
        }
       // echo $v.",  ";
      } 
      if($primo<=2){
        // echo ". Logo, o";
        echo " Número $valor é divisível por $primo número(s). Sendo assim, ele é primo.";
      }else{
        echo " Número $valor é divisível por $primo número(s). Sendo assim, ele não é primo.";
      }
           
      ?>
      <br/>
       <a href="index.php">voltar<a>
  </div>
    
</body>
</html>