/* nested objects */
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

// create a variable and assign it to captains favorite food array's 0 index
const capFave = spaceship.crew.captain["favorite foods"][0];

// make the passengers null value to an array of objects
spaceship.passengers = [
  { name: "ichigo", watched: true, review: "good" },
  { name: "itachi", watched: true, review: "good" },
];

console.log(spaceship.passengers[0].name);
