let persona = {
    nombre: 'Luis',
    apellido: 'Rodriguez',
    edad: 40,
    soltero: true,
    saludo: function () {

    }
}



console.log(persona.nombre);
console.log(persona.apellido);


let { nombre, apellido } = persona;
console.log(nombre);
console.log(apellido);


let users = [
    { id: 1, name: 'Luis' },
    { id: 2, name: 'Hugo' },
    { id: 3, name: 'Paco' },
]

let [user1, user2] = users.filter((user) => user.id === 15 || user.id === 75);

console.log(user2);



