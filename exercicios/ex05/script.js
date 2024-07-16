function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('itabuada')
    
        if(num.value.length==0){
        window.alert('Por favor, digite um número.')
        } else{
            let n = Number(num.value)
            tab.innerHTML = ''
            let c = 1
                do{
                let item = document.createElement('option')
                item.text=`${c} x ${n} = ${c*n}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++
                }while(c<=10)
            }
                
        }
