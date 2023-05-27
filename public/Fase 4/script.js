function procesarRespuestas(){
    let total = 5
    let puntos = 0;

    let myForm =document.forms["formulario"];
    let respuestasCorrectas =["c", "a", "a", "b", "d",]

    for (let i=1; i<= total; i++){
        if (myForm["r" + i].value == null ||
            myForm["r" + i].value == '') {
            alert('Favor responder todas las preguntas del cuestionario');
            return false;    
        } else {
            if (myForm["r" + i].value === respuestasCorrectas[i -1])
                puntos++;
        }
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML='Obtuviste '+puntos+' puntos de ' + total + ' posibles ';
    return false;
}



//EJEMPLOS EN CLASE 4
// let miArreglo = [6,7,3,1]
// document.getElementById('salida').innerHTML="este es el elmento de salida"

//EJEMPLO 3
//for(let i=0; i< miArreglo.length; i++ ){
//document.write(miArreglo[i]); }

// EJEMPLO 2
//console.log('el valor es '+miArreglo[3]);

//EJEMPLO 1
//let x = 4;
//let y = 3;

// if (x === y) {
// console.log('los numeros son iguales');
// }
// else {
//     console.log( 'no son iguales')
// }
 

