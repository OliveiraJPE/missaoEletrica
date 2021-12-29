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
       
    <form method="get" action="indexcopy.php">
    <?php  
    $i=1;
    while($i<=5){

        echo "<label for='num$i' >Valor $i </label>";
        echo "<input type='Number' name='v$i'max id='num$i' max='100' min='0' value='0' /><br/>";
    $i++;
    }

    
    ?>
        <input type="submit" id="enviar" name="enviar" value="Gerar"/>
</form>
            </div>
    
</body>
</html>