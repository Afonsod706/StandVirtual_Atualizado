var form = document.querySelector('.form');
// Evento para que o submit não submeta qualquer dados
form.addEventListener('submit', function (event) {
    event.preventDefault();
});

function showresults()
{
    document.querySelector(".resultado").setAttribute("style","display:block")
    atributevalues();
    calculaEstado();
}

function atributevalues()
{
    let marcafs= document.getElementById("marcaf").value;
    let modelofs= document.getElementById("modelof").value;
    let precofs= document.getElementById("precof").value;
    let anofs= document.getElementById("anof").value;
    let quilofs= document.getElementById("quilof").value;
    document.querySelectorAll(".marcares").forEach(function(x){x.textContent= marcafs});
    document.querySelectorAll(".modelores").forEach(function(x){x.textContent= modelofs});
    document.querySelectorAll(".precores").forEach(function(x){x.textContent= precofs});
    document.querySelectorAll(".anores").forEach(function(x){x.textContent= anofs});
    document.querySelectorAll(".quilores").forEach(function(x){x.textContent= quilofs}); 
}

const anoatual=2023;
let precofinal=0;
function definevariables()
{
    let anos = document.getElementById('anof').value;
    let kil = document.getElementById('quilof').value;
    let precoaq= document.getElementById('precof').value;
    let c1=0;
    let c2=0;

    anos=anoatual-anos;
    if(anos>0 && anos<=10)
    {
        c1=0.05;
    }
    else
    {
        if(anos>10)
        {
            c1=0.04
        }
    }

    if(kil>0 && kil<=30000)
    {
        c2=1;
    }
    else
    {
        if(kil>30000 && kil<=70000)
        {
            c2=0.95;
        }
        else
        {
            if(kil>70000)
            {
                c2=0.9;
            }
        }
    }
    if(c1==0.05)
    {
        precofinal=precoaq*(1-(anos*c1))*c2;
    }
    else
    {
        precofinal=precoaq*(1-((10*0.05)+((anos-10)*c1)))*c2;
    }
}

function confirmaPreco()
{
    if (precofinal<500)
    {
        alert('Preço de venda inferior a 500€')
    }
    else
    {
        showresults();
    }
}

function calculaEstado()
{
    let p1= precofinal*0.6;
    let p2= precofinal*1;
    let p3= precofinal*1.1;
    document.getElementById('priceme').value=p1;
    document.getElementById('priceme').textContent= document.getElementById('priceme').value.toFixed(1)+" €";
    document.getElementById('pricebe').value=p2;
    document.getElementById('pricebe').textContent= document.getElementById('pricebe').value.toFixed(1)+"€";
    document.getElementById('pricembe').value=p3;
    document.getElementById('pricembe').textContent= document.getElementById('pricembe').value.toFixed(1)+"€";
}

function final()
{
    definevariables();
    confirmaPreco();
}

document.getElementById("submeter").addEventListener('click',final)