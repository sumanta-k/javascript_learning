/* my getter */
const myGetter = {
  name: "sumanta",
  age: 23,
  get myFunc() {
    return `My name is ${this.name} and i'm ${this.age} years old.`;
  },
};

const ans = myGetter.myFunc;
console.log(ans);
