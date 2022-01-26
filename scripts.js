
let botao = document.getElementById("botao")
let select = document.getElementById("selectPara")
let gui = 8.7


console.log(inputMoedas)
async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high





    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("inputMoedas")
    let inputReais = document.getElementById("inputReais")

    if (select.value === "US$ Dolar") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    if (select.value === "€ Euro") {
        let valorEmEuro = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }
    if (select.value === "G Money") {
        let valorEmGui = inputValorEmReais / gui
        inputMoedas.innerHTML = valorEmGui.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }


        inputReais.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


    }

    function trocaDeMoeda() {
        let textoDolar = document.getElementById("textoDolar")
        let bandeiraPara = document.getElementById("bandeiraPara")
        if (select.value === "€ Euro") {
            textoDolar.innerHTML = "Euro"
            bandeiraPara.src = "./imagem/euro.png"




        }
        if (select.value === "US$ Dolar") {
            textoDolar.innerHTML = "Dolar"
            bandeiraPara.src = "./imagem/estados-unidos (1) 1.png"



        }
        if (select.value === "G Money") {
            textoDolar.innerHTML = "Gui Money"
            bandeiraPara.src = "./imagem/money.png"
        }
        converterMoedas()
    }

    botao.addEventListener("click", converterMoedas)
    select.addEventListener("change", trocaDeMoeda)