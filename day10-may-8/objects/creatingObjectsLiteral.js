/* creating Object Literals */

// objects can be assigned to variables just like any Javascript type. We use
// { } curly braces to designate an object literal.

let spaceship = {}; /* spaceship is an empty object  */

// We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.

// A key’s value can be of any data type in the language including functions or other objects.

// We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings , but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:

spaceship = { "Fuel Type": "diesel", color: "silver", id: 5 };
console.log(spaceship);

// The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character.

/* ASSIGNMENT 1 */
// Make a faster spaceship that has fuel Type : 'Turbo Fuel' and color should be the same as previous one which is silver

let fasterShip = { "Fuel Type": "Turbo Fuel", color: "silver" };
console.log(fasterShip);
