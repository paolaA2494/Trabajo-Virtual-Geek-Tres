'use strict';
const geekGirl1 = {
 name: 'Susana',
 age: 34,
 profession: 'Periodista',
 distance: 50,
 showBio: () => {
    return alert(`Mi nombre es  ${geekGirl1.name}, tengo  ${geekGirl1.age}  años y soy  ${geekGirl1.profession}`);
}};

console.log(geekGirl1.showBio());

const geekGirl2 = {
    name: 'Rocío',
    age: 25,
    profession: 'Actriz',
    showBio: () => {
        return alert(`Mi nombre es  ${geekGirl2.name}, tengo  ${geekGirl2.age}  años y soy  ${geekGirl2.profession}`);
    }
};

   console.log(geekGirl2.showBio());