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
      $i=1;
      while($i<=5){
        $v="num".$i;
        $url="v".$i;
        $$v=isset($_GET[$url])?$_GET[$url]:0;
        $i++;
      }
      echo "<br/> $num1, $num2, $num3, $num4, $num5,";
      $i=1;
      while($i<=5){
        $v="num".$i;
        echo "<br/> O valor $i: ". $$v. "<br/>";
        $i++;
      }
      ?>

        <br/>
       <a href="index.php">voltar<a>
        <br/>


       </div>
    
</body>
</html>