<?php
$selecao=isset($_POST["selecao"])?$_POST["selecao"]:0 ;
$login=isset($_POST["login"])?$_POST["login"]:0;
$senha=isset($_POST["senha"])?$_POST["senha"]:0;
//echo "$selecao, $login, $senha";
if($selecao==1){
    //echo "Administrador";
    echo"<a href='cadastroa.php'>Cadastrar Administradores<a>";
    echo"<a href='cadastrop.php'>Cadastrar professores<a>";
    echo"<a href='cadastrot.php'>Cadastrar turmas<a>";
    echo"<a href='cadastroh.php'>Cadastrar horários nos turnos<a>";
    
    
    
}else{
if($selecao==2){
    //echo "Professor"; 
}
}

?>
 <a target="blanck" href="index.html"><h1>Voltar</h1></a> 