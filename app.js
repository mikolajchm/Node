const fs = require('fs');

const genders = {
    1: 'M',
    2: 'W'
};

const maleNames = {
    1: 'Adam',
    2: 'Jurek',
    3: 'Alex',
    4: 'Max',
    5: 'Mikolaj'
};

const femaleNames = {
    1: 'Ola',
    2: 'Nikola',
    3: 'Agnieszka',
    4: 'Agata',
    5: 'Kinga'
};

const lastNames = {
    1: 'Nowak',
    2: 'Kowalczyk',
    3: 'Małysz',
    4: 'Kubica',
    5: 'Chrobry'
};

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


const people = [];

const myObject = {
    genders: genders,
    maleNames: maleNames,
    femaleNames: femaleNames,
    lastNames: lastNames
};


let i = 0;

while (i < 19){
    const gender = randChoice(Object.values(genders)); 
    const firstName = (gender === 'M') ? randChoice(Object.values(maleNames)) : randChoice(Object.values(femaleNames)); 
    const lastName = Object.values(lastNames)[Math.floor(Math.random() * Object.values(lastNames).length)]; 
    const age = Math.floor(Math.random() * 61) + 18; 
    
    const person = {
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    
    
    people.push(person);
    
    i++;
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File has been successfully generated! Check people.json");
    }
});
module.exports = myObject;