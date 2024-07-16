let inicio = document.getElementById('inum')
let fim = document.getElementById('ifim')
let passo = document.getElementById('ipasso')
let res = document.getElementById('contagem')

function contar(){
    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
        res.innerHTML = 'Impossível contar.'
    } else{
        res.innerHTML='Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo indeterminado. Considerando PASSO 1.')
            p=1
        }
        if(i<f){
            for(let c=i; c<=f; c+=p){
            res.innerHTML += `${c}; `
        } 
        } else{
            for(let c=i; c>=f; c-=p){
                res.innerHTML+= `${c}; `
            }
        }
    }
    res.innerHTML += 'FIM!'
}