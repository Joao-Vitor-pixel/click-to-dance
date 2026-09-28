    
const preview = document.querySelector("#preview");
const inputNome = document.getElementById('name');
const btnNome = document.getElementById('btn-input-name');
const subtitleName = document.querySelector("#subtitle-home");
const imgRat = document.querySelector('.img-rat');

inputNome.addEventListener('input', () => {
    const nome = inputNome.value
    if (nome.length > 0) {
        preview.textContent = nome;
    } else {
        preview.textContent = "";
    }
});


btnNome.addEventListener('click', () => {
  const nome = inputNome.value;
    if (nome==="") {
       document.querySelector('.input-name').classList.toggle('input-name-erro')
       document.querySelector('.msg-erro').innerHTML = "Digita seu nome ai Doido!!!"
       imgRat.src = 'imgs/200.gif';
       
    } else {
        console.log(nome);
        document.querySelector('.div-name').style.display = 'none';
        document.querySelector('.div-home').style.display = 'block';
        document.querySelector('.div-pista').style.display = 'block';
        document.querySelector('.div-loja').style.display = 'block';
        subtitleName.innerHTML = "Ola, " + nome + "!"
        
    }
});


const imgHome = document.querySelector('.img-rat');
imgHome.addEventListener('mouseover', () =>{
     imgRat.src ='imgs/gethomered.gif'
});
imgHome.addEventListener('mouseout', () =>{
     imgRat.src ='imgs/rat.gif'
});

let pontos = 0;

const ponto = document.querySelector("#pontos");
    ponto.innerHTML = pontos;
const pista = document.querySelector(".pista");

    pista.addEventListener('click', () => {
        pontos = pontos + 1;
        ponto.textContent = pontos;
        document.querySelector('.skin-dance').classList.toggle('skin-dance1');
    });

    

const btnPista01 = document.querySelector("#pista01")
const btnPista02 = document.querySelector("#pista02")
const btnPista03 = document.querySelector("#pista03")
const btnPista04 = document.querySelector("#pista04")
const btnPista05 = document.querySelector("#pista05")
const skinPista = document.querySelector(".skin-background")
 
btnPista01.addEventListener('click', () =>{
document.querySelector('.pista').classList.remove('skin-background2')
document.querySelector('.pista').classList.remove('skin-background3')
document.querySelector('.pista').classList.remove('skin-background4')
document.querySelector('.pista').classList.remove('skin-background5')
document.querySelector('.pista').classList.add('skin-background')
});

btnPista02.addEventListener('click', () =>{
if(pontos >= 250){
document.querySelector('.pista').classList.remove('skin-background');
document.querySelector('.pista').classList.remove('skin-background3');
document.querySelector('.pista').classList.remove('skin-background4');
document.querySelector('.pista').classList.remove('skin-background5');
document.querySelector('.pista').classList.add('skin-background2');
}

});

btnPista03.addEventListener('click', () =>{
if(pontos >= 509){
document.querySelector('.pista').classList.remove('skin-background');
document.querySelector('.pista').classList.remove('skin-background2');
document.querySelector('.pista').classList.remove('skin-background4');
document.querySelector('.pista').classList.remove('skin-background5');
document.querySelector('.pista').classList.add('skin-background3');
}
});

btnPista04.addEventListener('click', () =>{
if(pontos >= 999){
document.querySelector('.pista').classList.remove('skin-background');
document.querySelector('.pista').classList.remove('skin-background3');
document.querySelector('.pista').classList.remove('skin-background2');
document.querySelector('.pista').classList.remove('skin-background5');
document.querySelector('.pista').classList.add('skin-background4');
}
});

btnPista05.addEventListener('click', () =>{
if(pontos >= 1000){
document.querySelector('.pista').classList.remove('skin-background');
document.querySelector('.pista').classList.remove('skin-background3');
document.querySelector('.pista').classList.remove('skin-background4');
document.querySelector('.pista').classList.remove('skin-background2');
document.querySelector('.pista').classList.add('skin-background5');
}

});


const btnDanca1 = document.querySelector('.img-danca1');
const btnDanca2 = document.querySelector('.img-danca2');
const btnDanca3 = document.querySelector('.img-danca3');
const skinDance = document.querySelector('#dancarino');

btnDanca1.addEventListener('click', () =>{
        skinDance.src = 'imgs/skin1/dança01.gif'

});

btnDanca2.addEventListener('click', () =>{
    if(pontos >= 5000){   
    skinDance.src = 'imgs/dancing-banana.gif'
    }
});

btnDanca3.addEventListener('click', () =>{
    if(pontos >= 9999){
    skinDance.src = 'imgs/AlienPls.gif'
    }
});


let pontosBonus = setInterval(() => {
    imgRat.src ='imgs/sonic.gif'  
    pontos = pontos + 5
     ponto.innerHTML = pontos;
    
 if (pontos >= 500){
    clearInterval(pontosBonus);
    }
}, 10000);

