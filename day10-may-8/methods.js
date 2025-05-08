/* .forEach  return undefined */
const arr1 = ["ichigo", "naruto", "onepiece"];

arr1.forEach((anime) => {
  console.log(`${anime} is my favorite anime.`);
});

/* .map return type is array */
// it doesn't change the original array but do stuff with the real array elements

const numbers = [10, 20, 30, 40];
const multipleByTwo = numbers.map((number) => {
  return number * 2;
});

console.log(numbers);
console.log(multipleByTwo);

/* .reduce */
// remember when you have an array with bunch of numbers , take it price of list items , and you just want the sum of the elements which is present inside that array

// instead of giving an array it just give the value
// it means return type is not array but instead it is a number

const itemsPrice = [10, 20, 33, 44, 55];
const sumOfItems = itemsPrice.reduce((acc, cur) => {
  return acc + cur;
  // you can give starting accumulator value
  // by default it takes the arrays first element as accumulator
  // here 100 has passed as accumulator
}, 100);

console.log(itemsPrice);
console.log(sumOfItems);

/* .filter is another method */
// return type is array
// it checks whether the condition which has been provided , is it validating that check , then it will put the value inside otherwise it won't

// Create an array where elements must be greater than 7

const checkArray = [1, 2, 3, 4, 5, 6, 10, 20, 30, 40];

const greaterThanSevenArray = checkArray.filter((element) => {
  return element > 7;
});

console.log("Greater Than 7");

console.log(checkArray);
console.log(greaterThanSevenArray);
