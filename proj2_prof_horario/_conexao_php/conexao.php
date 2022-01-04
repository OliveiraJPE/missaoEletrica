<?php
    $host="localhost";
    $user="root";
    $password="";
    $dbname="escola";
//MYSQLI DIRECIONADO A OBJETOS
    $conexao=new mysqli($host, $user, $password , $dbname);
    if(!$conexao){
        echo "Não foi possível conectar ao MySQL. Erro #" . mysqli_connect_errno(). " : " . mysqli_connect_error(); 
    }

  
?>
               

