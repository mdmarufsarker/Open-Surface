(function main() {
  console.log("Hello World");
  // testing open

  // Objects
  const person: {
    firstName: string;
    lastName: string;
    age: number;
    hobbies: string[];
    role: [number, string]
    [key: string]: any;
  } = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    // tuples
    role: [2, "author"],
    // enum
    // enum {NEW, OLD}
    // get stuck
    // methods
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  console.log(person.getFullName());
  console.log(person.hobbies);
  for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }

  person.role.push("admin");
  person.role[1] = "moderator";
//   person.role.push = 2;
})();
