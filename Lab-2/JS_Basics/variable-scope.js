// Variable Scope


//Global Scope
const globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar);
}
showGlobal();


function testFunction() {
  var functionVar = "I'm function-scoped";
  
  if (true) {
    var insideBlock = "I'm still function-scoped";
  }
  
  console.log("var from inside block:", insideBlock); // Works!
}
testFunction();
// console.log(functionVar);



{
  let blockVar = "I'm block-scoped";
  const alsoBlock = "Me too!";
  console.log(blockVar, alsoBlock);
}
// console.log(blockVar); 


// lexical scope
function outer() {
  const outerVar = "I'm outer";
  
  function inner() {
    console.log(outerVar);
  }
  
  inner();
}
outer();
