<?php

$servidor="localhost";
$usuario="root";
$senha="";
$dbnome="crud";

// criar a conexao
$conn=mysqli_connect($servidor, $usuario, $senha, $dbnome);
if(mysqli_connect_errno()!=0) {
    // para confirmar a conexao
    // ou  if(!$conn) {
        echo "Não foi possível conectar ao MySQL. 
        Erro #" . mysqli_connect_errno() 
        . " : " . mysqli_connect_error(); 
        exit;
    }
?>