<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
  /* $conexao=mysqli_connect("localhost", "root", "", "festa");
   $result=mysqli_query($conexao,  "select*from festa1;");
   echo"<ul>";
   while($retorno=mysqli_fetch_array($result)){
       echo"<li> ID: " .$retorno['idfesta']. "</li>";
       echo "<br/>";
       echo"<li> Nome do Usuário: " .$retorno['nome']. "</li>";
       echo "<br/>";
       echo"<li> Endereço: " .$retorno['endereco']. "</li>";
       echo "<br/>";
       echo"<li> Data do cadastro: " .$retorno['data']. "</li>";
       echo "<br/>";
       echo"<hr/>";
   }
   echo"</ul>";
   mysqli_close($conexao);*/
   $conexao=mysqli_connect("localhost", "root", "", "festa");
   $result=mysqli_query($conexao,  "select*from festa1;");
   echo"<table border='1'><tr><th colspan='4'> Retorno da Consulta</th></tr>";
   echo"<tr><td>ID FESTA</td><td>NOME</td><td>ENDEREÇO</td><td>DATA DE CADASTRO</td></tr>";

   if(isset($_POST['nome'])){
   while($retorno=mysqli_fetch_array($result)){
       echo"<tr>";  
       echo"<td>" .$retorno['nome']. "</td>";  
       echo"</tr>";
    }
    }else{
        if(isset($_POST['endereco'])){
            while($retorno=mysqli_fetch_array($result)){
                echo"<tr>";  
                echo"<td>" .$retorno['endereco']. "</td>";  
                echo"</tr>";
             }
    }else{
        if(isset($_POST['data'])){
            while($retorno=mysqli_fetch_array($result)){
                echo"<tr>";  
                echo"<td>" .$retorno['data']. "</td>";  
                echo"</tr>";
             }
    }
    }
    }
   
   echo"</table>";
   mysqli_close($conexao);
   
    ?>
</body>
</html>