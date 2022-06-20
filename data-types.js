// Definir una variable podemos hacerlo con var, let y const
// Data Types: String, Number, Boolean, Undefined, Object: Null, Array, Date, Literal Object


String.prototype.reverse = function(){
    let newString = "";
    for(let i = this.length - 1; i >= 0; i--){
        newString += this[i];
    }
    return newString;
}


Array.prototype.myMap = function(callbackfn){
    for(let i = 0; i < this.length; i++){
        callbackfn(this[i], i, this);
    }
}


let nombre = "Luis"; // string
console.log(nombre.reverse());
let apellido = 'Rodriguez'; // string
let nombreCompleto = `Bievenido, ${nombre} ${apellido}`; // string

let edad = 40; // number
let grados = 30.5; // number
let piso = -2; // number

let active = false; // boolean
let single = true; // boolean

let direccion; // undefined

let users1 = null; // object

let fecha = new Date(); // object
//let formData = new FormData(); // object

let persona = {
    nombre: 'Luis',
    apellido: 'Rodriguez',
    edad: 40,
    soltero: true,
    saludo: function(){

    }
} // object

/* 
persona.nombre;
persona['apellido'];
persona.saludo() 
*/
// let datos1 = new Array(true, false, 1, -3, "Hola", 'Saludo', function(){}, [1, 2], null); // object
let datos = [true, false, 1, -3, "Hola", 'Saludo', function(){}, [1, 2], null]; // object

let users = [
    { id: 1, name: 'Luis'},
    { id: 2, name: 'Hugo'},
    { id: 3, name: 'Paco'},
]

//users[2].name

let frutas = ['Pera', 'Manzana', 'Uva', 'Sandia', 'Melon', 'Banana']; // object
//frutas[3];

function saludo(){ // Hoisting
    let nombre = 'Luis';
    console.log(nombre);
} // function 

saludo();


const saludo2 = function(){
    
}
saludo2();

const saludo3 = (callbackfn) => {

}

saludo3(() => {});

saludo3(function(){

})

function suma(a, b){
    return a + b;
}

const resta = (a, b) => a - b;

const multiplicar = (a, b) => {
    return a * b;
}

frutas.map((valor, index, frutas) => {
    let nombre = "Pedro";
    console.log(valor)
    console.log(index)
    console.log(frutas)
})