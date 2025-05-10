/* pass by reference */
let spaceship = {
  homePlanet: "Earth",
  color: "red",
};

console.log(spaceship);

let paintIt = (object) => {
  object.color = "glorious gold";
};

paintIt(spaceship);
console.log(spaceship);

let tryReAssignment = (object) => {
  object = {
    identified: false,
    "transport type": "flying",
  };
  // console.log(object);
};

// now pass the spaceship through tryReAssignment function

const res = tryReAssignment(spaceship);
console.log("result");
console.log(res);
/* output is undefined cause function isn't returning anything */

console.log(spaceship);
// it didn't work the way i had expected
// it didn't change

// let's try regular reassignment
spaceship = {
  identified: false,
  "transport type": "flying",
};

console.log(spaceship);
// it is working
