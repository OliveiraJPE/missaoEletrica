<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_css/estilo.css">
    <title>Horário Escolar</title>
</head>

<body>
    <div id="tudo">
        <header>
            <a target="blanck" href="https://sites.google.com/view/missaofilosofica/in%C3%ADcio">
            <h1 id="MF">MISSÃO FILOSÓFICA: EM BUSCADE DEUS</h1>
            </a>  
            <h1 id="titulo">Projeto: Horário dinâmico</h1>
            <h2 id="titulo2">Cadastros e modificações</h2>
        </header>
        <section>
        <?php
$selecao=isset($_POST["selecao"])?$_POST["selecao"]:0 ;
$login=isset($_POST["login"])?$_POST["login"]:0;
$senha=isset($_POST["senha"])?$_POST["senha"]:0;
//echo "$selecao, $login, $senha";
if($selecao==1){
    //echo "Administrador";
    echo"<a href='cadastroa.php'>Cadastrar ou modificar: Administradores<a>";
    echo"<a href='cadastrop.php'>Cadastrar ou modificar: Professores conforme prioridade<a>";
    echo"<a href='cadastrot.php'>Cadastrar ou modificar: Turmas<a>";
    echo"<a href='cadastroh.php'>Cadastrar ou modificar: Horários nos turnos<a>";
    echo"<a href='consultas.php'>Efetuar consultas globais<a>";
}else{
if($selecao==2){
    //echo "Professor"; 
}
}

?>
        </section>
        <aside>
            
        </aside>
    
        <footer>
            <h6>&copy; &reg; by OliveiraJPE</h6>
        </footer>
    </div>
    <script type="text/javascript" src="_js/index.js"></script>
</body>

</html>


 <a target="blanck" href="index.html"><h1>Voltar</h1></a> 