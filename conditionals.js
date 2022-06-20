/* 
Syntax:

if (condition){ // true
    sentences
}

if (condition){
    sentences
} else {
    sentences
}

if (condition){
    sentences
} else if (condition){
    sentences
} 

if (condition){
    sentences
} else if (condition){
    sentences
} else {
    sentences
}

switch(valor){
    case 1: 
        sentences;
        break;
    default: 
        senteces;
        break; 
}


Operaciones de Comparacion:

=== (valor + tipo de dato)
== (valor)
!== (valor + tipo de dato)
!=
>=
<=
>
<

Operadores Logicos (and, or, not) => &&, ||, !

true && true => true
true && false => false
false && false => false

true || true => true
true || false => true
false || false => false


!true && !true => false
!true && !false => false
!false && !false => true

!true || !true => false
!true || !false => true
!false || !false => true




*/

let a = 5;
let b = '5';
let c = a === b; // false
let d = a == b; // true

if (a !== b) {
    console.log("verdadero");
}

if (a !== b) {
    console.log("verdadero");
} else {
    console.log("falso");
}

let x = 10;
let y = 26;
let z = 18;

if (x > y && x > z) {
    console.log("X")
} else if (y > z) {
    console.log("Y")
} else {
    console.log("Z")
}

if (!x > y) {
    console.log("")
}

let mayor_tres_numeros = x > y && x > z ? x : y > z ? y : z;


function suma(a, b) {
    if (typeof (a) !== 'number') return "A debe ser un numero";
    if (typeof (b) !== 'number') return "B debe ser un numero";
    return a + b;
}

console.log(suma(5, 2))

let option = 5;

switch (option) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("Opcion no valida");
        break;
}

function menu(option) {
    switch (option) {
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return "opcion no valida";
    }
}


switch (true) {
    case option >= 1 && option <= 5:
        switch (option) {
            case 1:
                break;
            case 2:
                break;
            default:
                break;
        }
        break;
    case option >= 6 && option <= 10:

        break;

    default:

        break;
}

let mayor = a > b ? a : b;