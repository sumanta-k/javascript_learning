/* getter in javascript */
// getter are methods that get and return the internal properties of an object.
const person = {
  _firstName: "john",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or last Name";
    }
  },
};

const ans = person.fullName;
console.log(ans);

// const newAns = person.fullName();
// console.log(newAns);

/* it will tell you that `person.fullName()` is not a function */
// whenever you want to access the function fullName , make sure that you don't use () parenthesis , cause it will make trouble , cause we have used `get` keyword .

/*
 * getters can perform an action on the data when getting a property.
 * getters can return different values using conditionals.
 * in a getter, we can access the properties of the calling object using `this`.
 */
