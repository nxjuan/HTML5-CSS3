function calculate(){
    var altura=document.getElementById("altura").value
    var peso=document.getElementById("peso").value

    var imc=peso/(altura**2)
    if(imc<18.5){
        window.alert("Você Apresenta um Grau de Desnutrição")
    }else if(imc<24.9){
        window.alert("Você Está na Faixa de Peso Ideal")
    }
    else if(imc<29.9){
        window.alert("Você está Acima do Peso Ideal")
    }
    else if(imc<39.9){
        window.alert("Você Apresenta um Grau de Obesidade")
    }
    else if(imc>39.9){
        window.alert("Você Apresenta Obesidade Mórbida")
    }
}