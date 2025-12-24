// array
// 1. create/declare array
let shelves = ['shelf1', 'shelf2', 'shelf3', 'shelf4']
let scores = [12, 23, true, 'shelf', [1, 2, 3], undefined]
console.log(shelves, scores)

// 2. length of array
console.log(shelves.length, scores.length)

// 3. access to element of array
// js: index from 0 (R index from 1)
console.log(shelves[2])
console.log(scores[4][0])
// access to the last element of array
console.log(shelves[shelves.length - 1])

// 4. modify array element
const fruits = ['apple', 'banana']
console.log(fruits)
fruits[1] = 'orange'
console.log(fruits)

let fruits2 = fruits
console.log(fruits2)
fruits2[1] = 'test'
console.log(fruits2, fruits)

// 5. internal methods
let teams = [1, 2, 4]
teams[teams.length] = 5   // [1, 2, 4, 5]
teams.push(6)
teams.push('hello')
console.log(teams)
let popped = teams.pop()
console.log(teams, popped)
// unshift, shift, slice, splice
// ES2015 added methods

// 6. how do we loop an array
const cart = ['book', 'mac', 'TV', 'car']
for (let i = 0; i < cart.length; i++) {
   console.log(cart[i])
}
console.log(cart)
// 7. One application example
// create a function (invoice) to calculate the total price (after tax) in a cart
// input:
const taxRate1 = 0.13
const cart1 = [30, 40, 60, 302]
const cart2 = []
const cart3 = [40, undefined]
const cart4 = {}
// output:
// console.log(invoice(cart1, taxRate1))

function invoice(cart, taxRate) {
    // make sure cart is an array
    if (!Array.isArray(cart)) {
        return 'system error'
    }
    // make sure array is not empty
    if (cart.length === 0) {
        return 'cart is empty'
    }
    let totalPrice = 0
    // loop the cart to calculate price
    for (let i = 0; i < cart.length; i++) {
        // make sure element is number
        if (isNaN(cart[i])) {
           return 'there is an error'
        }
       totalPrice += cart[i]
    }
    totalPrice = totalPrice * (1 + taxRate)
    totalPrice = Math.round(totalPrice * 100) / 100
    return totalPrice
}
console.log(invoice(cart1, taxRate1))
console.log(invoice(cart2, taxRate1))
console.log(invoice(cart4, taxRate1))
console.log(invoice(cart3, taxRate1))

