<?php
    $id= isset($_POST["matr"])?$_POST["matr"]:0;
    $nome=isset($_POST['nome'])?$_POST['nome']:0;
    $conexao=mysqli_connect("localhost", "root", "" , "cadastroesc");
    mysqli_query("INSERT INTO adm (`id`, `nome`) values ('$id', '$nome');";
    mysqli_close("cadastroesc");
?>
               

