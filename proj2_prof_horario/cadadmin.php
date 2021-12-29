<?php
    $id= isset($_POST["matr"])?$_POST["matr"]:0;
    $nome=isset($_POST['nome'])?$_POST['nome']:0;

    $host="localhost";
    $user="root";
    $password="";
    $dbname="cadastroesc";


    //MYSQLI PROCEDURAL
    $conexao=mysqli_connect($host, $user, $password, $dbname);

    if(mysqli_connect_errno()!=0) {
        // para confirmar a conexao
        // ou  if(!$conn) {
            echo "Não foi possível conectar ao MySQL. Erro #" . mysqli_connect_errno(). " : " . mysqli_connect_error(); 
            exit;
        }
    $consulta="INSERT INTO adm (`id`, `nome`) values ('$id', '$nome');";
    mysqli_close($conexao);

    //MYSQLI DIRECIONADO A OBJETOS
    $conexao=new mysqli($host, $user, $password , $dbname);
    if(!$conexao){
        // para confirmar a conexao
        // ou  if(!$conn) {
            //echo "Não foi possível conectar ao MySQL. Erro #" . mysqli_connect_errno(). " : " . mysqli_connect_error(); 
            //exit;
        }
   $conexao->close();

    
    
?>
               

