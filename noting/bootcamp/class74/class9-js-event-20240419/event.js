// Interactive behaviours:
// event listener + event handler
// 1. find the elements
// 2. define event handler (function)
// 3. add event listener

let isOn = true
// step1
const btnEle = document.getElementById('btn')
const headingEle = document.getElementById('heading')
const bodyEle = document.body
const inputEle = document.getElementById('input')

// step2
function clickToChangeText() {
    // if (isOn) {
    //     headingEle.innerText = 'hello, JT'
    //     isOn = false
    // } else {
    //     headingEle.innerText = 'Hello world'
    //     isOn = true
    // }
    headingEle.innerText = isOn? 'hello, JT': 'Hello world'
    bodyEle.style.backgroundColor = isOn ? 'black': 'white'
    isOn = !isOn
}

// function print(){
//     console.log('test')
// }

function type(e){
    // console.log(e.key)
    console.log(e.target.value)
    // headingEle.innerText += e.key
}

// step3
btnEle.addEventListener('click', clickToChangeText)
btnEle.addEventListener('mouseenter', clickToChangeText)
btnEle.addEventListener('mouseleave', clickToChangeText)

document.addEventListener('click', function (){console.log('test')}) //anonymous function
inputEle.addEventListener('keyup', type)
// callback function ==> function will be executed later
// anonymous function ==> Noname, a function without name usually used as a callback function
// arrow function //todo: will talk later

