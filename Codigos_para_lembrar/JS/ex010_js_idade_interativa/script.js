
/*
Para Criar elemento Dinamicamente 
var img= document.createElement('img')

inserir id 

img.setAttribute('id', 'foto')

para inserir a foto

img.setAttribute('src', '_imagens/menino.png')
*/
function carregar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(window.document.getElementById('fano').value)
    var msg = window.document.querySelector('div#msgmod')
    var img = window.document.querySelector('img#imagem')
    var nome = window.document.querySelector('input#nome')

if(fano == 0 || fano > ano){
    window.alert("ERRO: Verifique ano")
} if(nome.value == ""){
    window.alert("ERRO: Verifique nome")
    }else{
        var gen= window.document.getElementsByName('gen')
        var idade = ano - Number(fano)
        if(gen[0].checked){
            if(idade>=0 && idade<12){
                msg.innerHTML=`Olá ${nome.value} você tem ${idade} anos. <br> Você é criança!`
                img.src=`_imagens/menino.png`
                window.document.body.style.background= `#e2cd9f`
            }else if(idade>=12 && idade<18){
                msg.innerHTML= `Olá ${nome.value} você tem ${idade} anos. <br> Você é jovem!`
                img.src=`_imagens/rapaz.png`
                window.document.body.style.background= `#b9846f`
            }else if(idade>=18 && idade<50){
                
                msg.innerHTML= `Olá ${nome.value} você tem ${idade} anos. <br> Você é Adulto!`
                img.src=`_imagens/homem.png`
                window.document.body.style.background= `#b9847f`
            }else if(idade>=50){
                msg.innerHTML= `Olá ${nome.value} você tem ${idade} anos. <br> Você é idoso!`
                img.src=`_imagens/idoso.png`
                window.document.body.style.background= `#515154`
            }   
        }else if(gen[1].checked){
            if(idade>=0 && idade<12){
                msg.innerHTML= `Olá ${nome.value} você tem ${idade} anos. <br> Você é criança!`
                img.src=`_imagens/menina.png`
                window.document.body.style.background= `#e2cd9f`
            }else if(idade>=12 && idade<18){
                msg.innerHTML= `Olá ${nome.value} você tem ${idade} anos. <br> Você é jovem!`
                img.src=`_imagens/moca.png`
                window.document.body.style.background= `#b9846f`
            }else if(idade>=18 && idade<50){
                msg.innerHTML= `Olá ${nome.value} você tem ${idade} anos. <br> Você é Adulta!`
                img.src=`_imagens/mulher.png`
                window.document.body.style.background= `#b9847f`
            }else if(idade>=50){
                msg.innerHTML= `Olá ${nome.value} você tem ${idade} anos. <br> Você é idosa!`
                img.src=`_imagens/idosa.png`
                window.document.body.style.background= `#515154`
            }
        }
    } 
}  


