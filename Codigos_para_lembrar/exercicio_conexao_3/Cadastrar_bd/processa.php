<?php
// Apesar de ser a ultima coisa a fazer  a sessão deve ser o primeiro elemento
// do código, a fim de testar e enviar msg de sucesso.
// deve ser feita no local que recebera mensagem tb: index.php

session_start();

//2a ação incluir include e só uma ves once
include_once("conexao.php");


// 1a ação - variavel $nome recebe name do form index.php
$nome=filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING );
// ou $nome=$_POST['nome'];
$email=filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL );

//echo "Teste de resposta do filtro<br/><br/>";
//echo"Nome:  $nome<br/><br/><br/>";
//echo"E-mail:  $email<br/><br/><br/>";

//inserir os dados na tabela usuario
$result_usuario= "INSERT INTO usuarios (`nome`,`email`, `created`) 
values ('$nome', '$email', NOW())";
mysqli_query( $conn, $result_usuario); 
// conexao dentro de $conn + insert into

// verificar sucesso. Redirecionar reposta para inxex.php
if(mysqli_insert_id($conn)){
      $_SESSION['msg']="<p style='color: green;'>Usuário cadastrado com sucesso!</p>";
    header("Location:index.php");
}else{
    $_SESSION['msg']="<p style='color: red;'>Usuário não foi cadastrado. Tente novamente!</p>";
    header("Location:index.php");
}
?>