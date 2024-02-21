
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


var x = 7;

// when ever we run a program a[global execution context] is created and a [global object] (window) is created 
// it allocates memory to all the variables and functions even before a single line is executed
// at global level [this] is pointing to [window] object.

// UNDEFINED AND NOT DEFINED
// undefined means memory has been allocated to that varible but tht variable is not initialized
// not defined means memory has not been allocated to that variable
