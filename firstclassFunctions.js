

// a(); //a called
// b(); //type error because b is treated as a variable and assigned undefined during memory creation

// ------------functions statement aka (function declaration)---------------
// a normal function that we create using naming convention is called fucntion statement

// function a(){
//     console.log("a called");
// }
// a(); //a called


// --------------Functions Expression-----------
// wen we assign function to a variable that is called function expression

// var b = function(){
//     console.log("b called");
// }
// b(); //b called


// difference b/w function statement & function expression is (hoisting)
// Function Declaration are also known as function statement

// -----------Anonymous Function----------------------------
// function () {

// } // gives syntax error because (anonymous functions are used as values to assign a variable)

// Named Function Expression

// ---------------Difference between Parameters & Arguments---------------------------

// function a(){
//     console.log("a called");
// }

// var b = function(param1,param2){
//     console.log("b called");
// }
// a();
// b(1,2);

// the values which we pass inside a fucntion are called ARGUMENTS
// and those labels that gets those values are known as PARAMETERS

// -------------------First Class Functions------------------------------

// the ability to use functions as values and can be passed as parameters 
// and can assign it to a variable is called first class fucntion


