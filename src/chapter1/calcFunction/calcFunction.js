var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Substract"] = "sub";
    Operator["Multiply"] = "mult";
    Operator["Divide"] = "Div";
})(Operator || (Operator = {}));
var Calc = function (first, second, op) {
    // this is our main interface
};
var operations = []; // array to handle tupple of the operator and operation type
// added the opeation and incluidng in our array
var add = function (first, second) {
    return first + second;
};
operations.push([Operator.Add, add]);
var substract = function (first, second) {
    return first - second;
};
operations.push([Operator.Substract, substract]);
var multiply = function (first, second) {
    return first * second;
};
operations.push([Operator.Multiply, multiply]);
var divide = function (first, second) {
    if (second === 0) {
        throw new Error("Cannot divide by zero");
    }
    return first / second;
};
operations.push([Operator.Divide, divide]);
// Implement the calculator function, using the operations array to find the correct tuple by the Operator provided, and then using the corresponding Operation value to do the calculation
var calculator = function (first, second, op) {
    var tuple = operations.find(function (tpl) { return tpl[0] === op; });
    var operation = tuple[1];
    var result = operation(first, second);
    return result;
};
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Substract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
