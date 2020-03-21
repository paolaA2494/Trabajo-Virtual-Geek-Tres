
const membersA= [
  {
    name: 'Maria',
    age: 29,
    profession: 'Diseñadora'
  },
  {
    name: 'Lucia',
    age: 31,
    profession: 'Ingeniera Química'
  },
  {
    name: 'Susana',
    age: 34,
    profession: 'Periodista'
  },

  {
    name: 'Rocio',
    age: 25,
    profession: 'Actriz'
  },

  {
    name: 'Inmaculada',
    age: 21,
    profession: 'Diseñadora'
  }
];

console.log(membersA);

let conteo = countGeekGirls(membersA);

function countGeekGirls(membersA){
     
     for (i=0; i<membersA.length; i++){    
    }
    return i
};

console.log('La cantidad de chicas que hacen parte de la GeekGirls son: '+conteo);

let  promedio = averageAge(membersA);

function averageAge(membersA){
  var suma = 0;
   for (i=0; i<membersA.length; i++){
         suma+= (membersA[i].age);
}
   return suma/(membersA.length);
}

console.log('El promedio de la edad de las geek girls es de: ' +promedio + 'años');

let joven = theYoungest(membersA);

function theYoungest(membersA){
  var geekMenor= '';
  for (i=0; i<membersA.length; i++){

    if (membersA[i].age < 35){

     geekMenor = membersA[i].name;

    }
  } return geekMenor

}
console.log('La menor del grupo es: ' +joven);


const countDesigners=membersA.filter(item=>{
  return item.profession==='Diseñadora';},0
  
  )
  console.log ('El numero de diseñadoras es: '+countDesigners.length);