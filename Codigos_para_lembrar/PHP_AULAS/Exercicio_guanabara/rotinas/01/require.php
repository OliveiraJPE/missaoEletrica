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
<h1>require</h1>
    <div id="tudo">
       
    <?php  
  //include "funcaoinclude2.php"; //inseri erro arquivo inexistente. Include tenta fazer o que ainda dá gastando memória.
  //include-once "funcaoinclude2.php"; // se já existir carregamento para include ele não carrega de novo, senão, carregra.
  
  //require "funcaoinclude2.php"; //inseri erro arquivo inexistente.  require para tudo.
   // require-once "funcaoinclude2.php"; // se já existir carregamento para include ele não carrega de novo, senão, carregra.
  
   require "funcaoinclude.php";
  
  ola();

   
   mostravalor(3);

   $res=calculo(4, 5, 6);
   echo $res;

  // require "index1.php";
  // $reso=somando(4,5,6,12);
   //     echo "<br/> resultado retornado de multiplos valores é $reso";
    

     ?>
   
        </div>
    
</body>
</html>