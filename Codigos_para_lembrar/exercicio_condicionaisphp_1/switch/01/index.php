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
        $num1=(int)isset($_POST["num1"])?$_POST["num1"]:"0";
        $num2=(int)isset($_POST["num2"])?$_POST["num2"]:"0";
        $operacao=isset($_POST["oper"])?$_POST["oper"]:"1";
        echo"<br/>";
        echo"<br/>";
        echo "O primeiro número escolhido foi $num1, o segundo $num2.";
        echo"<br/>";
       switch($operacao){
            case 1:
                $r=$num1*2;
                $s=$num2*2;
            break;
            case 2:
                $r=$num1*3;
                $s=$num2*3;
            break;
            case 3:
                $r=number_format(pow($num1, 0.5), 2);
                $s=number_format(sqrt($num2), 2);
            break;
        }
        if($operacao==1){
        echo "Você escolheu a operação $operacao - Dobro, e seus resulatados são: ";
        echo "<br/>";
        echo "Dobro de $num1 é $r, e dobro de $num2 é $s.";
        }elseif($operacao==2){
            echo "Você escolheu a operação $operacao - triplo, e seus resulatados são: ";
            echo "<br/>";
            echo "triplo de $num1 é $r, e triplo de $num2 é $s.";
        }elseif($operacao==3){
            echo "Você escolheu a operação $operacao - Raiz quadrada, e seus resulatados são: ";
            echo "<br/>";
            echo "Raiz quadrada de $num1 é $r, e raiz quadrada de $num2 é $s.";
        }
        ?>
          <br/>
          <a href="index.html">Voltar<a>
    </div>
    
</body>
</html>