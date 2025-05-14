const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,

  get numOfSensors() {
    if (typeof _numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "sensors are currently down.";
    }
  },

  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot.numOfSensors = 100;
// check the value of numOfSensor using ** get **
console.log(robot);
// console.log(robot.numOfSensors);
