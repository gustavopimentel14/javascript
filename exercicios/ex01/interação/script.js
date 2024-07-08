function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos e ${segundo} segundos.`
    if (hora > 0 && hora < 12){
        imagem.src = 'imagens/foto-manha.png'
        document.body.style.background ="#b9a07c"
    } else if (hora > 12 && hora < 18){
        imagem.src = 'imagens/foto-tarde.png'
        document.body.style.background = "#88672A"
    } else {
        imagem.src = 'imagens/foto-noite.png'
        document.body.style.background = "#643563"
    }
}
