/* test for bracket notation */
// Assume that there is spaceship and it's detail is in object format
// Example :

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

// now there is a variable where we have stored a key name

let propName = "Active Mission";

// let's use the bracket notation to access the value of 'Active Mission'
// from the spaceship object .
// now let's create a variable ` isActive ` and assign the spaceship's
// 'Active Mission' property to it.

const isActive = spaceship["Active Mission"];

// The propName variable has provided , now access the value via propName
// and print it to the console

console.log(spaceship[propName]);
