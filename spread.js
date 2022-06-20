let users = [
    { id: 1, name: 'Luis' },
    { id: 2, name: 'Hugo' },
    { id: 3, name: 'Paco' },
]


//let users2 = [...users, {id: 4, name: 'Monica'}];
let users2 = users.concat({ id: 4, name: 'Monica' });
console.log(users2);


let persona = {
    nombre: 'Luis',
    apellido: 'Rodriguez',
    edad: 40,
    soltero: true,
    saludo: function () {

    }
}

let { nombre, apellido, ...resto } = persona;

console.log(nombre, apellido, resto);


function saludo({ nombre, apellido }) {
    return `Hola, ${nombre} ${apellido}`;
}

console.log(saludo(persona));


function suma(...params) {
    return params.reduce((total, valor) => total + valor, 0);
}

console.log(suma(1, 2, 3, 4, 5, 6))


let a = 5;
let b = 10;

/* let aux = a;
a = b;
b = aux; */

let [a1, b1] = [b, a];
