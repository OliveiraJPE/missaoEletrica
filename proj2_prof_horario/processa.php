<?php
            $selecao=isset($_POST["selecao"])?$_POST["selecao"]:0 ;
            $login=isset($_POST["login"])?$_POST["login"]:0;
            $senha=isset($_POST["senha"])?$_POST["senha"]:0;
//echo "$selecao, $login, $senha";
            if($selecao==1){
                if($login=="1" && $senha=="1"){
                    //echo "Administrador"; Validar senha no SGBD
                    header('Location: '.$new="cadastrog.html");
                }else{
                    echo "Erro no Login e senha.";
                    echo "<br><a target='self' href='index.html'><h4 id='cad'>Voltar</h4></a>";
                }
            }
            if($selecao==2){
                if($login=="2" && $senha=="2"){
                    //echo "Professor"; Validar senha no SGBD
                header('Location: '.$new="cadastrop.html");
                }else{
                echo "Erro no Login e senha.";
                echo "<br><a target='_self' href='index.html'><h4 id='cad'>Voltar</h4></a>";
                }
            }
?>
               

