
const form = document.getElementById('form');

/*function funcao(campoA,campoB){
    if(campoA > campoB){
        alert("O Campo B deve ser maior que o Campo A");
    } else{
        alert("Enviado!")
    }
}*/
form.addEventListener('submit', function(funcao){
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
        if(campoA.value > campoB.value){
            alert("O Campo B deve ser maior que o Campo A");
        } else{
            alert("Enviado!")
        }
        funcao(campoA.value,campoB.value)
    })
