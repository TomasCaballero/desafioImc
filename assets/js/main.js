let peso, altura, otroImc, resultado, pesoIdeal;
do{
    peso = parseFloat(prompt('Ingrese su peso en kilogramos (por ejemplo: 72.3)'))
    altura = parseFloat(prompt('Ingrese su altura en metros (por ejemplo: 1.75)'))
    resultado = peso / (altura * altura)
    pesoIdeal = 21.7 * (altura * altura)
    alert('Su indice de masa corporal es de: ' + resultado)
    if(resultado < 18.5){
        alert('Usted tiene Indice de masa corporal inferior al normal')
        alert('Usted deberia estar pesando ' + pesoIdeal + ' +- 9Kg')
    }else if(resultado >= 18.5 && resultado <= 24.9){
        alert('Usted tiene un Indice de Masa Corporal normal')
        alert('Usted deberia estar pesando ' + pesoIdeal + ' +- 9Kg')
    }else if(resultado >=25.0 && resultado <= 29.9){
        alert('Usted tiene un Indice de Masa Corporal superior al normal')
        alert('Usted deberia estar pesando ' + pesoIdeal + ' +- 9Kg')
    }else{
        alert('Usted tiene un Indice de Masa Corporal en medida de obesidad')
        alert('Usted deberia estar pesando ' + pesoIdeal + ' +- 9Kg')
    }
    otroImc = prompt('¿Desea obtener otro IMC?').toLowerCase()
}while(otroImc != 'no')
alert('Gracias por usar nuestro servicio')
