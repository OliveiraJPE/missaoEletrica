var s= 'Java Script';
var N1=window.prompt("DIGITE UM NUMERO?");
var N2=window.prompt("DIGITE OUTRO NUMERO?");
var soma= Number(N1) + Number(N2);
//var soma= Number(N1+N2);

//Tamplete de string com Place holder(${})
window.alert(`Em ${s}, a soma entre ${N1} e ${N2}  é ${soma}.`);

// com concatenação. JS mais antigo.
document.writeln("A soma é "+ soma);