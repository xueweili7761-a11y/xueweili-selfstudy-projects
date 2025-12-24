// loop, iteration
// 1. for
for (let i= 0; i < 5; i++) {
   // statement
   console.log('hello')
}

for (let i = 10; i > 0; i-=2) {
   console.log('hello', i)
}

// find the integer (<20) which can be divided by 3


// 2. while
let j = 20
while (j > 0) {
    // if (j % 3 === 0) {
    //     console.log(j)
    // }
    j % 3 === 0 && console.log(j)
    j--
}
// AVOID infinite loop...

// break vs continue vs return
// break: abort loop
// continue: jump to next step
// return: similar to break used in function, to return a value (optional)

for (let i = 0; i < 3; i++) {
    console.log('1st layer', i)
    // break
    if ( i % 2 === 0 ) {
        continue
    }
    console.log('loop end', i)
}

// for nested loops, break/continue only work for the current layer


