/* test */
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  // assignment 1
  // make a getter function whose name should be `energyLevel` and create a if condition where you've to check whether `typeof _energyLevel is number or not`
  // if output is number type then return energyLevel of that object.

  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${robot._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

// assignment 2
// Now log the function
// As we know that it is getter method , so no need to use () parenthesis
// And we are returning string which we can simpliy log() to our console
console.log(robot.energyLevel);
