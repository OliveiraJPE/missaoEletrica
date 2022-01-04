<?php
function ola(){
  echo"<h2>Olá mundo</h2>";
}

function mostravalor($v){
  echo"<h2> Acabei de receber o valor $v </h2>";

}
function calculo(){
  $p=func_get_args();
  $tot=func_num_args();
  $s=1;
  for($i=0; $i<$tot;$i++){
      $s*=$p[$i];
  }
  return $s;
}
?>