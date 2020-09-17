var largura = 0
var altura = 0
var vidas = 1
var tempo = 10

function ajustaTelaJogo(){
    altura = window.innerHeight
    largura = window.innerWidth  
    console.log(altura, largura)  
}

ajustaTelaJogo()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

function posicaoRandom(){

    //remover a mosca anterior caso exista
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        //Se vida for maior que 3
        if(vidas>3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            //perdendo vida
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
       


    }


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
    //criando o id unico para a mosca
    mosca.id = 'mosca'

    //criando evento de click sobre o elemento HTML
    mosca.onclick = function(){
        this.remove()
    }
    
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




