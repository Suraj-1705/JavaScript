// var a = 100;

// {
//     var a=10
//     let b=20;
//     const c = 30;
//     console.log(a); //10
//     console.log(b);
//     console.log(c);
// }
// console.log(a); //10

let b = 100;

{
    var a=10
    let b=20;
    const c = 30;
    console.log(a);
    console.log(b); //20
    console.log(c);
}
console.log(b); //100


// 1. code inside curly bracket is called block
// 2. multiple statements are grouped inside a block so it can be written where js expects a single statements like in if, else, loop, fucntion etc
// 3. blocked scoped are stored in seperate memory than global. like [let] and [const] are stored in a seperate memory than [var] so they are block scoped.
// 4. shadowing should not cross the scope of the original otherwise it will give error
// 5. shadowing let with var is illegal shadowing and gives error
// 6. [var] is stored in the nearest outer function or in global scope and hence can be accessed outside block as well whereas same is not in the  case of [let] and [const]

