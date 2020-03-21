'use strict';

const button = document.querySelector('.btn');
const input = document.getElementById('input'); 
button.addEventListener('click',(e)=>{   
    console.dir(input);   
    console.dir(input.value); 
});
