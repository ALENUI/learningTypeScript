var count = 0; // will be used to determine number of times the function is called
function getFullName(Sperson) {
    count++;
    return "".concat(Sperson.firstName, " ").concat(Sperson.lastName);
}
var programmers = [
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
function naiveSort(persons) {
    return persons.slice().sort(function (first, second) {
        var firstFullName = getFullName(first);
        var secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    });
}
//  The Schwartzian transform
function schwartzSortPersons(persons) {
    // using the map function to transform each element into a tuple
    var tuples = persons.map(function (person) { return [
        person,
        getFullName(person),
    ]; });
    tuples.sort(function (first, second) { return first[1].localeCompare(second[1]); });
    var result = tuples.map(function (tuple) { return tuple[0]; });
    return result;
}
count = 0;
var sortedNaive = naiveSort(programmers);
console.log(sortedNaive);
console.log("when called using the naive apprach, the function was called ".concat(count, " times"));
count = 0;
var sortedSchwartz = schwartzSortPersons(programmers);
console.log(sortedSchwartz);
console.log("when called using the Schwartzian transform apprach, the function was called ".concat(count, " times"));
