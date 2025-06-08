// Standard fucntion type is determined from the types of the parameters but its also possible to define a type using classes

// class definition
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age?: number
  ) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// with the class created, we can make objects and use methods on them
const Nperson = new Person("ALENUI", "ROVIS");
console.log(Nperson.getFullName());

// instead of using a class, the interface construct can be used

// Unlike classes, which compile to JavaScript classes or constructor functions
// (depending on the compilation target), interfaces are a TypeScript-only construct.
// When compiling, they are checked statically, and then removed from the
// compiled code.

/*

interface Person{
firstName: string
lastName: string
age?: number}
*/
