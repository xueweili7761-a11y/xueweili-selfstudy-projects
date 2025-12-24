const container = document.getElementById('container')
const container2 = document.getElementById('container2')
const hello = document.getElementById('hello')


function highlight() {
    // container.className = 'highlight'
    container.classList.add('highlight')
    // container.style.backgroundColor = 'red'

}

function mouseLocation (e) {
    console.log(e.clientX, e.clientY)
}
container.addEventListener('click', highlight)
// document.addEventListener('mousemove', mouseLocation)

// const btnEle = document.createElement('button')
// btnEle.innerText = 'click me'
// container2.append(btnEle)

for (let i = 0; i < 10; i++) {
    const btnEle = document.createElement('button')
    btnEle.innerText = 'click me' + i
    btnEle.addEventListener('click', function (){console.log('print'+ i)})
    container2.append(btnEle)
}

function move(){
    hello.style.right = '0'
}

container.addEventListener('mouseenter', move)

// 1. copy/paste image addresses
const imgUrlList = [
    'https:....',
    'https:....',

]

//2. loop this array to render images/btns
