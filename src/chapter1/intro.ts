function squares(array: number[]) {
  const result = array.map((x) => x * x);
  return result;
}

let variable: number;

variable = 5;

let var2 = 3;
// var2="number"; // This will cause an error because var2 is inferred as a number

function Add(x: number, y: number) {
  return x + y;
}

add(5, 6); // This will work
// add(1,2,3) // This will cause an error because the function expects exactly two arguments
