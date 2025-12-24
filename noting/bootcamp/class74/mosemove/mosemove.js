const ball=document.getElementById('ball')

function move(e){
    console.log(e.clientX)
    ball.style.left=e.clientX+'px'
    ball.style.top=e.clientY+'px'
}
document.addEventListener('mousemove',move)