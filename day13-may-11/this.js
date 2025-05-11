/* this keyword in javascript */
const goat = {
  dietType: "herbivore",
  makesound() {
    console.log("baa");
  },
  diet() {
    // console.log(goat.dietType);

    // console.log(goat[dietType]);
    /* dietType is not defined error */ /* cause it needs "" double quotation */

    // console.log(goat["dietType"]);

    // console.log(this["dietType"]);
    console.log(this.dietType);
  },
};

goat.makesound();

const addMe = (obj) => {
  obj.dance = true;
};

addMe(goat);
goat.diet(); /* Reference error diet type is not defined */
// it is strange , why is dietType not defined even though it's a property of goat object , because inside the scope of the .diet() method , we don't automatically have access to other properties of the goat object.

/* Here this keyword comes into play , if we change .diet() method to use this, which will look like  this.dietType */

/*
 const goat = {
dietType : 'herbivore',
makesound(){
  console.log("baa");
},
  diet(){
console.log(this.dietType);
 }
  }; 
*/

// The this keyword references the calling object which provides access to the calling ojbect's properties.
