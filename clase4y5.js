function imc(peso, altura, sexo, actividad){
    sexo = prompt("ingrese sexo hombre/mujer")
    peso = prompt("ingrese peso en kg")
    altura = prompt("ingrese altura en cm")
    edad = prompt("ingrese su edad")
    actividad = prompt("indica tu nivel de actividad segun corresponda:"+ 
    "\n sedentario: no realiza actividad"+
    "\n ligera: de 1 a 3 veces por semana"+
    "\n moderada: de 3 a 5 veces por semana"+ 
    "\n intensa: de 6 a 7 veces por semana")

    if (actividad == "sedentario"){
        switch(sexo){
            case "hombre": alert("usted necesita " + (((10 * peso) + (6.25 * altura) - (5 * edad)-5)*1.2) +" calorias para mantener su peso")
            break;

            case "mujer": alert("usted necesita " + (((10 * peso) + (6.25 * altura) - (5 * edad)-161)*1.2) +" calorias para mantener su peso")
            break;

            default: alert("datos ingresados incorrectos.")
        }
    }
    else if (actividad == "ligera")
        switch(sexo){
            case "hombre": alert("usted necesita " + (((10 * peso) + (6.25 * altura) - (5 * edad)-5)*1.375) +" calorias para mantener su peso")
            break;

            case "mujer": alert("usted necesita " + (((10 * peso) + (6.25 * altura) - (5 * edad)-161)*1.375) +" calorias para mantener su peso")
            break;

            default: alert("datos ingresados incorrectos.")
    }

    else if (actividad == "moderada")
        switch(sexo){
            case "hombre": alert("usted necesita " + (((10 * peso) + (6.25 * altura) - (5 * edad)-5)*1.55) +" calorias para mantener su peso")
            break;

            case "mujer": alert("usted necesita " + (((10 * peso) + (6.25 * altura) - (5 * edad)-161)*1.55) +" calorias para mantener su peso")
            break;

            default: alert("datos ingresados incorrectos.")
    }

    else if (actividad == "intensa")
        switch(sexo){
            case "hombre": alert("usted necesita " + (((10 * peso) + (6.25 * altura) - (5 * edad)-5)*1.725) +" calorias para mantener su peso")
            break;

            case "mujer": alert("usted necesita " + (((10 * peso) + (6.25 * altura) - (5 * edad)-161)*1.725) +" calorias para mantener su peso")
            break;

            default: alert("datos ingresados incorrectos.")
    }

    else {
        alert("ingresaste algun dato incorrectamente. Vuelva a intentar.")
    }
}

imc()