const boton = document.querySelector('.btn');
const select = document.querySelector('.select');
const mensaje = document.querySelector('.mensaje');
const body = document.getElementById('body');

const estadoAnimo = {};
estadoAnimo.estadoAlegre = function() {
    mensaje.innerHTML = ":)";
};
estadoAnimo.estadoTriste = function() {
    mensaje.innerHTML = ":(";
};
estadoAnimo.cambiarColorAmarillo = function() {
    body.classList.remove('bodyimpar');
    body.classList.add('body');
};
estadoAnimo.cambiarColorNaranja = function() {
    body.classList.remove('body');
    body.classList.add('bodyimpar');
};
estadoAnimo.generarNumero = function() {
    let numeroAleatorio = Math.floor(Math.random() * 101);
    console.log(numeroAleatorio);
    if (numeroAleatorio % 2) {
        this.cambiarColorNaranja();
    } else {
        this.cambiarColorAmarillo();
    }
};

boton.addEventListener('click', function cambiarEstadoAnimo() {
    if (select.selectedIndex === 0) {
        estadoAnimo.estadoAlegre();
    } else if (select.selectedIndex === 1) {
        estadoAnimo.estadoTriste();
    }
    estadoAnimo.generarNumero();
});