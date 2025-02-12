"use strict";

// lets take an example

let measureKelvin = function () {
  let measurement = {
    type: "temp",
    unit: "kelvin",

    //3. FIX whenever we take input from user we need the value that returns is always in string so we need to convert it in number
    value: Number(prompt(`Degree celcius: `)),
  };

  // 2)FIND here will get to know the value was string before if we have no converted user inout in number
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// 1)IDENTIFY
console.log(measureKelvin());

// ANOTHER MTHOD FOR LONG COMPLEX CODES IS USING DEBUGGER SOFTWARE
//1 GO TO INsPECT 2 GO TO SOURCES ADD BREAK POINTS RUN THE CODE (RELOAD) AND THE HW THE CODE IS WORKING
// DON'T FORGET TO REMOVE BREAK POINT AFTER DEBUGGING

let Sejal = {
  firstname: "Sejal",
  lastname: "Tirpude",
  calcAge: function (birthYear) {
    return 2024 - birthYear;
  },
  familyMembers: {
    mother: "Shakuntala",
    brother: "Ayush",
    grandmother: "Ahilya",
  },

  friends: [`Nobody1`, `Nobody2`, `Nobody3`],
  hasDrivingLiecense: true,

  getSummary: function () {
    return `${this.firstname} is ${this.calcAge(2001)}-years old and she has ${
      this.hasDrivingLiecense ? `a` : `no`
    } Driving Liecense`;
  },
};

console.log(Sejal["calcAge"](2001));

console.log(Sejal.familyMembers.grandmother);

let interestedIn = prompt(`What do you want to know about Sejal? `);

if (Sejal[interestedIn]) {
  console.log(Sejal[interestedIn]);
} else {
  console.error(`Wrong request`);
}

console.log(
  `${Sejal["firstname"]} has ${Sejal.friends.length} friends, and her bestfriend is ${Sejal["friends"][1]}`
);

console.log(Sejal.familyMembers);

console.log(Sejal.getSummary());
