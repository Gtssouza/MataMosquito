var largura = 0
var altura = 0

function ajustaTelaJogo(){
    altura = window.innerHeight
    largura = window.innerWidth  
    console.log(altura, largura)  
}

ajustaTelaJogo()

function posicaoRandom(){

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    posicaoX = posicaoX < 0 ? 0 : posicaoX

    //criando o elemento html
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhaAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    
    document.body.appendChild(mosca)

    
    
}

function tamanhaAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0 : 
            return 'mosca'
        
        case 1 :
            return 'mosca1'

        case 2 :
            return 'mosca2'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0 :
            return 'ladoA'
        case 1 :
            return 'ladoB'
    }
}




