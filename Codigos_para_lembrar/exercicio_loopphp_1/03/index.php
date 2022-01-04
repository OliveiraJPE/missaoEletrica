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
       
<!--<form method="get" action="indexcopy.php">
    <label for='num1'>valor:</label>&nbsp;<input type='Number' name='val' id='num1' max='100' min='0' value='0' /><br/>
   <?php  
   
    ?>
    <input type="submit" id="enviar" name="enviar" value="fatorial"/>
</form>-->

<form method="get" action="indexcopy.php">
    <label for='num1'>Tabuada</label>
    <select name='val' id='num1'><br/>
   <?php  
   $i=1;
   while($i<=10){
        echo"<option value='$i'>".$i."</option>";
        $i++;
   }
    ?>
    </select>
    <input type="submit" id="enviar" name="enviar" value="Calcular"/>
</form>
            </div>
    
</body>
</html>