// what is map?


// example
// const arr = [1,2,3,4];

// const multiplyByTwo = arr.map((num,index,arr)=>{
//     return num*2;
// })

// console.log(multiplyByTwo);

// --------POLYFILL FOR MAP-----------------


// Array.prototype.myMap = function(cb){
//     let temp = [];
//     for(var i=0; i<this.length; i++){
//         temp.push(cb(this[i],i,this));
//     }
//     return temp;
// }

// const arr = [1,2,3,4]
// const arr1 = arr.myMap((num,i,arr)=>{
//     return num * 2
// })

// console.log(arr1);

// ===================================================================================
// what is filter?

// const arr = [1,2,3,4,5,6];

// const greaterThanTwo = arr.filter((num,index,arr)=>{
//     return num >= 2;
// })

// console.log(greaterThanTwo); //[2,3,4,5,6]


//                POLYFILL FOR FILTER:

// Array.prototype.myFilter = function(cb){
//     let temp = [];
//     for(let i =0; i<this.length;i++){
//         if(cb(this[i])){
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }

// const arr = [1,2,3,4]
// const ans = arr.myFilter( (num)=>{
//    return  num > 2;
// })
// console.log(ans);

// =====================================================================================


// what is reduce?


// const arr = [1,2,3,4,5,6];

// const sum = arr.reduce((acc,curr,index,arr)=>{
//     return acc + curr
// },0)

// console.log(sum);


//  ------------POLYFILL FOR REDUCE----------------------------

// Array.prototype.myReduce = function(cb,initialValue){
//     let accumulator = initialValue;

//     for(var i=0; i<this.length; i++){
//         accumulator = accumulator ? cb(accumulator,this[i]) : this[i];
//     }
//     return accumulator;
// }

// const arr = [1,2,3,4,5,6];

// const ans = arr.myReduce( (acc,curr) =>{
//     return acc + curr;
// })

// console.log(ans);


// ==================================================================================

// WHAT IS MAP AND FOREACH?











// =======================================================
// OUTPUT BASED INTERVIEW QUESTIONS
let students = [
    {name:"Piyush", rollNumber:31, marks:80},
    {name:"Jenny", rollNumber:15, marks:69},
    {name:"Kaushal", rollNumber:16, marks:35},
    {name:"Dilpreet", rollNumber:7, marks:55},
]

// ------------Q1:return the names with uppercase-----------

// const arr = [];
// for(var i=0; i<students.length; i++){
//     arr.push(students[i].name.toUpperCase());
// }
// console.log(arr);//[ 'PIYUSH', 'JENNY', 'KAUSHAL', 'DILPREET' ]

// another method with Map()->

// var names = students.map( (cb)=>cb.name.toUpperCase());
// console.log(names)//[ 'PIYUSH', 'JENNY', 'KAUSHAL', 'DILPREET' ]

// ---------------------------------------------------------------------------------

// Q2.Return only the details of the students who scored more than 60

// var details = students.filter( (cb) => {
//    return cb.marks > 60
// })

// console.log(details);
// ------------------------------------------------------------------------------------
// Q3. Return the details of the students marks more than 60 and rollnumber > 15?

// const details1 = students.filter( (cb) => {
//     return cb.marks > 60 && cb.rollNumber > 15
// })

// console.log( "ANS ", details1);
// ------------------------------------------------------------------------------------
// Q4. Return the sum of all the marks?

// const sum = students.reduce( (prev,curr) => {
//     return prev += curr.marks
// },0)

// console.log("SUM OF MARKS IS :" ,sum);

// ----------------------------------------------------------------------------------------
// Q5. Return only the names of the students whos marks is >60?

// const ans = students.filter( (stu => stu.marks>60)).map( stu => stu.name)

// console.log(ans);

// --------------------------------------------------------------------------------------------
// Q6. Return total marks of students with marks greater than sixty 
    // after 20 marks have been added to those who scored less than 60?

    const totalMarks = students.map( (stu) => {
        if(stu.marks < 60){
            stu.marks += 20
        }

        return stu
    }).filter(stu => stu.marks > 60).reduce( (prev,curr) => prev+curr.marks,0)

    console.log(totalMarks);