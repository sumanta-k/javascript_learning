/* Arrow Function and this keyword */
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  // by default arrow function uses a global object that's why `this` keyword is giving undefined value
  // remove arrow function style and it will work
  /*
   
  diet: () => {
    console.log(this.dietType);
  },

  */
  diet() {
    console.log(this.dietType);
  },
};

goat.diet();
