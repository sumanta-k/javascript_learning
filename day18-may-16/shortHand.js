/* property value short hand */
/* ES6 introduced some new shortcuts for assigning properties to 
 Variables are used to store a piece of data at a named location in memory.
variables known as destructuring.

In the previous exercise, we created a factory function that helped us create 
objects . We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it. */
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const newRobot = robotFactory("P-501", false);

console.log(newRobot);
console.log(newRobot.model);
console.log(newRobot.mobile);
