function snippet (text:string, length:number){
    if(text.length<length){
        return text
    }

    const ellipsis = "...";
    let result = text.slice(0, length-ellipsis.length);

    const lastSpace = result.lastIndexOf(" ");
    result= `${result.slice(0, lastSpace)}${ellipsis}`;

    return result
}

// correct call and usage
const resultOne = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
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