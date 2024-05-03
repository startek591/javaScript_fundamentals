// Activating Strict Mode
let hasDriversLicense1 = false;
const passTest = true;

if (passTest) hasDriversLicense1 = true;
if (hasDriversLicense1) console.log('I can drive :D');

const INTERFACE = 'Audio';
const PRIVATE = 534;

// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

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
console.log(age1, age2);

// Arrow functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, 'Jonas'));

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
console.log(fruitProcessor(2, 3));

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
console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgDolphins) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins....');
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [
  firstName,
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  friends,
];
console.log(jonas);
console.log(jonas.length);

const years = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge1(years[0]);
const age5 = calcAge1(years[1]);
const age6 = calcAge1(years[years.length - 1]);
console.log(age4, age5, age6);

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];
console.log(ages);

// Basic Array Operations (Methods)
const friends2 = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends2.push('Jay');
console.log(friends2);
console.log(newLength);

friends2.unshift('John');
console.log(friends2);

// Remove elements
friends2.pop();
const popped = friends2.pop();
console.log(popped);

friends2.shift();
console.log(friends2);

console.log(friends2.indexOf('Steven'));
console.log(friends2.indexOf('Bob'));

friends2.push(23);
console.log(friends2.includes('Steven'));
console.log(friends2.includes('Bob'));
console.log(friends2.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

// Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%;

1. Write a function 'calcTip' that takes an any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Crete an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 55 and 44
*/

const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcTip2 = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [
  calcTip1(bills[0]),
  calcTip2(bills[1]),
  calcTip1(bills[2]),
];
const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];

console.log(bills, tips, totals);

// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const jonas2 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

// Dot vs. Bracket Notation
const jonas3 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas3);

console.log(jonas3.lastName);
console.log(jonas3['lastName']);

const nameKey = 'Name';
console.log(jonas3['first' + nameKey]);
console.log(jonas3['last' + nameKey]);

jonas3.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Object Methods
const jonas4 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge: function (brithYear) {
    return 2037 - birthYear;
  },

  calcAge1: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },

  calcAge2: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's licence.`;
  },
};

console.log(jonas4.calcAge1());

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

// Code Challenge #3

/*
Let's go back to Mark and John comparing their BMI's This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the highter BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😃
*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

// Looping Arrrays, Breaking and Continuing
const jonas5 = [
  'Jonas',
  'Schmeditmann',
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = [];
console.log(jonas[0]);
console.log(jonas[1]);
console.log(jonas[4]);

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas5[i], typeof jonas[i]);

  // Filling types arrays
  types[i] = typeof jonas[i];
  types.push(typeof jonas5[i]);
}

console.log(types);

const years2 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);
