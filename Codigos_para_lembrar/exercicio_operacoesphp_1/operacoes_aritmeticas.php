<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_css/estilo.css">
    
    <title>Livro_PHP na pratica 2014 julia</title>
</head>
<body>
<h1> Exercicio 06 pg08  - Claretiano </h1>
    <div id="tudo">
        
       <?php // operações aritimeticas
            $n1=2;
            $n2=5;
            $n3=8;

            echo "A soma entre N1, N2, N3 é: ".number_format($n1+$n2+$n3, 2, ",", "."); 
            // soma de trê número e formatação com virgul para float e ponto para milhares.
            echo "<br/> A raiz quadrada do produto dos três números: N1, N2, N3 é: ".number_format(sqrt($n1*$n2*$n3), 2, ",", ".");
       
       ?>


       </div>
    
</body>
</html>