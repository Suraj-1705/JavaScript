// SCOPE CHAIN 

// 1. scope of a variable is directly dependent on the lexical environment
// 2. whenever an execution context is created, a lexical environment is created.
        // Lexical environment is the local memory along with the lexical environment of its parent. lexical means hierarchy or sequence
// 3. Having the reference of parents lexical environment means, the child or the local function can access all the variables and fucntions defined in the memory space of its parent
// 4. The JS engine first searches for a variable in the current local memory space,if its not found here it searches for the variable in the lexical environment of its parent, and if still its not found then it searches in subsequent lexical environment and if its not present it returns null
// 5. The mechanism of searching variables in the subsequent lexical environment is known as scope chain if it is not found it returns not defined.

// function a(){
//     b();
//     function b(){
//         console.log(x);
//     }
    
// }
// a();


// -----------------TEMPORAL DEAD ZONE----------------------

console.log(a) //cannot access a before initialization because let and const will be temporal dead zone till they are initialized
let a = 9;
var b = 2;


// 1. let and const are hoisted. we cant use them before initialization is result of "temporal dead zone"
// 2. js use diff memory than global execution context to store let and const. which is the reason behind "temporal dead zone"
// 3. level of strictness: var << let << const.
// 4. var:   no temporal dead zone can redeclare and re-initialize, stored in global execution context
//    let:   uses temporal dead zone, cant redeclare , can re-initialize stored in seperate memory
//    const: uses temporal dead zone, cant redeclare, cant re-initialize stored in seperate memory
// 5. syntax error is similar to compile error. while type and reference error falls under run time error.
// 6. syntax error : violation of JS syntax
//    type error   : while trying  to re-initialize const variable
//    reference error: whiel trying to access variable which is not there in the global memory