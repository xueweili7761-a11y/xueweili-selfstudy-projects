const imgLibrary = ['img1', 'img2', 'img3', 'img4']
const imgContainer = document.getElementById('imgContainer')
const btnContainer = document.getElementById('btnContainer')

// function createEle(eleName, location) {
//     for (let i = 0; i < imgLibrary.length; i++) {
//         const ele = document.createElement(eleName)
//         ele.innerText = imgLibrary[i]
//         location.append(ele)
//     }
// }
// createEle('p', imgContainer)
// createEle('button', btnContainer)

// define a function to highlight specified element
function highlight(index) {
    console.log('clicked', index)
    imgContainer.innerHTML = ''
    for (let i = 0; i < imgLibrary.length; i++) {
        const ele = document.createElement('p')
        ele.innerText = imgLibrary[i]
        // apply styles conditionally
        i === index && (ele.style.backgroundColor = 'yellow')
        imgContainer.append(ele)
    }
}

// render p from array
for (let i = 0; i < imgLibrary.length; i++) {
    const ele = document.createElement('p')
    ele.innerText = imgLibrary[i]
    imgContainer.append(ele)
}

// render button from array
for (let i = 0; i < imgLibrary.length; i++) {
    const ele = document.createElement('button')
    ele.innerText = 'button' + i
    ele.addEventListener('click', function(e){
        highlight(i)
    })
    btnContainer.append(ele)
}

