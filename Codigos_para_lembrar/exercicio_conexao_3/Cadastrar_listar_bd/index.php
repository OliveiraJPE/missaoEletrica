<?php
// Apesar de ser a ultima coisa a fazer  a sessão deve ser o primeiro elemento
// do código, a fim de testar e enviar msg de sucesso.
// deve ser feita no local que enviou mensagem tb: processa.php

session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD - cadastrar</title> <!--Criar ler alterar e deletar -->
</head>
<body>
    <h1>Cadastrar Usuário</h1>
    
    <?php
        //continuando Session para 
        if(isset($_SESSION['msg'])){ //testa a variável global
            echo $_SESSION['msg']; // imprime na tela a msg de sucesso
            unset($_SESSION['msg']); // destrói a variável global para não repetir
        }
    ?>
    <form action="processa.php" method="post">
       <label> Nome: </label> &nbsp;<input type="text" name="nome" placeholder="Digite o nome completo"><br/><br/>
       <label>e-mail:</label> &nbsp;<input type="email" name="email" placeholder="Digite o email"><br/><br/>
      
       
       <input type="submit" name="botao" value="Cadastrar">
       <a href="listar.php"> <input type="button" name="listar" value="Listar BD"></a><br/>
    </form>
</body>
</html>