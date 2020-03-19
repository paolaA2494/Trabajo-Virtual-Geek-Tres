'use strict';

function precio (a) {
    const iva = a*0.21;
    const total = iva + a;
    const result = "Precio sin IVA: " +a + " IVA: " +iva + " y Total: " +total;
    return result;
}

console.log(precio(10));