function verificar(){
    var data = new Date()
    var nano = data.getFullYear()
    var nasc = document.getElementById('iano')
    var res = document.getElementById('res')
    if(Number(nasc.value) < 1920 || Number(nasc.value) > nano){
        window.alert('Não foi possível calcular. Verifique os dados e tente novamente.')
    } else{
        var sex = document.getElementsByName('sexo')
        var idade = nano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
        genero = 'masculino'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', '../imagens/criança-m.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', '../imagens/adolescente-m.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', '../imagens/adulto-m.jpg')
            } else if (idade > 60){
                //idoso
                img.setAttribute('src', '..imagens/velhinho.png')
            }
        } else if(sex[1].checked){
            genero = 'feminino'
        }
        res.innerHTML = `${genero} de ${idade} anos.`
    }
}