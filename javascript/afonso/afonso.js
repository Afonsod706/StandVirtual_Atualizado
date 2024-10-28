
//INICIO CARROS NOVOS ANUNCIO apagar anuncio
document.querySelector('.limpar').addEventListener('click', ()=>{
    let carros=document.querySelector('.NewCars');
    carros.style.display="none";
    /*setTimeout(() => {
        carros.style.display="";
    }, 30000);*/
});

//OUTROS VEICULOS MENU DE FORMULARIO 
document.querySelector('.lista4').addEventListener('mouseover', ()=>{
  let veiculo=document.querySelector('.veiculo');
  veiculo.setAttribute('style', 'display:flex')
});
document.querySelector('.lista4').addEventListener('mouseout', ()=>{
  let veiculo=document.querySelector('.veiculo');
  veiculo.setAttribute('style', ' ')
});

//TOGGLE DO HAMBURGUER DA BARRA DE NAVEGAÇÃO LATERAL

document.getElementById('burger').addEventListener('click', ()=>{
  let container=document.querySelector('#control')
  let opcacidade=document.getElementById('block')
  let main=document.getElementById('main')
  if(container.classList.contains('container-principal') )
  {
    container.classList.remove('container-principal')
    container.classList.add('container-toggle')
    opcacidade.classList.add('opacidade')
    main.setAttribute('style', 'overflow-x:hidden')
  }
} )
document.getElementById('block').addEventListener('click', ()=>{
  let opcacidade=document.getElementById('block')
  let container=document.querySelector('#control')
  if(opcacidade.classList.contains('opacidade')){
    opcacidade.classList.remove('opacidade')
    container.classList.remove('container-toggle')
    container.classList.add('container-principal')
    main.setAttribute('style', 'overflow-x:')
  }
})