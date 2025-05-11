/* you have to solve it using this keyword */
// create a new object and name it **robot** and inside of that object , put
// model property and assign it '1E78V2' and another property energyLevel and assign it 100

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  // add a function provideInfo
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

// console.log(robot);
console.log(robot.provideInfo());
