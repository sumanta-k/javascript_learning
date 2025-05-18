/* builtin object methods */
// Object.assign
// Object.entries
// Object.keys

const robot = {
  model: "SAL-1000",
  mobile: true,
  sentiment: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

const robotkeys = Object.keys(robot);
console.log(robotkeys);

const robotEntries = Object.entries(robot);
// console.log(Object.values(robotEntries));
console.log(robotEntries);

const newRobot = Object.assign(
  {
    laserBlaster: true,
    voiceRecognition: true,
  },
  robot,
);

console.log("new robot");
console.log(newRobot);

console.log(robot.hasOwnProperty("mobile"));
