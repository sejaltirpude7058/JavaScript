
let weekdays = ["Monday", "Tuesday", "Wednesday"];

let OpeningHours = {
  //ES6 Enhanced object literals
  [weekdays[0]]: {
    morning: "10am to 2pm",
    evening: "7pm to 11pm",
  },
  [weekdays[1]]: {
    morning: "10am to 2pm",
    evening: "7pm to 11pm",
  },
  [weekdays[2]]: {
    morning: "10am to 4pm",
    evening: "Closed",
  },
  Thrusday: {
    morning: "10am to 2pm",
    evening: "7pm to 9pm",
  },
};


let restaurant = {
  name: "Laziz Family Restro",
  location: "new Mumbai",


  //ES6 Enhanced object literals
  OpeningHours,
  specialMenu: ["Indian", "Chinese", "Italian"],
  state: "Maharashtra",

  //ES6 Enhanced object literals
  greeting() {
    console.log(
      `Hey!! please do visit our reataurant ${this.name}😊 and Enjoy delicious food!😋`
    );
  },
};

console.log(restaurant);