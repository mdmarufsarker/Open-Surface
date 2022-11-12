// JavaScript
// let foo = "bar";
// foo = "baz";
// console.log(foo);

// let myName = "Meet";
// myName.toLowerCase();
// console.log(myName.toLowerCase());

// let age: number = 34;
// let lName: string | number = 343;

// let hobbies: string[] = ["Sports", "Cooking", "Reading"];

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maruf",
//   age: 34,
// };

let add = (a: number, b: string, c = true) => {
    if(c){
        return a + b;
    }else{
        console.log("Error")
    }
};

// let flag: boolean = true;
console.log(add(2, "54"));
