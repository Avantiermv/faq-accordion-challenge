function pressionar1() {
    let div = document.querySelector('div:nth-child(2) .esconder');
    let imagem = document.querySelector('div:nth-child(2) p img');
    if (div.style.display === 'block') {
        div.style.display = 'none';
        imagem.src = './assets/images/icon-plus.svg';
    } else {
        esconderDivs();
        div.style.display = 'block';
        imagem.src = './assets/images/icon-minus.svg';
    }
}

function pressionar2() {
    let div = document.querySelector('div:nth-child(3) .esconder');
    var imagem = document.querySelector('div:nth-child(3) p img');
    if (div.style.display === 'block') {
        div.style.display = 'none';
        imagem.src = './assets/images/icon-plus.svg';
    } else {
        esconderDivs();
        div.style.display = 'block';
        imagem.src = './assets/images/icon-minus.svg';
    }
}

function pressionar3() {
    let div = document.querySelector('div:nth-child(4) .esconder');
    var imagem = document.querySelector('div:nth-child(4) p img');
    if (div.style.display === 'block') {
        div.style.display = 'none';
        imagem.src = './assets/images/icon-plus.svg';
    } else {
        esconderDivs();
        div.style.display = 'block';
        imagem.src = './assets/images/icon-minus.svg';
    }
}

function pressionar4() {
    let div = document.querySelector('div:nth-child(5) .esconder');
    var imagem = document.querySelector('div:nth-child(5) p img');
    if (div.style.display === 'block') {
        div.style.display = 'none';
        imagem.src = './assets/images/icon-plus.svg';
    } else {
        esconderDivs();
        div.style.display = 'block';
        imagem.src = './assets/images/icon-minus.svg';
    }
}

function esconderDivs() {
    let divs = document.querySelectorAll('.esconder');
    for(let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';

        let imagem = document.querySelector('div:nth-child(' + (i + 2) + ') p img');
        imagem.src = './assets/images/icon-plus.svg';
    }
}




