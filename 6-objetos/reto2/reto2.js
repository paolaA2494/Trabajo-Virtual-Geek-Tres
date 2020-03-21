'use strict';
const geekGirl1 = {
 name: 'Susana',
 age: 34,
 profession: 'Periodista',
 distance: 50,
 run: (phrase) => `Estoy  ${phrase}`,
 runAMarathon : (distance) => `Estoy corriendo ${distance}`,
};
console.log(geekGirl1.run('corriendo'));
console.log(geekGirl1.runAMarathon(geekGirl1.distance) + ' Kilometros');