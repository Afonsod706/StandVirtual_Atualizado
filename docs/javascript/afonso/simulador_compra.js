
//funcao de incrementacao de valores 
function incrementar(tipo) {
    document.getElementById("next").classList.add('click');
    console.log(tipo)
    //aumento do entrada inicial
    if (tipo == "entrada") {

        let valor = parseInt(document.getElementById("input-entrada").value);
        if (valor < 65000) {
            valor += 250;
            document.querySelector("#input-entrada").value = valor
            console.log(valor)
        } else {
            document.querySelector("#input-entrada").value = 65000
            alert("Credito Maximo:$65000")
        }

    }
    //aumento do montante pedido
    if (tipo == "pedido") {

        let valor = parseInt(document.getElementById("input-pedido").value);
        if (valor < 75000) {
            valor += 250;
            document.querySelector("#input-pedido").value = valor
            console.log(valor)
        } else {
            document.querySelector("#input-pedido").value = 75000
            alert("Credito Maximo:$75000")
        }

    }
    //aumento dos meses de emprestimo
    console.log(tipo)
    if (tipo == "prazo") {
        let valor = parseInt(document.getElementById("input-prazo").value);
        if (valor < 96) {
            valor += 3;
            document.querySelector("#input-prazo").value = valor

        } else {
            document.querySelector("#input-prazo").value = 96
            alert("prazo Maximo 96 meses = 8 anos")
        }
        console.log(valor)
    }


}
//funcao de decrementacao de valores 
function decrementar(tipo) {
    console.log(tipo)
    //diminuição do entrada inicial
    if (tipo == "entrada") {
        let valor = parseInt(document.getElementById("input-entrada").value);
        if (valor > 500) {
            valor -= 250;
            document.querySelector("#input-entrada").value = valor
            console.log(valor)
        } else {
            document.querySelector("#input-entrada").value = 500
            alert("Credito Minimo:$500")
            console.log(valor)
        }

    }
    //diminuição do montante pedido
    if (tipo == "pedido") {
        let valor = parseInt(document.getElementById("input-pedido").value);
        if (valor > 5000) {
            valor -= 500;
            document.querySelector("#input-pedido").value = valor
            console.log(valor)
        } else {
            document.querySelector("#input-pedido").value = 5000
            alert("Credito Minimo:$5000")
            console.log(valor)
        }

    }
    //diminuição dos meses de emprestimo
    console.log(tipo)
    if (tipo == "prazo") {
        let valor = parseInt(document.getElementById("input-prazo").value);
        if (valor > 12) {
            valor -= 3;
            document.querySelector("#input-prazo").value = valor

        } else {
            document.querySelector("#input-prazo").value = 12
            alert("Prazo Minimo:12 meses= 1 ano")

            console.log(valor)
        }

    }

    console.log(valor)
}

//mostrar layout financiamento 
var roll = true

document.querySelector(".calcular").addEventListener('dblclick', () => {

})
document.querySelector(".calcular").addEventListener('click', () => {

    document.querySelector('.box-resultado').classList.toggle('flip')
    document.querySelector('.down').classList.toggle('up')
    document.querySelector('.calcular').classList.toggle('n-transform')
    setTimeout(() => {
        //gerando o resultado dos calculos do 1º spread
        document.querySelector(".input-resultado").textContent = ''
        document.querySelector(".prestacao").textContent = ''
        document.querySelector(".taxa").textContent = ''
        document.querySelector(".spread").textContent = ''
        //gerando o resultado dos calculos do 2º spread

        document.querySelector(".input-resultado1").textContent = ''
        document.querySelector(".prestacao1").textContent = ''
        document.querySelector(".taxa1").textContent = ''
        document.querySelector(".spread1").textContent = ''
        //gerando o resultado dos calculos do 3º spread

        document.querySelector(".input-resultado2").textContent = ''
        document.querySelector(".prestacao2").textContent = ''
        document.querySelector(".taxa2").textContent = ''
        document.querySelector(".spread2").textContent = ''

        //remover a melhor opcao de emprestimo
        document.querySelector("#sucesso1").classList.remove("verde")
        document.querySelector("#sucesso2").classList.remove("verde")
        document.querySelector("#sucesso3").classList.remove("verde")
        document.querySelector('.box-valor').setAttribute('style', 'border:')
    }, 1000);
    /*setTimeout(() => {
        document.querySelector('.box-valor').classList.toggle('n-border')  
    }, 900 );*/




    //document.querySelector('.text-toggle').innerHTML='FECHAR'
    /* if (roll) {
         document.querySelector('.box-resultado').classList.add('flip')
         document.querySelector('.down').classList.add('up')
         document.querySelector('.calcular').setAttribute('style', 'transform:none')
         document.querySelector('.text-toggle').innerHTML='FECHAR'
         setTimeout(() => {
             document.querySelector('.box-valor').setAttribute('style', 'border:none')  
         }, 800);
         
         roll = false
     } else {
         document.querySelector('.box-resultado').classList.remove('flip')
         document.querySelector('.calcular').setAttribute('style', '')
         document.querySelector('.down').classList.remove('up')
         setTimeout(() => {
             //gerando o resultado dos calculos do 1º spread
             document.querySelector(".input-resultado").textContent =''
             document.querySelector(".prestacao").textContent =''
             document.querySelector(".taxa").textContent = ''
             document.querySelector(".spread").textContent = ''
             //gerando o resultado dos calculos do 2º spread
 
             document.querySelector(".input-resultado1").textContent = ''
             document.querySelector(".prestacao1").textContent =''
             document.querySelector(".taxa1").textContent = ''
             document.querySelector(".spread1").textContent = ''
             //gerando o resultado dos calculos do 3º spread
 
             document.querySelector(".input-resultado2").textContent = ''
             document.querySelector(".prestacao2").textContent =''
             document.querySelector(".taxa2").textContent = ''
             document.querySelector(".spread2").textContent =''
 
               //remover a melhor opcao de emprestimo
               document.querySelector("#sucesso1").classList.remove("verde")
               document.querySelector("#sucesso2").classList.remove("verde")
               document.querySelector("#sucesso3").classList.remove("verde")
               document.querySelector('.box-valor').setAttribute('style', 'border:')
         }, 1000);
         
         roll = true
     }*/


});

//calcular financiamento

document.querySelector("#pedir").addEventListener('click', () => {

    let entrada = parseInt(document.querySelector("#input-entrada").value)
    let montante =parseInt(document.querySelector("#input-pedido").value) 
    let prazo = document.querySelector("#input-prazo").value
    let spread = (5 * Math.random()).toFixed(1)
    let spread1 = (5 * Math.random()).toFixed(1)
    let spread2 = (5 * Math.random()).toFixed(1)
    let taxa = parseFloat(spread) + 5
    let taxa1 = parseFloat(spread1) + 5
    let taxa2 = parseFloat(spread2) + 5
    let taxaE
    if (montante >= 5000 && montante <= 75000) {
 
        if (montante > entrada) {
            montante -= entrada
            if (entrada != 0) {
                if (prazo >= 12 && prazo <= 96) {
                    let montante1 = (montante * (1 + (taxa1 / 100))).toFixed(2)
                    let montante2 = (montante * (1 + (taxa2 / 100))).toFixed(2)
                    montante = (montante * (1 + (taxa / 100))).toFixed(2)
                    var prestacao = (montante / prazo).toFixed(2)
                    var prestacao1 = (montante1 / prazo).toFixed(2)
                    var prestacao2 = (montante2 / prazo).toFixed(2)
                    var resultado = montante
                    var resultado1 = montante1
                    var resultado2 = montante2
                    taxaE = (5 + parseFloat(taxa)) / 100

                    //gerando o resultado dos calculos do 1º spread
                    document.querySelector(".input-resultado").textContent = resultado
                    document.querySelector(".prestacao").textContent = prestacao
                    document.querySelector(".taxa").textContent = taxa
                    document.querySelector(".spread").textContent = spread
                    //gerando o resultado dos calculos do 2º spread

                    document.querySelector(".input-resultado1").textContent = resultado1
                    document.querySelector(".prestacao1").textContent = prestacao1
                    document.querySelector(".taxa1").textContent = taxa1
                    document.querySelector(".spread1").textContent = spread1
                    //gerando o resultado dos calculos do 3º spread

                    document.querySelector(".input-resultado2").textContent = resultado2
                    document.querySelector(".prestacao2").textContent = prestacao2
                    document.querySelector(".taxa2").textContent = taxa2
                    document.querySelector(".spread2").textContent = spread2

                    //mostrar a melhor opcao de emprestimo
                    document.querySelector("#sucesso1").classList.remove("verde")
                    document.querySelector("#sucesso2").classList.remove("verde")
                    document.querySelector("#sucesso3").classList.remove("verde")
                    mEscolha(prestacao, prestacao1, prestacao2);
                } else {
                    alert("Prazo Minimo:12 meses= 1 ano")
                    alert("prazo Maximo 96 meses = 8 anos")
                }
            } else {
                alert("entrada inicial:obrigatorio")
            }
        } else {
            alert("não precisas de  emprestimo vai comprar o carro")
        }


    } else {
        alert("Credito Minimo:$5000")
        alert("Credito Maximo:$75000")
    }
    console.log('montante entrada:' + entrada + ' montante-pedido=' + montante + 'prestação mensal ' + prazo + ' taxa=' + taxa + ' taxa_entrada=' + taxaE + ' prestacao-montante =' + prestacao + ' resultadoT =' + resultado + 'entrada=' + entrada)
})

function mEscolha(p, p1, p2) {
    let a = [p, p1, p2];
    let min = p
    for (let i = 0; i < a.length; i++) {
        if (min > a[i]) {
            min = a[i]
        }
        console.log(min)
    }
    if (min == p) {
        document.querySelector("#sucesso1").classList.add("verde")
    }
    else if (min == p1) {
        document.querySelector("#sucesso2").classList.add("verde")
    }
    else if (min == p2) {
        document.querySelector("#sucesso3").classList.add("verde")
    }
}
