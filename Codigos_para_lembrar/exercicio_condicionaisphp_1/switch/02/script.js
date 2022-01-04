window.alert(l'Oá');

document.writeln("Usando o Java script AQUI!");

let num=[8,5,9,1];
num[4]=6;
num.push(7); /* inserir elementos*/
num.length // comprimento
num.sort() // coloca em ordem crescente
document.writeln(`comprimento:  ${num.length}`)
document.writeln("<br/>");
document.writeln(`nosso vetor é ${num}`);
document.writeln("<br/>");

for(var i=0; i<num.length; i++){
document.writeln(`A posição ${i} possui ${num[i]}`);
document.writeln("<br/>");
}
document.writeln("<br/>");
for(var i in num){
    document.writeln(`A posição ${i} possui ${num[i]}`);
    document.writeln("<br/>");
    }
    document.writeln("<br/>");
let busca= num.indexOf(9); // buscar valores, não é a chave e retorna a posição
let busca2= num.indexOf(12); // buscar valores, se não existir retorna -1
document.writeln(`A posição de 9 é ${busca} e 12 é ${busca2}`);
    