/* Métodos para modificar a div selecionada com JS

mouseenter - modifica ao entrar com mouse, deduza o resto

mousemove

mousedown

click

mouseup

mouseout*/

var a=window.document.querySelector('div#area')/*document.getElementById('area')*/;
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar(){
   
    a.innerText='Clicou!';
    a.style.background="red";
    a.style.color="green";
}
function entrar(){
    
    a.innerText='Entrou';
    a.style.background="blue";
    a.style.color="orange";
    }
function sair(){
   
    a.innerText='Saiu';
    a.style.background="yellow";
    a.style.color="violet";
    
}
function somar(){
    var tn1= window.document.querySelector('input#txtn1');
    var tn2= window.document.querySelector('input#txtn2');
    var res=window.document.querySelector('div#somar');
    var n1=Number(tn1.value);
    var n2=Number(tn2.value);
    var somar=n1+n2;
    res.innerText=`O resultado da soma é ${somar}`;

}