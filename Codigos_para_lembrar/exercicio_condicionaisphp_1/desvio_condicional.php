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
<h1> Estruturas condicionais  - Claretiano </h1>
    <div id="tudo">
        
       <?php // Desvio Condicional
       $nome="anna";
       if($nome=="ana"){
            echo "Olá ana";

       }else{
           echo "você não é ana";
       }
echo "<br/>";
       $n=4;
       if($n%2==0){
            echo "o número é par";

       }else{
           echo "O número é impar";
       }
       echo "<br/>";
       $idade=23;
       $sexo="f";
       if($idade<=15&&$sexo=="f"){
            echo "Menina";
       }else{
           if($sexo=="m"){
           echo "Homem";
           }else{
           echo "Mulher e tem $idade anos";
           }
       }
       echo "<br/>";
       $n=4;
       if($n%2==0){
            echo "o número é par";

       }else{
           echo "O número é impar";
       }
       echo "<br/>";
       $idade=$_GET["a"];
      
        if($idade<15){
            echo "criança";
        }elseif($idade<20){
           echo "jovem";
        }elseif($idade>=20){
           echo "adulto";
        }
        $s=$_GET["b"];
        switch($s){
            case "m";
              echo "Macho";
            break;
            case "f";
              echo "mulher";
            break;
            default; 
              echo "Não Binário";
            break;
        }
       ?>


       </div>
    
</body>
</html>