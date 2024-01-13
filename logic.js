var estado1 = false;
var estado2 = false;


function pressionar1(){
    var estado1 = true
    let imagem = document.querySelector('.todotexto:nth-of-type(1) > .paragrafos > p > img');
    imagem.src = './assets/images/icon-minus.svg'

    let texto = document.querySelector('.todotexto:nth-of-type(1) > .paragrafos > .esconder');
    texto.style.display = 'block';

    

}

function pressionar2(){
    let imagem = document.querySelector('.todotexto:nth-of-type(2) .paragrafos p img');
    imagem.src = './assets/images/icon-minus.svg';

    let texto = document.querySelector('.todotexto:nth-of-type(2) > .paragrafos > .esconder');
    texto.style.display = 'block';
}


function pressionar3(){
    let imagem = document.querySelector('.todotexto:nth-of-type(3) .paragrafos p img');
    imagem.src = ('./assets/images/icon-minus.svg');

    let texto = document.querySelector('.todotexto:nth-of-type(3) > .paragrafos > .esconder');
    texto.style.display = 'block';
}

function pressionar4(){
    let imagem = document.querySelector('.todotexto:nth-of-type(4) .paragrafos p img');
    imagem.src = ('./assets/images/icon-minus.svg');

    let texto = document.querySelector('.todotexto:nth-of-type(4) > .paragrafos > .esconder');
    texto.style.display = 'block';

    
}




