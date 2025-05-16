/* factory function */
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
};

const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");

// console.log(ghost);
//
// const answer = ghost.scare();
// console.log(answer);
// console.log(typeof answer);
