// An enum is a set of predefined values out of which any other value is not valid

enum suits {
  hearts,
  diamond,
  spades,
  clubs,
}

// using the values

let trumpSuit = suits.hearts;
// if we try to assign another value not from suits, typescript will flag
// trumpSuit = "hello"

// with Enum, type script creates an object of the values, assigning values and maping to the values

/*
{
'0': 'Hearts',
'1': 'Diamonds',
'2': 'Clubs',
'3': 'Spades',
Hearts: 0,
Diamonds: 1,
Clubs: 2,
Spades: 3
}

*/

// TypeScript will automatically assign numbers starting with zero to the options
// provided and add a reverse mapping as well, so if we have the option, we can get
// the value, but if we have the value, we can map to the option as well. We can also
// explicitly set the provided numbers as well:

// enum Suit {
//   Hearts = 10,
//   Diamonds = 20,
//   Clubs = 30,
//   Spades = 40,
// }

// We can also use strings instead of numbers, with syntax like this:
enum Suit {
  Hearts = "hearts",
  Diamonds = "diamonds",
  Clubs = "clubs",
  Spades = "spades",
}

/*
These enums are called string-based enums, and they compile to an object like this:
{
Hearts: 'hearts',
Diamonds: 'diamonds',
Clubs: 'clubs',
Spades: 'spades'
}
*/
