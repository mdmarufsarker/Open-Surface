(function main() {
    console.log("Hello World");
    // testing open
  
  
    // testing close
    add(1, 2.5);
  })();
  
  function add(a: number | string, b: number | string) {
    let result;
    if(typeof a === "number" && typeof b === "number"){
        result = a + b;
    }else{
        result = a.toString() + b.toString();
    }
    return result;
    
  }
  