<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_css/estilo.css">
    <title>Variaveis+operadores</title>
</head>
<body>
    <h1> Teoria pg2 até pg07 Claretiano </h1>
    <div id="tudo">
       
    
        <?php 
            Echo "Olá <br/> Gente <br/>";
            echo "pessoal<br/>";
            $nome="Pedro ";
            $snme="Oliveira <br/>";
            echo $nome.$snme;
            $num=4;
            echo "<br/>";
            echo $num."<br/>";
            echo $num.$num;
            echo "<br/>";
            $x=9;
            $y=$x;
            echo $x."<br/>".$y;
            $y=$x%4;
            echo"<br/>";
            echo $y;
            $y/=4;
            echo"<br/>";
            echo round(39);
            echo"<br/>";
            echo pow($x, $y); 
            echo"<br/>";
            echo sqrt(39);
            echo"<br/>";
        $y=10;
            echo rand(1, 10);
            echo"<br/>";
            echo $y++;
            echo"<br/>";
            echo $y;
            echo"<br/>";
            echo ++$y;
            echo"<br/>";
            echo $y;
            echo"<br/>";
            $a="10";
            $b=10;
            echo ($a==$b);
            echo"<br/>";
            echo ($a===$b);
            echo"<br/>";
            echo ($a!=$b);
            echo"<br/>";
            echo ($a!==$b);
            $a=15;
            $b=10;
            echo"<br/>";
            echo ($a>$b);
            echo"<br/>";
            echo ($a<$b);
            echo"<br/>";
            echo ($a>=$b);
            echo"<br/>";
            echo ($a<=$b);
            echo"<br/>";
            $a=true;
            $b=false;
            echo"<br/>";
            echo ($a&&$b);
            echo"<br/>";
            echo ($a||$b);
            echo"<br/>";
            echo (!$a);
            echo"<br/>";
            echo (!$b);
            echo"<br/>";
            $data=date('d-m-y');
            echo "Data: ".$data;
            echo"<br/>";
            $j=mktime(0,0,0,1,31,2021);
            $j_30=mktime(0,30,0,1,31,2021);
            $dif=$j_30 - $j;

            echo $dif;
            echo"<br/>";
            $msg="    Ola     ,     mundo     ";

            echo lcfirst($msg);
            echo"<br/>";
            echo ucfirst($msg);
            echo"<br/>";
            echo ucwords($msg);
            echo"<br/>";
            echo strtoupper ($msg);
            echo"<br/>";
            echo ltrim($msg);
            echo"<br/>";
            echo rtrim($msg);
            echo"<br/>";
            echo trim($msg);
            echo"<br/>";

            $busca="nome";
            $troca="Pedro";
            $frase="To nome puto";
            $msg=str_replace($busca, $troca, $frase);
            echo"<br/>";
            echo $msg;
            echo"<br/>";
            echo strlen($msg);
            echo"<br/>";
            echo substr_count($msg,4,5);
            echo"<br/>";
            echo $frase;
            echo"<br/>";
         




        ?>
        
    </div>

</body>

<html>