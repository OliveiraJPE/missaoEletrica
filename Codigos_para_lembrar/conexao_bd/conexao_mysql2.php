<?php
$_con = new mysqli("localhost","root","","BD_PHP5"); 
if(!$_con) {
// ou if(mysqli_connect_errno()!=0) { 
    echo "Não foi possível conectar ao MySQL. Erro #" . mysqli_connect_errno() . " : " . mysql_connect_error(); exit;
} 

// incluir alguns registros na tabela Usuario 
$_sql = "INSERT INTO Usuario VALUES"; 
$_sql .= "(NULL,'Darci F.Soares','Darci','teste', 1, 'darci@walace.com.br'),";
$_sql .= "(NULL,'Elza M.S.Soares','Elza','teste',2, 'elza@walace.com.br')"; 
$_res = $_con->query($_sql); 

if($_res===FALSE) {
echo "Erro na inclusão dos registros... " . $_con->error . "<br/>"; 
} else {
echo $_con->affected_rows . " Registros incluídos com Sucesso<br/>";
} 

// Agora vamos alterar alguns registros 
$_sql = "UPDATE Usuario SET userNivel=2 WHERE userNivel=1"; 
$_res = $_con->query($_sql); 

if($_res===FALSE) {
echo "Erro na alteração dos registros... " . $_con->error . "<br/>"; 
} else {
echo $_con->affected_rows . " Registros alterados<br/>";
} 
// finalmente vamos listar os registros existentes no banco 
$_sql = "SELECT * FROM Usuario"; 
$_res = $_con->query($_sql); 

if($_res===FALSE) {
echo "Erro na consulta... " . $_con->error . "<br/>"; 
} else {
$_nr = $_res->num_rows; 
echo "A consulta retornou " . (int) $_nr . " registro(s)<br/>"; 

if($_nr>0) {
} echo "</table>";
}

// Primeiro o cabeçalho com os campos da tabela 
echo "<table border=1>"; 
echo "<tr bgcolor='#f0f0f0'>"; 
for($_i=0;$_i<$_res->field_count;$_i++) {
$_f = $_res->fetch_field_direct($_i); echo "<td>" . $_f->name . "</td>";
} 
echo "</tr>";
 // Agora o resultado 
while($_row=$_res->fetch_assoc()) {
echo "<tr>"; 
foreach($_row as $_vlr){
echo "<td>$_vlr</td>"; 
echo "</tr>";
}
$_con->close(); 
?>