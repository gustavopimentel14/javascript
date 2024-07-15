let ini = document.getElementById('Inicio')
let final = document.getElementById('ifim')
let pular = document.getElementById('ipasso')
let res = document.getElementById('contagem')
function contar(){
    if(ini.value.length == 0 || final.value.length == 0 || pular.value.length == 0){
        window.alert('Erro. Faltam dados.')
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(final.value)
        let p = Number(pular.value)
        if(i<f){
            for(let c=i; c<=f; c+=p){
                res.innerHTML+= `${c} \u{1F449}`
            }
        } else{
            for(let c=i; c>=f; c-=p)
                res.innerHTML+= `${c} \u{1F449}`
        }
        res.innerHTML += "\u{1F3C1}"
        
    } 
}