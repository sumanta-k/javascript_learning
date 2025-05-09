/* spaceship Test */
const spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth",
};
// imagine there is a spaceship and you want to modify it's color to glorious
// gold
// Then how would you do that ?

// just modify the color key value
spaceship.color = "glorious gold";

// Add some engine to spaceship and write their added number on the object.

spaceship.numEngines = 10;

// delete the secret mission
delete spaceship["Secret Mission"];
console.log(spaceship);
