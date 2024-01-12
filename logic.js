function pressionar1() {
    esconderDivs();
    let div = document.querySelector('div:nth-child(2) .esconder');
    div.style.display = 'block';
    let imagem = document.querySelector('div:nth-child(2) p img');
    imagem.src = './assets/images/icon-minus.svg';
}

function pressionar2() {
    esconderDivs();
    let div = document.querySelector('div:nth-child(3) .esconder');
    div.style.display = 'block';
    var imagem = document.querySelector('div:nth-child(3) p img');
    imagem.src = './assets/images/icon-minus.svg';
}

function pressionar3() {
    esconderDivs();
    let div = document.querySelector('div:nth-child(4) .esconder');
    div.style.display = 'block';
    var imagem = document.querySelector('div:nth-child(4) p img');
    imagem.src = './assets/images/icon-minus.svg';
}

function pressionar4() {
    esconderDivs();
    let div = document.querySelector('div:nth-child(5) .esconder');
    div.style.display = 'block';
    var imagem = document.querySelector('div:nth-child(5) p img');
    imagem.src = './assets/images/icon-minus.svg';
}

function esconderDivs() {
    let divs = document.querySelectorAll('.esconder');
    for(let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';

        let imagem = document.querySelector('div:nth-child(' + (i + 2) + ') p img');
        imagem.src = './assets/images/icon-plus.svg';
    }
   
}



