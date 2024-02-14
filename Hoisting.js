
getName();  // Namaste JavaScript
console.log(x); //undefined
console.log(getName); //returns the function

var x = 7;


function getName (){
    console.log("Namaste Javascript");
}

//Hoisting is the process of moving the variables and function declarations to the top of the stack
// 1. In Js, before the code is executed the variables get initialized to undefined
// 2. Arrow functions enact as variables and get "undefined" during memory creation phase while functions actually get run
// 3. Hoisting: variable declarations are moved to the top of the scope before execution therefore it is possible to call a function before initializing it.
// 4. whenever a js program is executed a global execution context is created which has-> memory creation and code execution
// 5. variable declarations are scanned and are made undefined
// 6. function declarations are scanned and are made available

var x= 7;

