enum Operator {
  Add = "add",
  Substract = "sub",
  Multiply = "mult",
  Divide = "Div",

  Modulo = "modulo",
}

const Calc = function (first: number, second: number, op: Operator) {
  // this is our main interface
};

type Operation = (x: number, y: number) => number; // type function alias to do two calculations on two numbers, returning a asingle value

const operations: [Operator, Operation][] = []; // array to handle tupple of the operator and operation type

// added the opeation and incluidng in our array
const add = function (first: number, second: number) {
  return first + second;
};
operations.push([Operator.Add, add]);

const substract = function (first: number, second: number) {
  return first - second;
};
operations.push([Operator.Substract, substract]);

const multiply = function (first: number, second: number) {
  return first * second;
};
operations.push([Operator.Multiply, multiply]);

const divide = function (first: number, second: number) {
  if (second === 0) {
    throw new Error("Cannot divide by zero");
  }
  return first / second;
};
operations.push([Operator.Divide, divide]);

const modulo = function (first: number, second: number) {
  return first % second;
};
operations.push([Operator.Modulo, modulo]);

// Implement the calculator function, using the operations array to find the correct tuple by the Operator provided, and then using the corresponding Operation value to do the calculation

/*
//TypeScript is correctly warning you that tuple might be undefined, because .find() returns undefined if no match is found. This is not a bug — it’s a type safety warning (ts(18048)) to prevent a runtime error when trying to access a property on undefined.

const calculator = function (first: number, second: number, op: Operator) {
  const tuple = operations.find(tpl => tpl[0] === op);
  const operation = tuple[1]
  const result = operation(first, second);
  return result;
}
*/

// check if tuple is defined before accessing its value:
const calculator = (first: number, second: number, op: Operator): number => {
  const tuple = operations.find(([operator]) => operator === op);

  if (!tuple) {
    throw new Error(`Operation '${op}' is not supported.`);
  }

  const operation = tuple[1]; // ✅ Safe to access now
  return operation(first, second);
};

console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Substract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));

console.log(calculator(14, 3, Operator.Modulo));