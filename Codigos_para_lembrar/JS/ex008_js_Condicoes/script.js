
/*Para escrever na tela com o node não funciona o document.write() so para testes no browser deve usar o console.log*/

/*
var vel = 57
if(vel<60){
    console.log(`A velecidade é menor que 60km/h de ${vel} km por hora`)
}else{
    console.log(`A velecidade é maior que 60km/h de ${vel} km por hora`)
}*/

function calcular(){
var txtv = window.document.querySelector("input#txtvel")
var res = window.document.querySelector("div#res")
var vel = Number(txtv.value)
res.innerHTML=`Sua velocidade atual é de ${vel}km/h`

if(vel < 60){
    res.innerHTML +=`<p>Sua velocidade esta adequada</p>`
}else{
    res.innerHTML +=`<p>Você foi multado.</p>`
}
}
