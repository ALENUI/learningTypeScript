function snippet(text, length) {
    if (text.length < length) {
        return text;
    }
    var ellipsis = "...";
    var result = text.slice(0, length - ellipsis.length);
    var lastSpace = result.lastIndexOf(" ");
    result = "".concat(result.slice(0, lastSpace)).concat(ellipsis);
    return result;
}
// correct call and usage
var resultOne = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
console.log(resultOne);
// // missing second parameter
// const resultTwo = snippet("Lorem ipsum dolor sit amet");
// console.log(resultTwo);
// // The first parameter is of incorrect type
// const resultThree = snippet(false, 40);
// console.log(resultThree);
// // The second parameter is of incorrect type
// const resultFour = snippet("Lorem ipsum dolor sit amet", false);
// console.log(resultFour);
// // The result is assigned to a variable of incorrect type
// var resultFive: number = snippet("Lorem ipsum dolor sit amet", 20);
// console.log(resultFive);
