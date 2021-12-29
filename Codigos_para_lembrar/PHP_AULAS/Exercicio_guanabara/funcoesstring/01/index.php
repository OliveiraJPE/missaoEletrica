<!DOCTYPE html>
<html lang="pt-br">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <title>Form Guanabara</title>
    
</head>
<body>
<h1> Funções Strings</h1>
    <div id="tudo">
<!--manipulação de tudo o que existe entre " ".-->
    <?php
    /*
    $prod="leite";
    $preco="4.5";
    //echo"O $prod custa R$ ". number_format($preco,2). 
    printf("O %s custa R$  %.2f" , $prod, $preco); // escrever com formatação, igual python.
 // %s foramta string %f formata float, %.2f duas casa float.
 // %d decimal, %u apenas positivo.
 
 // print_r() mostra vetores nos testes.
    $x[0]=4;
    $x[1]=8;
    $x[2]=3;
    print_r($x);
        echo "<br/>";
    // criar um vetor com várias posições.
    $v= array(3,7,6,2,1,9);
    echo "<br/>";
    print_r($v); // ser substituido por var_dump($x) ou var_export($x).
    echo "<br/>";
    var_dump($v);
    echo "<br/>";
    var_export($v);
    echo "<br/>";

    // wordwrap() gera quebra de linhas

    $txt="Este é um exemplo de stginr muito grande para que possamos gerar a quebra de linha através de wordwrap()";
   // $res=wordwrap( $txt,"<br>\n", false);
    $res= wordwrap($txt, 5, "<br/>\n", false); // quebra preservando as palavras. true quebra até palavras.
    echo $res;
    echo "<br/>"; 
    echo "<br/>";
    // comprimento da string.
        $t="Curso em video";
        $res= strlen($t);
        echo "Letras + espaços é $res"; 
        echo "<br/>"; 
        echo "<br/>";

    //trim() elimina espaços inicio e final de dados vindos de formulários.
// ltrim()  elimin no inicio e rtrim(0) no final.
$n="   Nome   do   ";
echo strlen($n);
echo "<br/>"; 
$s=trim($n);
echo "<br/>"; 
echo $s;
echo "<br/>"; 
echo strlen($s);
echo "<br/>"; 
echo "<br/>"; 
//str_word_count($var, 0) conta palavras.
$f= "eu vou cantar";
$r=str_word_count($f, 2); //0 conta ( mostra com echo), 1 gera vetor com palavras, 2 gera vetor mantendo o posicionamento dentro de cada string.

print_r($r);

//explode(" ", $site), cria vetor com string. deixar espaço em branco entre aspas.
//versão str_word_count()
$site="Curso em video";
$vetor=explode(" ",$site);
print_r($vetor);

echo"<br/>";

// str_split() cria vetor para cada letra.
$nome="Pedro";
$vetor=str_split($nome);
print_r($vetor);
echo"<br/>";

//implode() ou join() unirá vetores em uma vari$ável

   $v[0]="Pedro";
   $v[1]= "ama";
   $v[2]="Pare";
  // $texto=implode(" ", $v);
   $texto=join(".", $v);
   print($texto);
   echo"<br/>";

   // chr() mostra qual letra está no cod ASCII

   $letra=chr(87);
   echo" a letra de codigo 87 é $letra" ;
   echo"<br/>";

    // ord() mostra qual cod está da letra ASCII

    $letra="D";
    $cod=ord($letra);
    echo" a letra de codigo $cod é $letra" ;
    echo"<br/>"; */
    

    // strtolower() minusculo.
    //strtoupper() maiusculo.
    // ucfirst() maiuscula primeira letra.
    //ucwords() maiuscula primeira letra de cada palavra.   
    //strrev() reverso da palavra.
    //strpos($frase, "PHP") mostra a posição da string.
    //stripos() ignora a caixa alta ou baixa
    //substr_count($frase, "PHP") conta a recorrencia desta palavra na frase.
    //substr() 
    $n="Pedro";
    echo "seu nome é ". strtolower($n);
    echo "<br/>";
    echo "<br/>";
    $frase="Estou estudando php.";
    $res=stripos($frase, "PHP");
    print($res);
    echo "<br/>"; 
    echo "<br/>";

      //substr($frase, 4) apresenta a partir desta posição. ou em um intervalo
    $frase="Estou estudando php.";
    $re=substr($frase, 0, 5);
    $res=substr($frase, -5, 2);
    print($re);
    print($res);
    echo "<br/>"; 
    echo "<br/>";
    // str_pad($nome,30, " ", STR_PAD_RIGHT); GERA ESPAÇOS.
    $frase="Estou ";
    $res= str_pad($frase,300, " ", STR_PAD_RIGHT);
    print("eu $res PUTO");
    

//str_repeat("-", 20) repete 20 veses e str_replace ( "pol", "uou", $frase)

    ?>
       
            </div>
    
</body>
</html>