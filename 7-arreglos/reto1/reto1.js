'use strict';

const movies = [
    'Th Origin',
    'Titanic',
    'sing',
];
movies [3] =('Juego de Gemelas');
movies [0]= ('Juego de Gemelas');


const nuevaLongitud = movies.push('Juego de Gemelas');
const elementosEliminados = movies.splice(0, 1);


console.log(movies);
console.log(movies.length);
console.log(nuevaLongitud);
console.log(elementosEliminados);
console.log(movies.length);
console.log(movies);