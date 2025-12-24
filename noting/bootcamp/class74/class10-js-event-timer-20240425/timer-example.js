const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const ball = document.getElementById('ball')
const speed = 30
let left = 0
let timerId

function moveBall() {
    left += speed
    ball.style.left = left + 'px'
}

function start() {
   moveBall()
   timerId = setInterval(moveBall, 100)
   btn1.removeEventListener('click', start)
}

function stop() {
   clearInterval(timerId)
   btn1.addEventListener('click', start)
}

btn1.addEventListener('click', start)
btn2.addEventListener('click', stop)
