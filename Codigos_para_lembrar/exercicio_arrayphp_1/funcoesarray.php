<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    
    <title>Array Guanabara</title>
</head>
<body>
<h1> Funcoes Array</h1>
    <div id="tudo">

<pre>
<?php
echo "<br/>";
//criando vetores

$w=range(5,20,2);//cria vetor de 5 ate 20 de 2 em 2.
print_r($w);
echo "print-r Mostra valores do vetor na variável (vetor)  <br/>";
echo "<br/>";
var_dump($w);
echo "var_dump() Mostra, com quantidade de itens, os valores do vetor na variável (vetor)  <br/>";
echo "<br/>";
count($w);
echo "count() Mostra: , a quantidade: ".count($w)." itens do vetor na variável<br/>";
echo "<br/>";

$u=array("nome"=>"Ana","idade"=>16, "peso"=>62.5, 9=>"a1");    
print_r($u);
echo "print-r Mostra valores do vetor na variável (vetor) <br/>";
echo "<br/>";
var_dump($u);
echo "var_dump() Mostra, com quantidade de itens, os valores do vetor na variável (vetor)  <br/>";
echo "<br/>";
count($u);
echo "count() Mostra: , a quantidade: ".count($u)." itens do vetor na variável<br/>";
echo "<br/>";

$r=array(0=>3, 1=>5, 2=>8, 3=>2);
print_r($r);
echo "print-r Mostra valores do vetor na variável (vetor) <br/>";
echo "<br/>";
var_dump($r);
echo "var_dump() Mostra, com quantidade de itens, os valores do vetor na variável (vetor)  <br/>";
echo "<br/>";
count($r);
echo "count() Mostra: , a quantidade: ".count($r)." itens do vetor <br/>";
echo "<br/>";
print_r($r);
$r[]=4;
print_r($r);
echo "Sr[]=4;inserir elementos no final vetor <br/>";
echo "<br/>";

array_push($r, 12);
print_r($r);
echo "array_push(Sr, 12);inserir elementos no final vetor <br/>";
echo "<br/>";

array_pop($r);
print_r($r);
echo "array_pop(Sr);retirar elemento no final vetor <br/>";
echo "<br/>";

array_unshift($r,23);
print_r($r);
echo "array_unshift(Sr, 23);inclui elemento no inicio vetor <br/>";
echo "<br/>";

array_shift($r);
print_r($r);
echo "array_shift(Sr);retira elemento no inicio vetor <br/>";
echo "<br/>";

sort($r);
print_r($r);
echo "sort(Sr);ardenar crescente o vetor mudando de indice <br/>";
echo "<br/>";

rsort($r);
print_r($r);
echo "rsort(Sr);ardenar decrescente o vetor mudando de indice <br/>";
echo "<br/>";

$r=array(0=>3, 1=>5, 2=>8, 3=>2);
asort($r);
print_r($r);
echo "asort(Sr);ardenar crescente o vetor mantendo a associatividade  de indice <br/>";
echo "<br/>";

ksort($r);
print_r($r);
echo "ksort(Sr);ardenar crescente por chave <br/>";
echo "<br/>";

krsort($r);
print_r($r);
echo "krsort(Sr);ardenar decrescente por chave <br/>";
echo "<br/>";



?>

   
   </div>
   </body>
   </html>