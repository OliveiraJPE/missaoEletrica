
var a=window.document.querySelector('button#home');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);
a.style.color="black";

function clicar(){
   
    a.src=`<a href="pagina2.html"></a>`
    ;
    a.style.color="green";
}
function entrar(){
    
    a.style.color="orange";
    }
function sair(){
   
    a.style.color="violet";
    
}

