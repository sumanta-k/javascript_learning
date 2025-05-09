### methods ###
---
We all have been using **`console`**, which is an object though and their is a property which is `.log()`. Well that's actually a method also, which means 

`Math` is an object and it's method or you could say properties are `.floor()` and `.ceil()`. 
> so these all are **`methods`** ,which we have been using countless times.

There is two to create a function inside the `object`, one is `key name` and then put `:` the usual way to separate the **key** and **value** , and after that it will be your  **anonymous** function, so use `function` keyword and after that `()` parenthesis. And the second one  is `key name` and after that **remove** `:` and `function` keyword.
take a look over here
```js
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
```
---
Now how to get those key's value. Remember that those are functions which are kept inside the `spaceship` object.

Now let's take a peek how to retrieve those values. Well we just need to invoke them : first we've to write the `object name` after that `.` notation and then `key name` and last use the `()` parenthesis to call the function.
They are simply logging the value to the console no need to store in other variable.
```js
alienship.invade();
alienship.print();
```
And there is an `id` inside the `alienship` **object**.
```js
const id = alienship.id ;
console.log(id);              /* Output 3 */
```
