(function main() {
    console.log("Hello World");
    // testing open
    // Objects
    var person = {
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
        }
    };
    console.log(person.getFullName());
    console.log(person.hobbies);
    for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
        var hobby = _a[_i];
        console.log(hobby.toUpperCase());
    }
    person.role.push("admin");
    person.role[1] = "moderator";
    //   person.role.push = 2;
    // testing close
})();
