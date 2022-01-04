<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_css/estil.css">
    
    <title>Livro_PHP na pratica 2014 julia</title>
</head>
<body>
<h1> Exercicio 07 pg08  - Claretiano </h1>
    <div id="tudo">
        
       <?php // diferenças entre datas
            $data=date('m, d, y'); // data do sistema
            $data1=mktime(0, 0, 0, 2, 28, 2016); // segundo, minuto, hora, mes, dia, ano
            $data2=mktime(0, 0, 0, 3, 4, 2017);
            $data3=mktime(0, 0, 0, 10, 30, 2021);

            echo "A data de hoje é: ".$data; 
            echo "<br/>A data1 do exercício é: ".$data1;
            echo "<br/>A data2 do exercício é: ".$data2;
           
            echo "<br/> A diferença entre data 2 e data 1 é:  ". ($data2 - $data1). " Segundos";
            echo "<br/> A diferença entre data 2 e data 1 é:  ". (($data2 - $data1)/3600/24). " dias";
            echo "<br/> A diferença entre data 3 e data 1 é:  ". (($data3 - $data1)/3600/24). " dias";
       
       ?>


       </div>
    
</body>
</html>