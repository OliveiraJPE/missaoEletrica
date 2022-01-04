var obj;
var elem;

function requisicao(endereco, elemento){
    try{
        obj=new XMLHttpRequest();
        elem=elemento;
        obj.onreadystatechange=resposta;
        obj.open('GET',endereco,true);
        obj.send();
    }
    catch(exception){
        alert('Falha na requisição');
    }
}

function resposta(){
    if(obj.readyState==4){
        document.getElementById(elem).innerHTML=obj.responseText;

    }
}