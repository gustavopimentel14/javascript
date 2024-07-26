function calcular(){
var idade = Number(document.getElementById('idade').value)
var altura = Number(document.getElementById('ialtura').value)
var peso = Number(document.getElementById('ipeso').value)
var sex = document.getElementsByName('sexo')
if(!altura | !peso | !idade){
    window.alert('Preencha todos os campos!')
} else if(sex[0].checked){
    var tmb = 88.362+(13.397*peso)+(4.799*altura)-(5.677*idade)
    restmb.innerHTML = `Sua taxa metabólica basal é de ${tmb.toFixed(2)} kcal/dia.`
} else{
    var tmb = 447.593 + (9.247*peso) + (3.098*altura) - (4.330*idade)
    restmb.innerHTML = `Sua taxa metabólica basal é de ${tmb.toFixed(2)} kcal/dia.`
}
}