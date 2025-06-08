// Standard fucntion type is determined from the types of the parameters but its also possible to define a type using classes
// class definition
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
// with the class created, we can make objects and use methods on them
var Nperson = new Person("ALENUI", "ROVIS");
console.log(Nperson.getFullName());
