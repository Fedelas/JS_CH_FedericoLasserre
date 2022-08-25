
// Entendiendo la regla de Fibonacci
//  Si el numero es correcto te dice Ok y te va a pedir que ingreses el proximo, de lo contrario te salta error y te hace salir del loop para comennzar de nuevo
// A su vez tiene un contador para que al final te salte un mensaje si completaste bien los primeros 13

function primerosTrece() {
let numeroDeFibonacci=Number(prompt("Favor escriba el numero que sigue en la regla. Recordar que los dos numeros anteriores son: 0 y 1"));
let penultimoNumero = 0;
let ultimoNumero = 1;
let contador = 0; 
for (let i=0; i<10; i++){
    if (numeroDeFibonacci == ultimoNumero + penultimoNumero ){
        alert("Perfecto, ahora tenes que ingresar el próximo numero de la serie")
        penultimoNumero = ultimoNumero;
        ultimoNumero = numeroDeFibonacci;
        let nuevoNumeroDeFibonacci=Number(prompt(`Favor escriba el numero que sigue en la regla. Recordar que los dos numeros anteriores son: ${penultimoNumero} y ${ultimoNumero} `))
        numeroDeFibonacci = nuevoNumeroDeFibonacci;
        contador=i+2;
        console.log(contador);
        
    } else{
        alert("Error, ahora tenes que comenzar de nuevo")
        break;
    }
}
if (contador == 11){
    alert (`GENIAL aprendiste los primeros ${contador+2} números de la serie de FIBONACCI`) // uso de template literls para que me sume la cantidad de numeros que fue agregando mas dos que corresponden al 0 y 1
}

}


function juegoInfinito() {
    let numeroDeFibonacci=Number(prompt("Favor escriba el numero que sigue en la regla. Recordar que los dos numeros anteriores son: 0 y 1"));
    let penultimoNumero = 0;
    let ultimoNumero = 1;
    let contador = 0; 
    let numeroCorrecto = true;
    while (numeroCorrecto){
        if (numeroDeFibonacci == ultimoNumero + penultimoNumero ){
            alert("Perfecto, ahora tenes que ingresar el próximo numero de la serie")
            penultimoNumero = ultimoNumero;
            ultimoNumero = numeroDeFibonacci;
            let nuevoNumeroDeFibonacci=Number(prompt(`Favor escriba el numero que sigue en la regla. Recordar que los dos numeros anteriores son: ${penultimoNumero} y ${ultimoNumero} `))
            numeroDeFibonacci = nuevoNumeroDeFibonacci;
            contador=contador+1;
            console.log(contador);
            numeroCorrecto=true;
        } else{
            numeroCorrecto=false;
        } 
        
        }
    
    
    alert (`GENIAL aprendiste los primeros ${contador+2} números de la serie de FIBONACCI`) // uso de template literls para que me sume la cantidad de numeros que fue agregando mas dos que corresponden al 0 y 1
}
