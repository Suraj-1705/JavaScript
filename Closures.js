// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x(); //returns 7


// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);

// z(); //10


// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// console.log(z); //returns fucntion y

// z(); //100 because a reference will be stored




// -------------INTERVIEW QS---------------
// function x (){
//     var i = 1;

//     setTimeout( function () {
//         console.log(i);
//     },3000);
//     console.log("hii suraj");
// }
// x();  // returns hii suraj then 1

// ----------------------------------------------------------------------

// function x (){
//     for(var i=1; i<=5; i++){
//         setTimeout( function () {
//             console.log(i);
//         },i*1000);
//     }
//     console.log("hii suraj");
// }
// x(); 
// output:
        //hii suraj 
            //6
            //6
            //6
            //6
            //6
// -----------------------------------------------------------------------------
//USING LET 
            // function x (){
            //     for(let i=1; i<=5; i++){
            //         setTimeout( function () {
            //             console.log(i);
            //         },i*1000);
            //     }
            //     console.log("hii suraj");
            // }
            // x(); 

            // output:
                //hii suraj 
                    //1
                    //2
                    //3
                    //4
                    //5
// -----------------------------------------------------------
// IF SHOULD DO USING VAR
function x (){

    for(let i=1; i<=5; i++){
        function close(i){
            setTimeout( function () {
                console.log(i);
            },i*1000);
        }
        close(i);
       
    }
    console.log("hii suraj");
}
x(); 

// output:
        
        //hii suraj 
        //1
        //2
        //3
        //4
        //5





// 1. fucntion along with its lexial scope bundles together to form a CLOSURES
// uses of closures: module design pattern
                    // currying
                    // fucntions like once
                    // memoize
                    // maintaining state in async world
                    // setTimeouts
                    // Iterators
                    // many more...
// 2.  