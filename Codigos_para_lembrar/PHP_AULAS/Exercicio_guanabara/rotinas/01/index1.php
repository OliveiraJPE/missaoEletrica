<!DOCTYPE html>
<html lang="pt-br">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <title>Rotinas Guanabara</title>
    
</head>
<body>
<h1>FUNCTIONS</h1>
    <div id="tudo">
       
    <?php  //procedimento - passagem de parametros
    //não retorna valor
    function soma($a , $b){
        $s=$a+$b;
        echo "<p>A soma vale $s</p>";

    }
    soma(3,4);
    $x=9;
    $y=13;
    soma($x,$y);


     //Retorna valor
     function somar($a , $b){
       $s=$a+$b;
       return $s;
    }
    $res=somar(3,4);
    echo "resultado retornado $res <br/>"; 
   
    // passagem de multiplos parametros
    function somando(){
        $p=func_get_args(); //criará um vetor $p
        $tot=func_num_args(); // retorna o número argumentos passados
        $s=0;
        for($i=0; $i<$tot;$i++){
            $s=$s+$p[$i];
        }
        return $s;
     }
     $res=somando(3,4,8,1,2,4,5,7,8);
     echo "<br/> resultado retornado de multiplos valores é $res";
    ?>
   
        </div>
    
</body>
</html>