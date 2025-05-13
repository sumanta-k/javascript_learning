/* nested object */

const obj = {
  name: "happy",
  age: 23,
  // another object inside
  newObj: {
    anime: "bleach",
    get myFunc() {
      return `${obj.name} has watched ${this.anime}.`;
      // here if you want to access the value "happy" which is `obj.name` inside the another object , then you have to access it via `obj.name` this , otherwise if you try to access via `this.name` , it will give undefined cause `this` keyword is related within the object , where it is present not the outside object of it.
    },
  },
};

const ans = obj.newObj.myFunc;
console.log(ans);
