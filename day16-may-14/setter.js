/* setter or set keyword in javascript */
const person = {
  _age: 37,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must assign a number to age");
    }
  },
};

person.age = 40;
console.log(person._age);
person.age = "50";

// we can reassign
person._age = "forty-five";
console.log(person._age);
