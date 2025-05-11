/* this keyword in javascript */
const goat = {
  dietType: "herbivore",
  makesound() {
    console.log("baa");
  },
};

goat.makesound();

const addMe = (obj) => {
  obj.dance = true;
};

addMe(goat);
console.log(goat);
