"use strict";

const Person = function (firstName, birthYear) {
  // console.log(this);
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this
  let calcAge = function(){
      let currentYear = new Date()
      let year = currentYear.getFullYear()
      console.log(year - this.birthYear)
  }
};

const maruf = new Person("Maruf", 2003);
console.log(maruf);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(maruf instanceof Person);

//////////////////////////////////////////

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  let currentYear = new Date();
  let year = currentYear.getFullYear();
  console.log(year - this.birthYear);
};

maruf.calcAge()

console.log(maruf.__proto__);
console.log(maruf.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(maruf));

// more convinient name is .prototypeOfLinkedObjects
// but it is not available in js

Person.prototype.species = "Homo Sapiens"
console.log(maruf);
console.log(maruf.species);

console.log(maruf.hasOwnProperty('firstName'));
console.log(maruf.hasOwnProperty('species'));


//////////////////////////////////////////

// facing problem with prototype chain
/*
So, essentially person dot prototype dot constructor
is gonna point back to person itself.
Now remember, person dot prototype
is actually not the prototype of person,
but of all the objects that are created
through the person function.
*/