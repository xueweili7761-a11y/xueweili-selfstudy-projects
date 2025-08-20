const input=document.getElementById('input')
const search=document.getElementById('search')
const carousel=document.getElementById('gallery')
const body=document.body
const key ='cE3ZJA-YQkbpvL510DjFDM6eHM5uBroFe8Hoztb86Gw'
let preUrl=null

const setKey=function (){
    //input keyup
    input.addEventListener('keyup',function (e){
        if(e.key==='Enter'&&input.value.trim().length){
            fetchData()

        }
    })
}
const fetchData=()=>{
    const newCity= input.value.trim().toLowerCase()||'macbook'
    fetch(`https://api.unsplash.com/search/photos?client_id=${key}&query=${newCity}&orientation=landscape`)
        .then(res=>res.json())
        .then(res=>{console.log(res)


        renderimages(res.results)


        }



        )

}

const renderimages=function (arr){
 let img=arr[0].urls.full
    body.style.background=`url('${img}') no-repeat center center fixed`
   createCarousel(arr)
}
const setSelect=function (ele){
    let images=document.querySelectorAll('[data-index]')
    images.forEach(function (e){
        e.className=''
    })
    ele.className='selected'
}
const createCarousel=function (arr){
            carousel.innerText=''
    for(let i=0;i<arr.length;i++){
        let item=document.createElement('div')
        if(i===0){
            item.className='selected'
        }
        item.style.background=`url('${arr[i].urls.regular}') no-repeat center center fixed`
        item.dataset.index=i
        item.dataset.url2=arr[i].urls.full
        carousel.appendChild(item)
        item.addEventListener('click',function (e){
            updateBackground(e.target.dataset.url2)
            setSelect(e.target)
        })
        item.addEventListener('mouseenter',function (e){
            let newUrl=e.target.dataset.url2
            if(!preUrl){
                let string=body.style.background
                updateBackground(newUrl)
                let start=string.indexOf('"')
                let end=string.indexOf('"',start+1)
                string=string.slice(start+1,end)
                preUrl=string
                updateBackground(newUrl)
            }


        })
        item.addEventListener('mouseleave',function (e){
if(preUrl){
    updateBackground(preUrl)
    preUrl=null
}
        })
    }
}
const updateBackground=function (url){

    body.style.background=`url('${url}') no-repeat center center fixed`
}
fetchData()
setKey()
search.addEventListener('click',fetchData)