<!DOCTYPE html>
<html lang="pt-br">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <title>Rotinas Guanabara</title>
    
</head>
<body>
<h1>FUNCTIONS</h1>
    <div id="tudo">
       
    <?php  
    // passagem por valor - passa o valor de $s
    function teste($x){
      $x=$x+2;
      echo $x. "<br/>";
     }
     $a=3;
     teste($a);
     echo $a. "<br/>";

      // passagem por referencia (&$x) - passa a referencia de $a
    function teste1(&$x){
        $x=$x+2;
        echo $x. "<br/>";
       }
       $a=3;
       teste1($a);
       echo $a;
       
     ?>
   
        </div>
    
</body>
</html>