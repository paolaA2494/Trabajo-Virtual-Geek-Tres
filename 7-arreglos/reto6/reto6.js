'use strict';
const input1=document.getElementById('input1');
const input2=document.getElementById('input2');
const button=document.querySelector('.clicked');
let acum='';
button.addEventListener("click",(e)=>{
  event.preventDefault()
  const arrayInput=[];
  arrayInput[0]=(input1.value);
  arrayInput[1]=(input2.value);
  for (const i of arrayInput) {
    acum=acum+`<br>¡A mí también me encantó ${i}!`;
    console.log (`¡A mí también me encantó ${i}!`);  
  }
  document.querySelector(`.fav`).innerHTML=acum; 
});