// one example of syn function:
// const addition = (a, b) => a + b
// let res = addition(3, 5)
// console.log('res==>', res)

// assume when the calculation is slow
// const additionSlow = (a, b) => {
//     setTimeout(()=>{
//         let res = a + b
//         return res
//     }, 2000)
// }
// let res2 = additionSlow(3, 5)
// console.log('res2===>', res2)

// asynchronous function ===> deal with the delayed event etc
const additionAsync = async (a, b)=> a + b
let res3 = additionAsync(3, 5)
// console.log('res3==>', res3)
res3
    .then( res => console.log('res3===>', res))  // fulfilled
    .catch(error => console.log(error)) // rejected
    .finally(()=>{})   // settled
console.log('------last line------')

// sync vs async
// sync
// |-----A------|
//              |-----B------|

// async
// |-----A------|
//      |-----B------|

// How do we deal with async function
// 1. Promise (receipt)
// A Promise has the following states:
// pending: initial state
// fulfilled: the operation is complete successfully
// rejected: operation failed
// settled

// 2. Try/catch + async/await // todo: will talk it later when you learn backend







