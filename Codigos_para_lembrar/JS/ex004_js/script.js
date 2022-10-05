var s=window.prompt("Digite uma palavra!");
var N1=window.prompt("DIGITE UM NUMERO?");
var N2=window.prompt("DIGITE OUTRO NUMERO?");
var soma= Number(N1) + Number(N2);

document.writeln("A soma é " + soma+ "<br>");
document.writeln("A palavra digitada foi " +s+ " e possui "+ s.length+" letras.<br>");
document.writeln(`A palavra ${s} tem ${s.length} letras. e em maiusculas se escreve ${s.toUpperCase()}`);