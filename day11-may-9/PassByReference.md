Assume that there is an object  and you want to update a `key's value`.
let's take an object.

```js
let spaceship = {
homePlanet : "Earth",
color : "red"
};
```
---
Now you want to change the `color` from **red** to  `glorious gold`.
So how we can do it through a `function`.
Let's see.

```js
let paintIt=(obj)=>{
obj.color = "glorious gold";
```
Now let's see when we pass the `object` through this `paintIt` function, is it truly going to change the `key` **color** property or not.

```js
paintIt(spaceship);
console.log(spaceship);
```
Well indeed it has changed the color from ~~red~~ to **glorious gold**.

---
Here is the result
```json
{ homePlanet : 'Earth', color : 'red' }
{ homePlanet : 'Earth', color : 'glorious gold' }
```

Now let's see what is happening over here.The function `paintIt` is taking an `object` as a `parameter` and adding the **value** of  *color* to **glorious gold** and how it is doing.
```js
object.key = value ;
```
Because of this it is directly changing the `referenced object's` property.

---
Let's give it a try to modify the whole object via function.
```js
let tryReAssignment = (obj)=>{
obj = {
identified = false,
"transport type" = "flying"
}
console.log(obj);
};
```
Now call that function with `spaceship` **object**.

```js
tryReAssignment(spaceship);
```
Did it work the way you expected ? Do the `console.log(spaceship);` and see .

It didn't work the **spaceship** object still the same. but why ? 
Now let's take a peek over our function's code.

`(obj)` this is taking our `objects reference` but inside the body it is using as a new `variable` , it doesn't know about that there is an `object` which is outside of his `scope` and the **function's body** is treating it as a **new variable**. if you do `console.log(obj);` , inside of that `tryReAssignment` function , it will show you that the **object's** property has been changed. But in reality that is a **new variable** which only knows inside of that **function's body** not the *real object* which is outside.

So it is not changing the `real object`.

Let's Try to modify it

```js
let modify = (obj) =>{
obj.identified = false,
obj["transport type"] = "flying"
};
```
Now call it .
```js
modify(spaceship);
```
Well it will add `identified` and `transport type` property to **`spaceship`** object.

So this is how `object's` works when it is being passed as a reference.

