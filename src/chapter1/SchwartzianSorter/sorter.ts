interface SPerson {
  firstName: string;
  lastName: string;
}

let count = 0; // will be used to determine number of times the function is called
function getFullName(Sperson: SPerson) {
  count++;
  return `${Sperson.firstName} ${Sperson.lastName}`;
}

let programmers: SPerson[] = [
  { firstName: "Donald", lastName: "Knuth" },
  { firstName: "Charles", lastName: "Babbage" },
  { firstName: "Barbara", lastName: "Liskow" },
  { firstName: "Lars", lastName: "Bak" },
  { firstName: "Guido", lastName: "Van Rossum" },
  { firstName: "Anders", lastName: "Hejslberg" },
  { firstName: "Edsger", lastName: "Dijkstra" },
  { firstName: "Brandon", lastName: "Eich" },
];

// Naive sorting function

function naiveSort(persons: SPerson[]): SPerson[] {
  return persons.slice().sort((first, second) => {
    const firstFullName = getFullName(first);
    const secondFullName = getFullName(second);
    return firstFullName.localeCompare(secondFullName);
  });
}

//  The Schwartzian transform

function schwartzSortPersons(persons: SPerson[]): SPerson[] {
  // using the map function to transform each element into a tuple
  const tuples: [SPerson, string][] = persons.map((person) => [
    person,
    getFullName(person),
  ]);
  tuples.sort((first, second) => first[1].localeCompare(second[1]));
  const result = tuples.map((tuple) => tuple[0]);
  return result;
}

count = 0;
const sortedNaive = naiveSort(programmers);
console.log(sortedNaive);
console.log(
  `when called using the naive apprach, the function was called ${count} times`
);

count = 0;
const sortedSchwartz = schwartzSortPersons(programmers);
console.log(sortedSchwartz);
console.log(
  `when called using the Schwartzian transform apprach, the function was called ${count} times`
);
