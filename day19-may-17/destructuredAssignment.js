/* destructured assignment */
const vampire = {
  name: "Dracula",
  residence: "Transylvania",
  preferences: {
    day: "stay inside",
    night: "satisfy appetite",
  },
};

// const residence = vampire.residence;
// console.log(residence);

/*  we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. */

const { residence } = vampire;
console.log(residence);

/* we can destructured within the nested object */
const { day } = vampire.preferences;
console.log(day);
