'use strict';

const numbers1 = [1, 2, 3, 4, 5];
let acumulador1 = 0;
for (let i = 0; i < numbers1.length; i++) {
    acumulador1 += numbers1[i];

}
let media1 = (acumulador1) / 5;
console.log('La media es :  ' + media1);


const numbers2 = [5, 6, 7, 8, 9, 10];
let acumulador2 = 0;
for (let i = 0; i < numbers2.length; i++) {
    acumulador2 += numbers2[i];

}
let media2 = (acumulador2) / 6;
console.log('La media es :  ' + media2);


const numbers3 = [2, 4, 6, 8, 10, 12];
function average(numbers3) {
    var sum = 0;
    var count = numbers3.length;
    for (var i = 0; i < numbers3.length; i++) {
        sum = sum + numbers3[i];
    }
    return sum / count;
}
document.write(average(numbers3));