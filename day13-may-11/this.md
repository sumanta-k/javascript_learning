### this keyword ###

---
As you can see 
```js
const robot ={
    model : '1EV78V2',
    energyLevel : 100,
    provideInfo(){
        // we are trying to return from this function
        return `I am MODEL and my current energy level is ENERGYLEVEL.`;
    }
}
```
The above function `provideInfo()` which is inside the `robot` **object** will give `I am MODEL and my current energy level is ENERGYLEVEL.` as it's output.

but we want `I am 1EV78V2 and my current energy level is 100.` this ,with their respective values.

so How we can get that within that object, Here `this` keyword comes into handful. by using this you can access `object's properties inside that object`.

> Here how you can do that

instead of MODEL use `this.model` and instead of using ENERGYLEVEL use `this.energyLevel` this will take the object's properties within that object.
```js
const robot ={
    model : '1EV78V2',
    energyLevel : 100,
    provideInfo(){
        // we are trying to return from this function
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    },
}
```


