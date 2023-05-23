



































// do {
//     var nota = prompt('introduzca una nota')
//     if (Number(nota) == nota) {
//         if (nota > 0 && nota <= 10) {
//             if (nota < 3) {
//                 alert('mala')
//             } else if (nota < 6) {
//                 alert('insuficiente')
//             } else if (nota < 7) {
//                 alert('suficiente')
//             } else if (nota < 9) {
//                 alert('buena'); 5
//             } else if (nota >= 9) {
//                 alert('muy buena')
//             }
//         }
//         else {
//             alert('nota erronea')
//         }
//     }
//     else {
//         if (nota != undefined) {
//             alert('escribe otra nota')
//         }
//     }
// }
// while (nota != undefined)
































// do{ 
//     var nota = prompt('introduzca una nota')

//     if(Number(nota) == nota) {
// if(nota > 0 && nota <=10){

// }
//     }
// }
// while(nota != undefined)

// do {
//     var nota = prompt('introduzca una nota')
//     if (Number(nota) == nota) {
//         if (nota > 0 && nota <= 10) {
//             if (nota < 3) {
//                 alert('mala')
//             }
//             else if(nota < 6){
//                 alert('insuficiente')
//             }
//             else if(nota < 7){
//                 alert('suficiente')
//             }
//             else if(nota < 9){
//                 alert('buena');5
//             }
//             else if(nota >= 9){
//                 alert('muy buena')
//             }

//         }
//         else{
//             alert('nota erronea')
//         }
//     }
//     else{
//         if(nota != undefined){
// alert('introduzca otra nota')
//         }
//     }
// }
// while (nota != undefined)























// BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA NOTA
// do {
//     // PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
//     var nota = prompt("Introduce tu nota");
//     // SI SE INTRODUJO UN NÚMERO
//     if (Number(nota) == nota) {
//     // SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
//     if (nota > 0 && nota <= 10) {
//         if (nota < 3) {
//             alert("Muy deficiente");
//         }
//         else if (nota < 5) {
//             alert("Insuficiete");
//         } else if (nota < 6) {
//             alert("Suficiente");
//         } else if (nota < 7) {
//             alert("Bien");
//         } else if (nota < 9) {
//             alert("Notable"); 5
//         } else if (nota >= 9) {
//             alert("Sobresaliente");
//         }
//     }
//     // SI LA NOTA NO ES ENTRE 0 Y 10
//     else {
//         alert("Nota erronea");
//     }
//     }
//     // SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
//     else {
//     // SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
//     if (nota != undefined) { //No es Undefined cuando se pulsa aceptar.
//         alert("Introduce un numero valido");
//     }
//     }
//     // EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
// }
// while (nota != undefined); // Undefined es cuando se pulsa Cancelar.

// var edad = prompt('ingresa tu edad');

// if (Number(edad) == edad) {
// // SI ES MAYOR DE 18
// if (edad > 18) {
// // IMPRIME EN PANTALLA EL MENSAJE
// document.write("Puedes conducir");
// }
// }
// // SI NÓ    
// else {

// // MUESTRA UN MENSAJE
// }






























// const nombre = prompt('introduzca su nombre')
// const age = parseInt(prompt('introduzca su edad'))

// console.log(`te llamas ${nombre} y tienes ${age} y el año que viene tendras ${age+1}`)



// let nombres = ['dianny','michelle ']
// let apellidos = ['De los santos','peres']

// let nombre = nombres.reduce((acp,val) => acp.length > val.length ? acp : val, '');
// let apellido = apellidos.reduce((acc,val) => acc.length > val.length ? acc : val, '');

// console.log(nombre + apellido)



// let nombres = ['Michelle','Maria', 'pedro','Monserrat']
// let apellidos = ['Peres', 'De los santos','Fernandes']

// let nombre = nombres.reduce((acc,val) => acc.length > val.length ? acc : val, '');
// let apellido = apellidos.reduce((acc,val) => acc.length > val.length ? acc : val, '');
// console.log(nombre + apellido)






//EJERCICIO 9

// let nombres = ['dianny', 'Michelle', 'Luisa', 'Maria'];
// let apellidos = ['fernandez', 'De los santos', 'peres', 'montas'];
// let nombre = nombres.reduce((acc, val) => acc.length > val.length ? acc : val, '');
// // let put = nombres.reduce((acc, val)=> acc.length > val.length ? acc : val, '');
// let apellido = apellidos.reduce((acc, val) => acc.length > val.length ? acc : val, '');
// alert(nombre + apellido);

// let nombres = ['Dianny','Michelle']

// let apellidos = ['Peres','Fernandez']

// let dia = 1

// if(nombres<apellidos){
// document.write(nombres[1], "</br>", apellidos[0] )
// dia++
// }


// let autmoviles = ["Saab", "BMW", "Volvo"];
// autmoviles.length = 2;
// console.log(autmoviles.length); // 2

// const palabra = 'Life, the universe and everything. Answer:';
// console.log(palabra.length)


// let nombres = prompt('introducir nombre')
// let apellidos = prompt('introducir ape')

// alert(nombres + " " + apellidos)













































//EJERCICIO 8


// const letras = ['A','B','C','E','F','G','H','I','J','K','M','N','Ñ','O','P','Q']

// const dni = prompt('introduce tu dni')





//EJERCICIO 7

// const numbers = [3,43,50,78,20];
// let pares = []
// let impares = []

// for(const number of numbers){
//     let random = Math.round( Math.random() * 10 + 1)
//    const result = number * random
//    console.log(`${number} * ${random} = ${result}`)
   
//    if(result % 2 == 0){
//     pares.push(result)
// }else{
//     impares.push(result)
// }

// }
// console.log(pares)
// console.log(impares)




//EJERCICIO 6

// let suma=0
// let cont =0

// while(suma<50){
//     suma += parseInt(prompt('introduzca un numero'));
//     cont++ 
// }

// console.log(`la suma total es de: ${suma}`)
// console.log(`la cantidad total es de: ${cont}`)

//EJERCICIO 5

// let num = parseInt(prompt('introduzca un numero'))
// let result = 1
// for(let i = num; i>0; i--){
// result *= i;
// }
// console.log(`el factorial de ${num} es ${result}`);


//EJERCICIO 4

// let num = parseInt(prompt('introduzca un numero'))
// let divisores = 0;


// if(num === 1)console.log('el numero 1 no es valido')

// else{
// for(let i=2; i<num; i++){
// if(num % i == 0){
// console.log(`${num} / ${i} = ${num /i} no es primo`)
// divisores++
// break
// }
// }
// }

// if(divisores==0) console.log(`${num} es primo`)






//EJERCICIO 3

// let num = parseInt(prompt('introduzca un numero'))
// for(let i=1; i<=num; i++){

//     if(i%2==0){
//         console.log(`${i} - es par`)
//     }else{
//         console.log(`${i} - es impar`)
//     }
// }


//EJERCICIO 2
// let figure = prompt('introduzca la figura de la que quiere calcular el area: Triangle, rectangle, circle')
// let base;
// let height;
// let radius;

// switch(figure){
//     case 'triangle':
// base = prompt('introduzca la base el triangulo')
// height = prompt('introduzca la altura el triangulo')
// console.log(`el area del triangulo es ${(base*height)/2}` )
// break

// case 'rectangle':
//     base = prompt('introduzca la base el retangle')
//     height = prompt('introduzca la altura el retangle')
//     console.log(`el area del retangle es ${base*height}` )
//     break

//     case 'circle':
//     radius = prompt('introduzca el radio del circulo')
//     console.log(`el area del circulo es ${Math.PI * Math.pow(radius,2)}` )
//     break

//     default:console.log('la figura geometrica no es valida');
// }




//EJERCICIO 1
// const nombre = prompt('¿Como te llamas?')
// const age = parseInt(prompt('¿Cuantos años tienes?'))

// console.log(`Hola ${nombre} tienes ${age} años y el año que viene tendras ${age+1}`)

// let nombre = prompt('introduzca su nombre')
// //parseInt de string a numero
// let age = parseInt(prompt('introduce tu edad'))

// console.log(`Hola ${nombre} tienes ${age} y el año que viene tendras ${age+1} años` )



// const nombre = prompt('como te llamas?')
// const age = parseInt(prompt('que edad tienes?')) 

// console.log(`te llamas ${nombre} y tienes ${age} años y tendras ${age+1} años`)















// //sirve para almacenar siempre el ultimo operador que emos utilizado
// var lastOperator = null;
// // sirve para que cuando escribabos el siguiente numero se reinicie
// var reset = false;
// // sirve para ir almacenando el ultimo numero que vallamos teniendo 
// var lastNumber = null;

// function init()


// const buttons = document.getElementsByName("button");
// for (const button of buttons) {
//     button.addEventListener("click", function (event) {
//         const text = event.target.innerText;
//         console.log(text)
//         processText(text)
//     })
// }

// function processText(text) {
//     //if si no es un numero es un sinbolo
//     if (isNaN(text)) {
//         if (text == "C") {
//             document.getElementById("calculator").value = "";
//             reset = false;
//         } else if (text == "CE") {
//             document.getElementById("calculator").value = "";
//             reset = false;
//             lastNumber = null;
//             lastOperator = null;
//         } else {
//             if (lastNumber) {
//                 switch (lastOperator) {
//                     case '+':
//                         lastNumber += parseInt(document.getElementById("calculator").value);
//                         break;

//                     case '/':
//                         lastNumber /= parseInt(document.getElementById("calculator").value);
//                         break;
//                     case '-':
//                         lastNumber -= parseInt(document.getElementById("calculator").value);
//                         break;
//                     case '=':
//                         lastNumber = parseInt(document.getElementById("calculator").value);
//                         break;
//                         case '*':
//                             lastNumber *= parseInt(document.getElementById("calculator").value);
//                             break;
                            
//                 }
                
//                 document.getElementById("calculator").value = lastNumber;
//             reset = true;
            
//             } else {
//                 lastNumber = parseInt(document.getElementById("calculator").value);
//                 document.getElementById("calculator").value = "";
//             }
//             lastOperator = text;
//         }
//     } else {
//         if (reset) {
//             document.getElementById("calculator").value = text;
//             reset = false;
//         } else {
//             document.getElementById("calculator").value += text;
//         }
//     }
// }

// window.onload - init;