// what is currying?
// currying is a function that takes one argument at a time and returns new function 
// expecting next argument


// example
// function f(a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log(f(5)(1));


// why should we use currying?




// -------------------------------------------------------------

// question1:sum(1)(2)(3)

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(sum(1)(2)(3));


// -----------------------------------------------------------------------

 /*Q2:evaluate("sum")(4)(2) =>6
   evaluate("subtract")(4)(2) => 2
   evaluate("multiply")(4)(2) => 8
   evaluate("divide")(4)(2) => 0 */

//    ANS: 

//    function evaluate(operation){
//     return function (x){
//         return function(y){
//             if(operation === "sum") return x+y;
//             else if(operation === "subtract") return x-y;
//             else if(operation === "multiply") return x*y;
//             else if(operation === "divide") return x/y;
//             else return "operation invalid"
//         }
//     }
//    }

// //    console.log(evaluate("sum")(4)(2));

// const mul = evaluate("multiply");
// console.log(mul(2)(3));


// -------------------------------------------------------------------

// Q3: Infinite currying: console.log(add(1)(2)(3)(4)())
// implementing add

// function add(a){
//     return function(b){
//        if(b) return add(a+b)
//        return a;
//     }
// }

// console.log(add(1)(2)(3)(2)(5)())