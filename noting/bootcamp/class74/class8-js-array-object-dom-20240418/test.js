console.log('hello, baidu xiaoyuan')
document.title = 'JT'
const headingEle = document.getElementById('heading')
document.getElementById('heading').innerText = 'This is JT\'s page'
document.getElementById('heading').style.color = 'red'
document.getElementById('heading').style.backgroundColor = 'yellow'
headingEle.style.border = '1px solid red'

const anchors = document.querySelectorAll('a')
for (let i = 0; i < anchors.length; i++) {
    anchors[i].href = 'https://www.costco.ca/'
}


