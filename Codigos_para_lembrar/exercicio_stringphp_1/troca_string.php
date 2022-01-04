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
<h1> Exercicio 08 e 09 pg08  - Claretiano </h1>
    <div id="tudo">
        
       <?php // diferenças entre datas
           $frase="Comentários do Facebook não estão disponíveis no Google";
            echo $frase;
            echo"<br/>";
            $prim = "Facebook";
            $troca = "x2";
            $msg=str_replace($prim, $troca, $frase);
            $frase=$msg;
         
            $prim = "Google";
            $troca = "Facebook";
            $msg=str_replace($prim, $troca, $frase);
            $frase=$msg;
          
            $prim = "x2";
            $troca = "Gloogle";
            $msg=str_replace($prim, $troca, $frase);
            echo "<br/>". $msg;

            // trocar ordem das letras

            $msg="abcdefghijlmn";
            echo "<br/>";
            echo substr($msg, 0, 1)."<br/>";
            echo "<br/>";
            echo substr($msg, 3, 5)."<br/>"; //mostra 5 letras a partir da 3. Inicia no 0.
            echo "<br/>";
            echo substr($msg, 6, -2)."<br/>";

$palavra="Palavra";
echo strrev($palavra); //inverte a posição dast letras.
			// Mostra o texto a cada dez espaços.
			$texto="Eu gosto de aprender a programar com a linguagem PHP.";
			$tamanho=strlen($texto);
			for($i=0; $i<$tamanho; $i+=10){
				echo "<br/>". substr($texto, $i, 10);
			}
			
			//Inserindo tabela com PHP.
			echo "</br> <hr/> <br/>";
			echo "<table border='1'>";
			echo "<tr>";
			echo "<th>*</th>";
			
			for($linha=0; $linha<10; $linha++){
				echo "<th style='color:red;'>".$linha."</th>";
			}
			echo "</tr>";
			
			for($linha=0; $linha<10; $linha++){
				echo "<tr>";
				echo "<th style='color:green;'>".$linha."</th>";
				for($coluna=0; $coluna<10; $coluna++){
					echo "<td>".($linha*$coluna)."</td>";	
				}
				echo "</tr>";
			}
			echo "</table>";			
			
			
				
			?>
</body>
</html>