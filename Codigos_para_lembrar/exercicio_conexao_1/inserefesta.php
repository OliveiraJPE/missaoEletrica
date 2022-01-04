<?php
if(isset($_POST["botao"])){
    $data=$_POST["data"];
    $data=substr($data,6,4)."-".substr($data,3,2)."-".substr($data,0,1);
    $conexao=mysqli_connect('localhost', 'root', '');
    mysqli_select_db('meubanco',$conexao);
    mysqli_query("insert into festa(nome, endereco, cidade, dia) values('".$_POST['nome']."','".$_POST['endereco']."','".$_POST['cidade']."','".$data."')",$conexao);
    mysqli_close($conexao);
}
?>