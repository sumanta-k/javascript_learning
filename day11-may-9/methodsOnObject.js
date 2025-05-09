/* methods on object */

const alienship = {
  invade: function () {
    console.log(
      "Hello! We have come to dominate your planet. Instead of earth, it shall be called New Xaculon.",
    );
  },
  print() {
    console.log("just printed ");
  },
  id: 3,
};

console.log(alienship);

// how to call get those key's value
// make sure to add parenthesis cause they are methods
alienship.invade();
alienship.print();

console.log(alienship.id);
