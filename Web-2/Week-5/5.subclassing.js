class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}

class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
// let clara = new Cats("Clara", 33, "indigo");

console.log(clara.sing());
console.log(clara.whiskers());
// Expected Output
// "Clara can sing"
// "I have purple whiskers"


// You'll notice that clara has a __proto__ property which references the constructor Cats and gets access to the whiskers() method. This __proto__ property also has a __proto__ property which references the constructor Animals thereby getting access to sing() and dance(). name and age are properties that exist on every object created from this.


// using object.create method
function Animals(name, age) {
    let newAnimal = Object.create(animalConstructor);
    newAnimal.name = name;
    newAnimal.age = age;
    return newAnimal;
}
let animalConstructor = {
    sing: function() {
        return `${this.name} can sing`;
    },
    dance: function() {
        return `${this.name} can dance`;
    }
}
function Cats(name, age, whiskerColor) {
    let newCat = Animals(name, age);
    Object.setPrototypeOf(newCat, catConstructor);
    newCat.whiskerColor = whiskerColor;
    return newCat;
}
let catConstructor = {
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
Object.setPrototypeOf(catConstructor, animalConstructor);
const clara = Cats("Clara", 33, "purple");
clara.sing();
clara.whiskers();
// Expected Output
// "Clara can sing"
// "I have purple whiskers"



/*
Object.setPrototypeOf is a method which takes in two arguments - the object (first argument) and the desired prototype (second argument).

From the above, the Animals function returns an object with the animalConstructor as prototype. The Cats function returns an object with catConstructor as it's prototype. catConstructor on the other hand, is given a prototype of animalConstructor.

Therefore, ordinary animals only have access to the animalConstructor but cats have access to the catConstructor and the animalConstructor.
*/