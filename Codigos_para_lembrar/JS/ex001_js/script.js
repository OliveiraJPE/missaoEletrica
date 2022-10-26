// caixa de msg
window.alert('Olá Mundo');

//msg de confirmação.
window.confirm('E ai? Vamos começar.'); 

// variavel num recebe valor. E converte de string para inteiro
var num1= Number.parseInt(window.prompt('Digite um número maior que 100:  ')); 

//Usar só Number
var num2 = Number(window.prompt ('Digite um número menor do que 100:  '));
//+ é concatenação de strings e soma. Para somar tem que converter.

/*
Passar Inteiro para número real.
A=Number.parseFloat(num1);
B=Number.parseFloat(num2);
C=Number(num3)

Passar de nuúmero para string
String(num) ou num.toString()

s.length - conta os caracteres
s.toUpperCase() - para maiuscula.
s.toLowerCase() - para minuscula

*/

var soma= num1 + num2;
//Resultado nao browser.
//window.alert('A soma é:  '+ soma);

var nome = window.prompt('Digite seu primeiro nome.')
// usando ${k} tamplate string. $ é placeholder
window.alert(`A soma é ${soma}`);

document.write(`Olá ${nome}. Seu nome tem ${nome.length} letras e a soma entre os números fornecidos:  ${num1.toFixed(2)} e ${num2.toFixed(2)} é ${soma}. E seu nome maiusculo é ${nome.toUpperCase()}`)


