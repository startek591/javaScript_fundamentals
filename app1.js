// Linking a JavaScript File
let js = 'amazing';
console.log('js');
console.log(40 + 8 + 23 - 10);

// Values and Variables
console.log('Jonas');
console.log(23);
let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;
let person = 'jonas';
let PI = 3.1415;
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';
let job1 = 'programmer';
let job2 = 'teacher';
console.log(myFirstJob);

// Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

let javascriptIsFun2 = 'YES!';
console.log(javascriptIsFun2);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);

// let, const and var
let age = 30;
age = 31;
const birthYear = 1991;
let job3 = 'programmer';
job3 = 'teacher';
lastName = 'Schmedtmann';
console.log(birthYear);
console.log(job3);
console.log(lastName);

// Basic Operators
// Math operators
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones * 2, ageJones / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;
const firstName2 = 'Jonas';
const lastName2 = 'Schmedtmann';
console.log(firstName2 + ' ' + lastName2);

// Assignment operators
let x = 10 + 5; //15
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparsion operators
console.log(ageJones > ageSarah);
console.log(ageSarah >= 18);
console.log(now - 1991 > now - 2018);

const averageAge = (ageJones + ageSarah) / 2;

// Coding Challenge #1
/*
    Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can implement both versions)
    3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

// Strings and Template Literals
const firstName3 = 'Jonas';
const job4 = 'teacher';
const birthYear2 = '1991';
const year2 = 2037;
const jonas2 =
  "I'm " +
  firstName3 +
  ', a ' +
  (year2 - birthYear2) +
  ' year old ' +
  job4 +
  '!';

const jonasNew = `I'm ${firstName3}, a ${
  year2 - birthYear2
} year old ${job4}!`;

console.log(jonasNew);

console.log(`Just a regular string....`);
console.log('String with \n multiple \n lines');
console.log(`String multiple lines`);

// Taking Decisions: if / else statements
const age2 = 15;
if (age2 >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age2;
  console.log(
    `Sarah is too young/ Wait another ${yearsLeft} years: `
  );
}

const birthYear3 = 2012;
let century;
if (birthYear3 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Coding Challenge #2
/*
  Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

  1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

  HINT: Use an if/else statement 😉

  GOOD LUCK 😃
*/
const massMark2 = 78;
const heightMark2 = 1.69;
const massJohn2 = 92;
const heightJohn2 = 1.95;
const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJohn2);
if (BMIMark2 > BMIJohn2) {
  console.log(
    `Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2}!)`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn2} is higher than Marks's (${BMIMark2})!`
  );
}

// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
let n = '1' + 1;
n = n - 1;
console.log(n);

// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// Equality Operators: == vs. ===
const age3 = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTried = false;
console.log(hasDriversLicense && hasGoodVision && isTried);

if (hasDriversLicense && hasGoodVision && isTried) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive....');
}

// The Switch Statement
const day = 'friday';
switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory vidoes');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

// Statements and Expressions
3 + 4;
1991;
true && false && !false;
if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

// The Conditional (Ternary) Operator
const age4 = 23;
age4 >= 18
  ? console.log('I like to drink wine 🍷')
  : console.log('I like to drink water 💧');

const drink = age4 >= 18 ? 'wine 🍷' : 'wather 💧';
console.log(drink);

let drink2;
if (age4 >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);
console.log(`I like to drink ${age4 >= 18 ? 'wine 🍷' : 'water 💧'}`);
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%;

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25

TEST DATA: Test for bill values 275, 40, and 430

HINT: To calculate 20% of a value, simple multiply it by 20/100 = 0.2;
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.5 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and total value ${
    bill + tip
  }.`
);
