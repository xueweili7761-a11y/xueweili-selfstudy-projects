// 1. variable:
let cup = 'tea'
let name = 'JTajkshdksahdkjsa\'sdsdsd\'hdkjsahdjk\nashdjkashdkjhasjkdhsajkdhk'
console.log(cup) // 'tea'
console.log(name)

cup = 'coffee'
console.log(cup)

let cup2 = cup

const pi = 3.1415
console.log(pi)

// let ===> declare a variable
// const ===> declare a readonly/constant variable
// var ===> old todo: talk it later

// 2. Data type
let isBoy = true
let test
console.log(typeof test, test, typeof isBoy, isBoy)
// Primitive data type: string, number, boolean, undefined, null, symbol...
// Complicated?: array, object

let a = 'JT'
a = false
a = 'true'
a = 'false'
console.log(typeof a, name)

// 3. expression
let score1 = 1
let score2 = 2
let sum = score1 + score2
console.log(sum)

// operators: +, -, *, /, =, %, +=, -+, ++, --, **
// reminder (modulo operator): %
let score = 5
console.log(score % 2)  // 1
score = score + 2
// is equal to
score += 2
console.log('score====>', score)
score += 1
score++

let score3= 6
score3--
console.log('score3====>', score3)

//auto increment/decrement
// score++ vs ++score
let value1 = 3
let value2 = 3
console.log('value1++', value1++, 'value1', value1)
console.log('++value2', ++value2, 'value2', value2)

// logical operator
// and: &&
// or: ||
// not: !
// > < === !==  >= <=
score = 80
let gender = 'male'
let findRes1 = score > 70  // true
let findRes2 = gender === 'female' //false
// let isGodness = findRes1 && findRes2
let isGodness = findRes1 || findRes2
console.log('isGodness===>', isGodness)

// === vs == vs =
let s1 = 1
let s2 = '1'
console.log('s1===s2', s1===s2)
console.log('s1==s2', s1==s2)

// ===: new   ==: old
// === is matching strictly

// !== vs !=

// &&, ||
5 > 10 && console.log('hello!')
5 < 10 && console.log('hello2222!')
5 > 10 || console.log('hello333!')
5 < 10 || console.log('hello444!')

let x = 5 < 10 && 7
console.log('x===>', x)
console.log('JT' + 5)
// flexible data type
// typescript

















