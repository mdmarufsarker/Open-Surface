(function main() {
    console.log("Hello World");
    // testing open
    var num1;
    num1 = '2';
    // testing close
    add(1, 2.5, true, "Result = ");
})();
function add(a, b, showResult, phrase) {
    // if(typeof a === "number" && typeof b === "number"){
    //     console.log(a + b);
    // }
    var result = a + b;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
