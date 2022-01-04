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
    if(isset($_POST['selecao'])){
        $nome=$_POST['nome'];
        $endereco=$_POST['endereco'];
        $data=$_POST['data'];
        $conexao=mysqli_connect("localhost", "root", "", "festa");
        $resultado=mysqli_query($conexao, "insert into festa1(`nome`,`endereco`,`data`) values('$nome', '$endereco', '$data');");
        mysqli_close($conexao);
        echo "Dados inseridos com sucesso!";
    }   
    
    ?>
</body>
</html>