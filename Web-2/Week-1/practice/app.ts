(function main() {
  console.log("Hello World");
  // testing open

  // number, string
  let num1: number;
  //   num1 = "2";
  let txt: string;
  //   txt = 2.34;

  // testing close
  add(1, 2.5, true, "Result = ");
})();

function add(a: number, b: number, showResult: boolean, phrase: string) {
  // if(typeof a === "number" && typeof b === "number"){
  //     console.log(a + b);
  // }
  const result = a + b;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
