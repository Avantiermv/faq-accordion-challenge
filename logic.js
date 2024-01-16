var estado1 = false;
var estado2 = false;
var estado3 = false;
var estado4 = false;


function pressionar1(){
    estado1 = true;
    let imagem = document.querySelector('.todotexto:nth-of-type(1) > .paragrafos > p > img');
    imagem.src = './assets/images/icon-minus.svg';

    let texto = document.querySelector('.todotexto:nth-of-type(1) > .paragrafos > .esconder');
    texto.style.display = 'block';

    

    if (estado2 == true){
        texto.style.display = 'none';
    } else if (estado3 == true){
        
    } else if (estado4 == true){
        
    }

}

function pressionar2(){
    
    let imagem = document.querySelector('.todotexto:nth-of-type(2) .paragrafos p img');
    imagem.src = './assets/images/icon-minus.svg';

    let texto = document.querySelector('.todotexto:nth-of-type(2) > .paragrafos > .esconder');
    texto.style.display = 'block';
    estado2 = true;

    
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




