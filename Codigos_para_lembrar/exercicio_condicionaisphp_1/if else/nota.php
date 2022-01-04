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
        $nome=isset($_POST["nome"])?$_POST["nome"]:"Não Informado.";
        $n1=isset($_POST["n1"])?$_POST["n1"]:0;
        $n2=isset($_POST["n2"])?$_POST["n2"]:0;
        $media = ($n1+$n2)/2;
        echo"<br/>";
        echo "Olá $nome, você tem notas $n1 e $n2, logo sua média é $media , e sua condição é: ";
        echo"<br/>";
        if($media>0&&$media<4){
            echo "Reprovado";
        }elseif($media>=4&&$media<6){
            echo "Recuperação";
        }elseif($media>=6&&$media<=10){
            echo "Aprovado";
        }else{
            echo "Nota inválida";
            }
        ?>
          <br/>
          <a href="nota.html">Voltar<a>
    </div>
    
</body>
</html>