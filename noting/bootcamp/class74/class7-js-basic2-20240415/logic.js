// logic control
// 1. if (condition, logic expression) { statement1 } else { statement2 }
let score = 89
if (score > 90) {
    console.log('excellent')
} else if (score <= 90 && score >= 60) {
    console.log('pass')
} else {
    console.log('needs improvement')
}
// is similar to:
if (score > 90) {
    console.log('excellent')
}
if (score <= 90 && score >= 60) {
    console.log('pass')
}
if (score < 60) {
    console.log('needs improvement')
}

// ternary operator:  ? :
score > 60
    ? console.log('pass')
    : console.log('fail')

// 2. switch case
let fruit = 'apple'

switch (fruit) {
    case 'oragne':
        console.log('this is orange')
        break
    case 'apple':
        console.log('this is apple')
        break
    case 'banana':
        console.log('this is banana')
        break
    case 'grape':
        console.log('this is grape')
        break
    default:
        console.log('no such fruit')
}

// 3. falsy value
// undefined, 0, null, empty string, NaN (when you see this value, check your data type)
// let a = 5 / 'hello'
let a = 'false'
if (a) {
    console.log('true')
} else {
    console.log('false', a)
}


