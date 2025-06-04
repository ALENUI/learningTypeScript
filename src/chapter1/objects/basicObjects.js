// Creating an object with firstname and lastname pr`operties
var person = {
    firstname: 'ALENUI',
    lastname: 'ROVIS',
};
/* Notice the question mark (?) next to the age variable name. That denotes that that property
is in fact optional. An object does not have to have an age property in order to be a
Person object. However, if it does have an age property, that property has to be a
number. The two other properties (firstName and lastName) are mandatory. */
var person2 = {
    firstname: 'ALENUI',
    lastname: 'ROVIS',
};
person2.age = 30; // Adding the age property
//////////////////////////////
function showFullName(person2) {
    console.log("".concat(person2.firstname, " ").concat(person2.lastname, " ").concat(person2.age, " "));
}
showFullName(person2);
