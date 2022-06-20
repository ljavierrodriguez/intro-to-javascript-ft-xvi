/* 

for(){

}

for( in ) {

}

for ( of ) {

}

while (){

}

do {


} while()

*/

let frutas = ['Pera', 'Manzana', 'Uva', 'Sandia', 'Melon', 'Banana'];

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let indice in frutas) {
    console.log(indice, "=>", frutas[indice]);
}

for (let fruta of frutas) {
    console.log(fruta);
}


let i = 1;
while (i <= 10) {
    console.log(i);
    i++; // i += 1; i = i + 1;
}


let j = 0;
while (j < frutas.length) {
    console.log(frutas[j]);
    j += 1;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k == 10)



for (let i = 1; i <= 10; i++) {
    console.log("Tabla del " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + ": " + (i * j));
    }
}


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}