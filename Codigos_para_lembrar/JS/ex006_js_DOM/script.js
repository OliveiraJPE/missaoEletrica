/*DOM - Document Object Model

Arvore DOM de um site

DOM - Conjunto de objetos dentro do navegador  que dá acesso a componentes internos do seu WEB SITE.

Objeto principal do Navegador é o window que contem todos os outros objetos.
*/ 
window.document.write("<h2>Arvore DOM</h2><br>");
window.document.write("_____________________window_______________________<br>");
window.document.write("location______________document_________________history<br>");
/*location - localização do site: URL, Localização atual, pagina anterior,
document - documento atual,
history - guarda a navegação*/


window.document.write("******** ______________html_________________********<br>");
window.document.write("******** ____head________________body_______********<br>");/* html é chield (filho) de document, e document é parent ( pai) de html object. */
window.document.write("*******meta______title ***** h1___p____p____div*******<br>");
window.document.write("**********************************strong************<br>");

window.document.write("<h2>Busca a URL</h2> <br> <p>window.document.write(window.document.URL)</p>", window.document.URL)

/*Selecionando
por marca, ID, Nome, Classe, Seletor
*/

window.document.write(" <h2>Seleção</h2><p> Ver código para entender: Seleção do paragrafo 1. </p>");

var corpo =window.document.body;

var titulo = window.document.getElementsByTagName('h1')[0];

titulo.style.color='yellow';

corpo.style.backgroundColor='black';

var p1 = window.document.getElementsByTagName('p')[0];

window.document.write(p1.innerText);

p1.style.color='blue';

window.document.write("<br>", p1.innerHTML);

/*window.alert(p1.innerText);*/

var p11 = window.document.getElementById('msg');
p11.style.background='blue';
p11.innerText= "Estou aguardando ...";
/* window.document.getElementById('msg').innerText='Olá';*/

window.document.write("<br>", p11.innerText);

/* QuerySelect - Id#   Class . */

var titulo=window.document.querySelector('h2#titulo');
titulo.style.background='blue';








