printName()
// function: reusable, pre-defined blocks of code
// 1. define a function
// 2. call/invoke a function
function printName() {
    console.log('hello world')
    console.log('my name is')
    console.log('a + b = 5', 5 + 2 )
}
// printName()
// printName()
// printName()
// printName()
// printName()
// printName()
// for (let i = 0; i < 6; i++) {
//     printName()
// }

// 3. hoisting ===> js default behaviour
// 4. function contains parameters
function addition(a = 1, b = 1) {
    // a, b ==> paramters
   let sum = a + b
   return  sum
}
console.log(addition(3, 4))  // 3, 4 ==> arguments
console.log(addition(3, 4,  6))
console.log(addition(3))

// variable scopes:
// 1. global variable: can be accessed globally
let name = 'JT'
function print() {
    console.log(name)
}
// 2. function scope: declare inside function, can not be accessed outside
// console.log(sum)
// 3. block scope: declared by let/const inside {} or (), can not be accessed outside
for (i = 0; i < 5; i++) {
    console.log(i)
}
console.log(i)

// var vs const/let
// 1. 2015
// 2. block scope
// 3. var can be redeclared
var test = 1
var test = 3
// 4. var ==> hoisting
test2 = 'JT'
var test2
console.log(test2)
// 5. when you declare a variable without any keyword, var is used by default
// ===== var is not used any more ======











