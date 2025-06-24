// Linking a JavaScript File
let js = "amazing";
let value1 = 40 + 8 + 23 - 10;

// Values and Variables
let value2 = "Jonas";
let value3 = 23;

let firstName = "Matilda";

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

// Data Types
let javascriptIsFun = true;

let _typeOfBoolean = typeof true;
let _typeOfNumber = typeof 23;
let _typeOfString = typeof "Jonas";

javascriptIsFun = "YES!";

let year;
let _typeOfUnderfind = year;

year = 1991;

let _typeOfNumber3 = year;

let _typeOfNull = typeof null;

// let, const, and var
let age = 30;
age = 31;

const birthYear = 1991;

var job3 = "programmer";
job3 = "teacher";

lastName = "Schmedtmann";

// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

const power = ageJonas * 2 * (ageJonas / 10) * 2 ** 3;

const firstName2 = "Jonas";
const lastName2 = "Schmedtmann";
const fullName = firstName2 + " " + lastName2;

// Assignment operators
let x = 10 + 5; // 15
x += 10;
x *= 4;
x++;
x--;

// Comparison operators
let comparison1 = ageJonas > ageSarah;
let comparison2 = ageSarah >= 18;

const isFullAge = ageSarah >= 18;

let comparison3 = now - 1991 > now - 2018;

// Operator Precedence
const now2 = 2037;
const ageJonas2 = now2 - 1991;
const ageSarah2 = now2 - 2018;

let comparsion4 = now2 - 1991 > now2 - 2018;

let x2, y2;
x2 = y2 = 25 - 10 - 5;

const averageAge = (ageJonas2 + ageSarah2) / 2;

// Strings and Template Literals
const firstName4 = "Jonas";
const job4 = "teacher";
const birthYear4 = "1991";
const year4 = 2037;

const jonas =
  "I'm " +
  firstName4 +
  ", a " +
  (year4 - birthYear4) +
  " year old " +
  job4 +
  "!";

const jonasNew = `I'm ${firstName4}, a ${year4 - birthYear4} year old ${job4}!`;

const templateString = `Just a regular string....`;

const templateString2 =
  "String with \n\
multiple \n\
lines";

const templateString3 = `String multiple lines`;

// Taking Decisions: if / else Statements
const age2 = 15;

if (age2 >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear2 = 20102;

let century;
if (birthYear2 <= 2000) {
  century = 20;
} else {
  century = 21;
}
const results = century;

// Type Conversion and Coercion

// Type Conversion
const inputYear = "1991";
const conversion1 = Number(inputYear);
const conversion2 = Number(inputYear) + 18;

const conversion3 = Number("Jonas");
const conversion4 = typeof NaN;

const conversion5 = String(23);

// Type Coercion
const coercion = "I am " + 23 + " years old";
const coercion2 = "23" - "10" - 3;
const coercion3 = "23" / "2";

let n = "1" + 1;
n = n - 1;

// Truthy and Falsy Values
// 5 Falsy values: 0, '', undefined, null, NaN
const falsyValues1 = Boolean(0);
const falsyValues2 = Boolean(undefined);
const truthyValues1 = Boolean("Jonathan");
const truthyValues2 = Boolean({});
const truthyValues3 = Boolean("");

const money = 100;
if (money) {
  option1 = "Don't spend it all ;)";
} else {
  option2 = "You should get a job!";
}

let height = 0;
if (height) {
  option3 = "YAY! Height is defined";
} else {
  option4 = "Height is UNDEFINED";
}

// Equality Operators: == vs ===
const age3 = "18";
if (age3 === 18) option5 = "You just became an adult :D (strict)";
if (age3 == 18) option6 = "You just became an adult :D (loose)";

// Setup //
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("What's your favourite number?", (answer) => {
  let favourite = Number(answer);
  const typeofResults = typeof answer;
  if (favourite === 23) {
    option7 = "Cool! 23 is an amazing number!";
  } else if (favourite === 7) {
    option8 = "7 is alos a cool number";
  } else if (favourite === 9) {
    option10 = "9 is also a cool number";
  } else {
    option11 = "Number is not 23 or 7 or 9";
  }

  if (favourite !== 23) optoin12 = "Why not 23?";
  r1.close();
});

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

const andResult = hasDriversLicense && hasGoodVision;
const orResults = hasDriversLicense || hasGoodVision;

const notResults = !hasDriversLicense;

let drivingResults = undefined;
if (hasDriversLicense && hasGoodVision) {
  drivingResults = "Sarah is able to drive!";
} else {
  drivingResults = "Some else should drive";
}

const isTired = false;
drivingResults = hasDriversLicense && hasGoodVision && isTired;

// The Switch Statement
let day = "friday";

switch (day) {
  case "monday":
    process = "Plan course structure";
    process = "Go to coding meetup";
    break;
  case "tuesday":
    process = "Prepare theory vidoes";
    break;
  case "wednesday":
  case "thursday":
    process = "Write code examples";
    break;
  case "friday":
    process = "Record videos";
    break;
  case "saturday":
  case "sunday":
    process = "Enjoy the weekend :D";
    break;
  default:
    process = "Not a valid day!";
}

// The Conditional (Ternary) Operator
const age4 = 23;
const wineDrinker =
  age4 >= 18 ? "I like to drink wine" : "I like to drink water";

const drink2 = age4 >= 18 ? "wine 🍷" : "water 💧";

console.log(`I like to drink ${age4 >= 18 ? "wine 🍷" : "water 💧"}`);
