<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_css/estil.css">
    
    <title>Form Guanabara</title>
</head>
<body>
<h1> Formulários </h1>
    <div id="tudo">
        <?php
     
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";
    $nome=isset($_GET["txt"])?$_GET["txt"]:"Nome não informado!";
    $idade=isset($_GET["id01"])?$_GET["id01"]:"Idade não informada";
    $sexo=isset($_GET["sexo"])?$_GET["sexo"]:"Sexo não informado!";
    $idad= isset($_GET["idade"])?"anos":"";
    echo "$nome, $sexo tem $idade $idad";
    echo "<br/>";
    echo "*****************************************";
    echo "<br/>";

       ?>
<a href="index.html"> Formulário </a>

       </div>
    
</body>
</html>