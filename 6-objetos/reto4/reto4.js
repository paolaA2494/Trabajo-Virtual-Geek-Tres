function widhtContentBox (borderBox, width, padding, border) {
    if (borderBox){
        console.log(`El ancho del contenido es: ${width}px`);
    } else {
        console.log(`El ancho del total de la caja es: ${width+padding+border}`);
    }
}
widhtContentBox(false, 30,20,5);