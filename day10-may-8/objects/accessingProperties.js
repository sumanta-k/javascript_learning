/* Accessing Properties from Objects */
// There are two ways we can access an object’s property. Let’s explore the first way— dot notation, .

let spaceship = {
  homePlanet: "Earth",
  "color love": "silver",
  id: 5,
};

// With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

console.log(spaceship.homePlanet);
console.log(spaceship["color love"]);
console.log(spaceship.id);

// If we try to access a property that does not exist on that object, undefined will be returned.

console.log(spaceship.icecream);

spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
let fuel = spaceship["Fuel Type"];

console.log(crewCount + " " + planetArray + " " + fuel);
