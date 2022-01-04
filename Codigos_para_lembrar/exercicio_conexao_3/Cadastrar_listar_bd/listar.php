<?php
// Apesar de ser a ultima coisa a fazer  a sessão deve ser o primeiro elemento
// do código, a fim de testar e enviar msg de sucesso.
// deve ser feita no local que enviou mensagem tb: processa.php

session_start();
include_once("conexao.php");
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD - listar</title> <!--Criar ler alterar e deletar -->
</head>
<body>
    <h1>Listar Usuários</h1>
   
    
    <?php
        //continuando Session para 
        if(isset($_SESSION['msg'])){ //testa a variável global
            echo $_SESSION['msg']; // imprime na tela a msg de sucesso
            unset($_SESSION['msg']); // destrói a variável global para não repetir
        } 
        //criei variavel ?pagina=2 direto no final da URL.
        // agora vou criar paginação com filter_input
        //Receber o número da pagina
        $pagina_atual= filter_input(INPUT_GET, 'pagina', FILTER_SANITIZE_NUMBER_INT);
        $pagina=(!empty($pagina_atual))?$pagina_atual:1;

        //Setar a quantidade de itens por página
        $qnt_result_pg= 2;

        //calcular o inicio da visualização
        $inicio=($qnt_result_pg*$pagina)- $qnt_result_pg;

        $result_usuarios= "SELECT*FROM usuarios LIMIT $inicio, $qnt_result_pg";
        $resultado_usuarios= mysqli_query($conn,$result_usuarios);
        while($row_usuario=mysqli_fetch_assoc($resultado_usuarios)){
            echo "ID: " . $row_usuario['id'] ."<br/>";
            echo "nome: " . $row_usuario['nome'] ."<br/>";
            echo "E-mail: " . $row_usuario['email'] ."<br/><hr/>";
        }

        $result_pg="SELECT COUNT(id) AS num_result FROM usuarios";// seleciona no BD
        $resultado_pg=mysqli_query($conn, $result_pg);//chama o que foi selecionado
        $row_pg = mysqli_fetch_assoc($resultado_pg); //recebe a o que foi selecionado
            //echo $row_pg['num result'];//conta quantas linhas

            //Quantidade de paginas
            $quant_pg=ceil($row_pg['num_result']/$qnt_result_pg);
            
            //limitar os links antes depois
            $max_links=2;
            echo "<a href='listar.php?pagina=1'>Primeira</a>";

                for($pag_ant =$pagina-$max_links;$pag_ant<= $pagina-1; $pag_ant++ ){
                    if($pag_ant>=1){
                        echo "<a href='listar.php?pagina=$pag_ant'>$pag_ant</a>";
                }
            }
            echo $pagina;
            for($pag_dep =$pagina+1;$pag_dep<= $pagina+$max_links; $pag_dep++ ){
                if($pag_dep<=$quant_pg){
                    echo "<a href='listar.php?pagina=$pag_dep'>$pag_dep</a>";
            }
        }

            echo "<a href='listar.php?pagina=$quant_pg'>Ultima</a>";

            //
    
    ?>
    <a href="index.php"> Cadastro</a><br/>
</body>
</html>