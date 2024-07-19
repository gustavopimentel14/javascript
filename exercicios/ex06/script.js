let n = document.getElementById('inum')
let caixa = document.getElementById('icaixa')
let res = document.getElementById('resultado')
let valores = []

function num(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function lista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(num(n.value) && !lista(n.value, valores)){
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `O valor ${n.value} foi adicionado.`
        caixa.appendChild(item)
        res.innerHTML=''
    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    n.value = ''
    n.focus()
}

function finalizar(){
    if(valores.length==0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma+=valores[pos]
            if(valores[pos]>maior)
                maior = valores[pos]
            if(valores[pos]<menor)
                menor = valores[pos]
        }
        media = soma/total
        res.innerHTML=''
        res.innerHTML=`<p>Este vetor é <strong>${valores}</strong>`
        res.innerHTML+=`<p>Foram informados <strong>${total}</strong> números</p>`
        res.innerHTML+=`<p>O menor valor informado foi <strong>${menor}</strong></p>`
        res.innerHTML+=`<p>O maior valor informado foi <strong>${maior}</strong></p>`
        res.innerHTML+=`<p>A soma dos valores é <strong>${soma}</strong></p>`
        res.innerHTML+=`<p>A média dos valores é <strong>${media}</strong></p>`
    
    }
}