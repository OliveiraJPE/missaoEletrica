<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_css/estil.css">
    <title>condicionais Guanabara</title>
   
</head>
<body>
    <h1> Condicionais </h1>
    <div id="tudo">
        <?php  
        $nome=isset($_POST["nome"])?$_POST["nome"]:"{Não Informado}";
        $data=(int)date('Y');
        echo $data;
        $anonasc=(int)isset($_POST["ano"])?$_POST["ano"]:0;
        $idade=$data-$anonasc;
        $escolaridade=isset($_POST["esc"])?$_POST["esc"]:"{Não Informado}";
        echo"<br/>";
        echo"<br/>";
        echo "Olá, $nome! Você tem $idade anos, logo sua condição para o sufrágio é: ";
        echo"<br/>";
        if(($idade<18&&$idade>16)||($idade>70)){
            echo "Voto não obrigatório!";
        }elseif($idade<16){
            echo "Não pode votar!";
            echo ", e não pode dirigir!";
        }elseif($idade>=18&&$idade<=70){
            if($escolaridade=="semescolaridade"){
                echo "Voto não obrigatório!";
                echo ", e pode dirigir!";
            }
            else{
                echo "Voto Obrigatório!";
                echo ", e pode dirigir!";
            }
        }
        ?>
          <br/>
          <a href="index.html">Voltar<a>
    </div>
    
</body>
</html>