function verificar(){
    var nasc = document.getElementById('iano')
    var res = document.getElementById('res')
    var ano = Number(nasc.value)
    res.innerHTML = `Você nasceu no ano de ${ano}.`
}