// 1 get all the relative dom elements to use for rendering
// 2 fetch pictures from backend
// 3 render them
let objs={
    body:null,
    inputCity:null,
    btnSearch:null,
    carousel:null
}
const unsplashKey='0hQl7AiOhJ8bTCeIuc4rtCoIM-lkqmS8uh10Jhpw4wc'

objs.body= document.querySelector('body')
objs.inputCity=document.querySelector('.searchBar input')
objs.btnSearch=document.querySelector('.searchBar button')
objs.carousel=document.querySelector('.carousel')
const setKeyEvent=function (){
    objs.inputCity.addEventListener('keyup',function (evt){
        if
    })
}
const fetchData = function (){
    const newCity = objs.inputCity.value.trim().toLocaleLowerCase()||'macbook'
    fetch(`https://api.unsplash.com/search/photos?client_id=${unsplashKey}&query=${newCity}&orientation=landscape`)
        .then(function(response){
            return response.json()
        }
        .then(function (data){
            console.log('data fetched:', data)
            console.log('data raw',data)
            if ()
            renderImages(data.results)
        })
}
const renderImages=function (arrImages){
    const img=arrImages[0].urls.full
    objs.body.style.background=`url('${img}') no-repeat center fixed`

    createCarousel(arrImages)

}
const createCarousel = function (arrImages){
    for(let i =0;i<arrImages.length;i++){
        let item= document.createElement('div')
        item.className='imgContainer'

        const img = arrImages[i].urls.regular
        item.style.background=`url('${img}') no-repeat center fixed`
        item.dataset.index=i
        objs.carousel.appendChild(item)
        item.addEventListener('click',function (){console.log()})

    }
}
fetchData()
objs.btnSearch.addEventListener('click',fetchData)
objs.inputCity.addEventListener('keyup',)