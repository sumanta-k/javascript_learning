/* property Assignment */

// ignore the variable assignment , you can add different object variable
// but i was doing commenting over a specific thing and was running the code
// your code will work properly but make sure do not declare a same variable again and again , which i've done, it was just to get the concept
// so Everything which have discussed over here is applicable.
// How to modify existing object's key value

spaceship.color = "gold";
spaceship["Fuel Type"] = "Vegetable oil";

// if the property already exist on the object, whatever value it held before
// will be replaced with the newly assigned value.

// if there was  no property with that name , a new property will be added to the object
const spaceship = { type: "shuttle" };
spaceship = { type: "alien" }; /* typeError assignment to constant variable */

/* Adding into object */
spaceship.type = "alien";
spaceship.speed = "Mach 5";
console.log(spaceship);

const spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  mission: "Explore the universe",
};
/* delete a specific key value pair */
delete spaceship.mission;
delete spaceship["Fuel Type"];
console.log(spaceship);
