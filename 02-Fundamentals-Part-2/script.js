"use strict";

// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// Functions
function logger() {
  return "My name is Jonas";
}

// Calling / Running / Invoking Function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);

const appleOrangeJuice = fruitProcessor(2, 4);

const num = Number("23");

// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

// Arrow functions

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

const retirementResults1 = yearsUntilRetirement(1991, "Jonas");
const retirementResults2 = yearsUntilRetirement(1980, "Bob");

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

const processor = fruitProcessor(2, 3);

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge1(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

const retirementResults3 = yearsUntilRetirement2(1991, "Jonas");
const retirementResults4 = yearsUntilRetirement2(1950, "Mike");

// Introductions to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];

const y = new Array(1991, 1984, 2008, 2020);

const arrayPosition1 = friends[0];
const arrayPosition2 = friends[2];

const arrayLength = friends.length;
const lastArray = friends.length - 1;

const arrayPosition3 = (friends[2] = "Jay");
const entireArray = friends;

const firstName = "Jonas";
const jonas = [firstName, "Jonathan", 2037 - 1991, "teacher", friends];
const jonasLength = jonas.length;

const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge4(years[0]);
const age5 = calcAge4(years[1]);
const age6 = calcAge4(years[years.length - 1]);

const ages7 = [
  calcAge4(years[0], calcAge4(years[1]), calcAge4(years[years.length - 1])),
];

// Basic Array Operations (Methods)
const friends2 = ["Michael", "Steven", "Peter"];

// Add elements
const newFriendsArray = friends2.push("Jay");

friends2.unshift("John");

// Remove elements
friends2.pop();
const popped = friends2.pop();

friends2.shift();

const checkingIndex1 = friends2.includes("Steven");
const checkingIndex2 = friends2.includes("Bob");
const checkingIndex3 = friends2.includes(23);

if (friends2.includes("Steven")) {
  const results = "You have a friend called Steven";
}

// Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// Dot vs. Bracket Notation
const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

jonas3;

jonas3.lastName;

jonas3["lastName"];

const nameKey = "Name";
jonas3["first" + nameKey];
jonas3["last" + nameKey];

/*const interestedIn = prompt(
("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
);*/

/*if (jonas3[interestedIn]) {
  const results = jonas3[interestedIn];
} else {
  const results =
    "Wrong request! Choose between firstName, lastName, age, job, and friends";
}*/

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";

jonas;

// Object Methods
const jonas4 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge1: function (birthYear) {
    return 2037 - birthYear;
  },

  calcAge2: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },

  calcAge3: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge1()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

jonas4.calcAge3();
jonas4.age;
jonas4.age;
jonas4.age;
