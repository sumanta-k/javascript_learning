/* for....in */

const bunchOfPeople = {
  crew: {
    doctor: {
      name: "happy",
      age: 55,
    },
    teacher: {
      name: "mikey",
      age: 25,
    },
    biker: {
      name: "thomas",
      age: 45,
    },
  },
};

for (let crewMember in bunchOfPeople.crew) {
  console.log(`${crewMember} is ${bunchOfPeople.crew[crewMember].name}`);
}
