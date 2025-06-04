// Creating an object with firstname and lastname pr`operties

const person = {
    firstname: 'ALENUI',
    lastname: 'ROVIS',
    };


// Creating an object with firstname, lastname, and age properties
interface Person {
    firstname: string;
    lastname: string;
    age?: number; // optional property
}

/* Notice the question mark (?) next to the age variable name. That denotes that that property 
is in fact optional. An object does not have to have an age property in order to be a
Person object. However, if it does have an age property, that property has to be a
number. The two other properties (firstName and lastName) are mandatory. */

const person2: Person = {
    firstname: 'ALENUI',
    lastname: 'ROVIS',
};

person2.age = 30 // Adding the age property



//////////////////////////////

 function showFullName (person2: Person) {
console.log(`${person2.firstname} ${person2.lastname} ${person2.age} ` )
}

showFullName(person2)


////////////////////////////

// We can also define a function that will take two strings, and return a new object that fits the Person interface:
function makePerson (name: string, surname: string): Person {
    const result = {
        firstname: name,
        lastname: surname
    }
        return result;
}
const babbage = makePerson("Charles", "Babbage");
showFullName(babbage);