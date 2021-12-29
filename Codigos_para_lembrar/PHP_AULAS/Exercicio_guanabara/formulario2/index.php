<!DOCTYPE html>
<html lang="pt-br">
<head>
<?php
    $texto=isset($_GET["txt"])?$_GET["txt"]:"Texto não informado!";
    $tam=isset($_GET["tam1"])?$_GET["tam1"]:"10pt";
    $cor=isset($_GET["cor"])?$_GET["cor"]:"#ffffff";    
?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_css/estil.css">
    <title>Form Guanabara</title>
    <style>
        span.texto{
            font-size:<?php echo $tam;?>;
            color:<?php echo $cor;?>;
        }

    </style>

   
</head>
<body>
<h1> Formulários: Cores </h1>
    <div id="tudo">
        <?php     
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    echo "<span class='texto'>$texto</span>";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
       ?>

<a href="index.html"> Formulário </a>

       </div>
    
</body>
</html>