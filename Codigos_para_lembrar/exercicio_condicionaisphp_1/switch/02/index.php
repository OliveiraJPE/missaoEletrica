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
        $operacao=isset($_POST["sel"])?$_POST["sel"]:"1";
        echo"<br/>";
        echo"<br/>";
              
       switch($operacao){
            case 1:
            case 7:
            case 8:
                $r="Hoje você não precisa ir a escola.";
            break;
            default:
                $r="Hoje você precisa ir a escola.";
            break;
        }
        switch($operacao){
            case 1:
                $compl="Domingo";
            break;
            case 2:
                $compl="Segunda-feira";
            break;
            case 3:
                $compl="Terça-feira";
            break; 
            case 4:
                $compl="Quarta-feira";
            break; 
            case 5:
                $compl="Quinta-feira";
            break; 
            case 6:
                $compl="Sexta-feira";
            break; 
            case 7:
                $compl="Sábado";
            break; 
            case 8:
                $compl="Feriado ou você está no período de férias";
            break;
        }
        echo "Hoje é $operacao - $compl. Logo, $r.";
        ?>
          <br/>
          <a href="index.html">Voltar<a>
    </div>
    
</body>
</html>