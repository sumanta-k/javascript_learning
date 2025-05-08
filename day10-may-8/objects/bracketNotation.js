/* bracket Notation */

// We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

// The Second way to access a key's value  is by using bracket Notation, []

console.log(["A", "B", "C"][0]);
// in the above scenario , where we have an array and we are accessing 0'th element by explicitly accessing it

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};

console.log(spaceship["Fuel Type"]); /* return Turbo Fuel */
console.log(spaceship["Active Duty"]); /* return true */
console.log(spaceship["numCrew"]); /* return 5 */
console.log(spaceship.numCrew); /* return 5 */

console.log(spaceship["!!!!!"]); /* return undefined */

// First Assignment
let returnAnyProp = (objectName, propName) => objectName[propName];
let returnValue = (objectName, keyName) => objectName[keyName];

// in the above function , we have taken an object and that object's key name as argument and we are passing it and in the end we are returning the value which is situated at that objects key name.

const res1 = returnAnyProp(spaceship, "homePlanet"); /* return Earth */

// const res2 = returnValue(spaceship, "numCrew");
// i tried to pass key name as a string but it didn't work why , because i was passing the key name as a string and in the function body i was returning
// by dot notation , and we all know that whenever we are using dot notation make sure that you don't have to use any " " , cause it doesn't work with dot notation.

/* solution */
// const res2 = returnValue(spaceship, numCrew);

// see that this is also not working buy why right ???
// The answer is our function doesn't know what is the value of numCrew
// that's why it is throwing us error
// Then how to solve it
//
// Here is a way [ make a variable and store over there and pass it]

/* 
const passedValue = "numCrew";
const res2 = returnValue(spaceship, passedValue);
 i thought that this will work but it didn't but this time we have passed it as a string , then why didn't it get us answer

 the answer of this question is that : see the functions return statement 
 there we have written that return type is object.key_name 
 in our case it is passing as object."key_name" , which is wrong

 Then what to do now
  Solution is : in our function body we have to chage the code from 
  object.key_name to 
  
  object[key_name]

*/
const res2 = returnValue(spaceship, "numCrew");
// and make sure the key should be passed as a string
// or
// we could have done put the "numCrew" in a variable and pass that variable
const passedValue = "Active Duty";
const res3 = returnValue(spaceship, passedValue);

console.log("result first");
console.log(res1);

console.log("result second");
console.log(res2);

console.log("result third");
console.log(res3);

const myCustom = {
  3: "bleach",
  2: "naruto",
};

console.log(myCustom);
// when i tried to log out the value of myCustom object it was printing the keys with in string

console.log(myCustom["3"]);
// when i tried to print via [] , it was working

// but when it comes to dot notation
/*
 
console.log(myCustom.3);
console.log(myCustom."3");

*/
// they were not working

// that's why we should use [] notation whenever the key is number or spaces or any special letter
