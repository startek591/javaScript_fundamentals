// Scoping in Practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reassigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      str;

      function add(a, b) {
        return a + b;
      }
    }
    add(2, 3);
    millenial;
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);

// Hosting and TDZ in Practice
// Variables

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
addDecl(2, 3);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

// The this Keyword in Practice
console.log(this);

const calcAge2 = function (birthYear) {
  2037 - birthYear;
  console.log(this);
};

calcAge2(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

// Regular Functions vs. Arrow Functions
var firstName2 = "Matilda";

const jonas2 = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const self = this;
    const isMillenial = function () {
      self;
      self.year >= 1981 && self.year <= 1996;
    };

    const isMillenial2 = () => {
      this;
      this.year >= 1981 && this.year <= 1996;
    };

    isMillenial();
    isMillenial2();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas2.greet();
jonas2.calcAge();

// arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

var addArrow = (a, b) => {
  return a + b;
};

addArrow(2, 5, 8);

// Object Reference in Practice (Shallow vs. Deep Copies)
const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");

// or
// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Mary");
jessicaClone.family.push("John");
