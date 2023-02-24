
/*RequisiçãoAjax Certificação*/
/*var obj;
var elem;

function requisicao(endereco, elemento) {
    try {
        obj = new XMLHttpRequest();
        elem = elemento;
        obj.onreadystatechange = resposta;
        obj.open('GET', endereco, true);
        obj.send();
    }
    catch (exception) {
        alert('Falha na requisição');
    }
}

function resposta() {
    if (obj.readyState == 4) {
        document.getElementById(elem).innerHTML = obj.responseText;

    }
}
function limpar() {
    document.getElementById(elem).innerHTML = "";
}*/


/* Select dinacmico para menu Fundamentos */
/*var abrirMenu = window.document.querySelector("li#fund");
abrirMenu.addEventListener('mouseenter', menu);

var localMenu = window.document.querySelector("div.abrirMenu");

function menu() {
    localMenu.innerHTML =
        `<select name="selMenu" id="selMenu">		
    <option class="op" value="0">Selecione</option>
    <option class="op" value="1">Fundamentos_1</option>
    <option class="op" value="2">Grandezas_Elétricas</option>
    <option class="op" value="3">Tensão_Elétrica</option>
    <option class="op" value="4">Corrente_Elétrica</option>
    <option class="op" value="5">Resistencia_Elétrica</option>
    <option class="op" value="6">Potência_Elétrica</option>
    <option class="op" value="7">Energia_Elétrica</option>
    <option class="op" value="8">Relação_Elétrica</option>
    <option class="op" value="9">Ética_Profissional</option>
</select>`


    var rodarMenu = window.document.querySelector("#selMenu");
    rodarMenu.addEventListener('click', rodar);
    function rodar() {
        var selecao = rodarMenu.options[rodarMenu.selectedIndex].value;
        //select.options[select.selectedIndex].text;
        switch (selecao) {
            case "1": requisicao('_paginas/p2_Fundamentos.html', 'conteudo'); break;
            case "2": requisicao('_paginas/p3_grandezas.html', 'conteudo'); break;
            case "3": requisicao('_paginas/p4_tensao.html', 'conteudo'); break;
            case "4": requisicao('_paginas/p5_corrente.html', 'conteudo'); break;
            case "5": requisicao('_paginas/p6_resistencia.html', 'conteudo'); break;
            case "6": requisicao('_paginas/p7_potencia.html', 'conteudo'); break;
            case "7": requisicao('_paginas/p8_energia.html', 'conteudo'); break;
            case "8": requisicao('_paginas/p9_relacao.html', 'conteudo'); break;
            case "9": requisicao('_paginas/p10_etica.html', 'conteudo'); break;

        }
    }
}

/* Select dinacmico para menu IEBT: Instalações Eletricas */
/*var abrirMenu1 = window.document.querySelector("li#ins");
abrirMenu1.addEventListener('mouseenter', menu1);

var localMenu1 = window.document.querySelector("div.abrirMenu");

function menu1() {
    localMenu1.innerHTML =
        `<select name="selMenu" id="selMenu">		
            <option class="op" value="0">Selecione</option>
            <option class="op" value="1">IEBT:Teoria_e_Prática</option>
            <option class="op" value="2">Circuitos _Elementares</option>
            <option class="op" value="3">Dimensionamento: Introdução</option>
            <option class="op" value="4">Leitura e interpretação de diagramas elétricos</option>
            <option class="op" value="5">Prática de Instalações Elétricas</option>
            <option class="op" value="6">Aplicativo de Dimensionamento</option>
        </select>`


    var rodarMenu1 = window.document.querySelector("#selMenu");
    rodarMenu1.addEventListener('click', rodar1);
    function rodar1() {
        var selecao1 = rodarMenu1.options[rodarMenu1.selectedIndex].value;
        //select.options[select.selectedIndex].text;
        switch (selecao1) {
            case "1": requisicao('_paginas/p11_instalacoes.html', 'conteudo'); break;
            case "2": requisicao('_paginas/p12_circuitosElementares.html', 'conteudo'); break;
            case "3": requisicao('_paginas/p13_dimensionamento.html', 'conteudo'); break;
            case "4": requisicao('_paginas/p14_leitura.html', 'conteudo'); break;
            case "5": requisicao('_paginas/p15_pratica.html', 'conteudo'); break;
            case "6": requisicao('_paginas/p16_aplicacao_dimensionamento.html', 'conteudo'); break;
        }
    }
}*/

/* Select dinanmico para menu todos os outros */
var abrirMenuapr = window.document.querySelector("li#apr");
var abrirMenucer = window.document.querySelector("li#cer");
var abrirMenufale = window.document.querySelector("li#fale");


abrirMenuapr.addEventListener('mouseenter', menu2);
abrirMenucer.addEventListener('mouseenter', menu2);
abrirMenufale.addEventListener('mouseenter', menu2);
var localMenu1 = window.document.querySelector("div.abrirMenu");

function menu2() {
    localMenu1.innerHTML =
        `...`
    
}
