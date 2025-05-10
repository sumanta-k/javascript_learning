let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// make the fuel to 'avocado oil' by function
const greenEnergy = (obj) => {
  obj["Fuel Type"] = "Avocado oil";
};

console.log(spaceship);

greenEnergy(spaceship);

console.log(spaceship);

// make a disabled key for object and add it via function

const remotelyDisable = (obj) => {
  obj.disable = true;
};

remotelyDisable(spaceship);
console.log(spaceship);
