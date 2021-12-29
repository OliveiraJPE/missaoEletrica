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
<h1> Formulários</h1>
    <div id="tudo">
    <?php
     /* Escolha de curso
     $nome=isset($_POST["nome"])?$_POST["nome"]:"[Nome não informado]";
     $sexo=isset($_POST["sexo"])?$_POST["sexo"]:"[Sexo não informado]";
     $curso=isset($_POST["curso"])?$_POST["curso"]:"[Curso não informado]";
     echo "$nome, $sexo, escolheu o curso de $curso.";
    
    
    //número de acertos
     if($_POST["nome"]==""){
     $nome="Nome não informado";
     echo "<br/>";
     $res1=$_POST["q1"];
     echo "<br/>";
     $res2=$_POST["q2"];
     echo $nome."<br/>";
          }else{
          $nome=$_POST["nome"];
          echo "<br/>";
          $res1=$_POST["q1"];
          echo "<br/>";
          $res2=$_POST["q2"];
          echo $nome."<br/>";
     }

     if($res1==1){
         echo"ACERTOU a questão 01!";
         echo "<br/>";
    }else{
        echo "ERROU a questão 01!!";
        echo "<br/>";
    }
    if($res2==1){
        echo"ACERTOU a questão 02!";
        echo "<br/>";
   }else{
       echo "ERROU a questão 02!!";
       echo "<br/>";
   }*/
  


   $num=isset($_POST["num"])?$_POST["num"]:0;
   $res="";
   while($num>1){
        $res.=$num%2;
        $num/=2;
       // echo"<br/>";
        //echo (int)$num."loop";
        //echo"<br/>";

   }
  // echo"<br/>";
  // echo (int)$num."no";
  // echo"<br/>";
   $res.=$num%2;
   //$res.=(int)$num/2;
   $res= (int)(strrev($res));
   echo $res;

  /* $nome=isset($_POST["nome"])?$_POST["nome"]:"NA";
   $snome=isset($_POST["snome"])?$_POST["snome"]:"NA";

   echo "Seu Nome completo é ".$nome." ".$snome;

   $num1=isset($_POST["num1"])?$_POST["num1"]:0;
   $num2=isset($_POST["num2"])?$_POST["num2"]:0;
   $num3=isset($_POST["num3"])?$_POST["num3"]:0;
   $resmaior=0;
   $resint=0;
   $resmenor=0;
   if($num1>$num2&&$num2>$num3){
    $resmaior=$num1;
    $resint=$num2;
    $resmenor=$num3;
   }elseif($num1>$num3&&$num3>$num2){
    $resmaior=$num1;
    $resint=$num3;
    $resmenor=$num2;
   }elseif($num3>$num2&&$num2>$num1){
    $resmaior=$num3;
    $resint=$num2;
    $resmenor=$num1;
   }elseif($num2>$num3&&$num3>$num1){
    $resmaior=$num2;
    $resint=$num3;
    $resmenor=$num1;
    }elseif($num2>$num1&&$num1>$num3){
    $resmaior=$num2;
    $resint=$num1;
    $resmenor=$num3;
   }elseif($num3>$num1&&$num1>$num2){
    $resmaior=$num3;
    $resint=$num1;
    $resmenor=$num2;
   }
   echo "Resultado crescente $resmenor, $resint, $resmaior.";

   $num1=isset($_POST["num1"])?$_POST["num1"]:0;
   $num2=isset($_POST["num2"])?$_POST["num2"]:0;
   $num3=isset($_POST["num3"])?$_POST["num3"]:0;

   if((($num1+$num2)<$num3)or(($num1+$num3)<$num2)or(($num3+$num2)<$num1)){
        echo "Estes lados não formam um triangulo";
   }
   else{
        echo "Estes lados formam um triangulo";
   }
   
   $nome=isset($_POST["nome"])?$_POST["nome"]:"";
   $senha=isset($_POST["senha"])?$_POST["senha"]:"e";
  if($senha==ucfirst($nome)){
        echo "Usuário válido";
   }
   else{
        echo "Usuário inválido";
   }
  */
   ?>
   
   <a href="form.html">Voltar<a>
          </div>
     </body>
</html>