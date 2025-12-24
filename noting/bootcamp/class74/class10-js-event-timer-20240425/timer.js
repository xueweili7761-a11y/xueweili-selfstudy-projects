// timer
// start timer
// setTimeout(callback function, 2000) ==> execute function after 2000ms
// setInterval(callback function, 2000) ==> execute function every 2000ms

function print(){
    console.log('hello')
}
// setTimeout(print, 2000)
print()
// setInterval(print, 2000)
// stop timer
// let timerId = setInterval(print, 3000)
// setInterval(print, 2000)
// clearInterval(timerId)

const timerId2 = setInterval(print, 1000)
setTimeout(function(){
    clearInterval(timerId2)
}, 5000)
