const imgs=[
    'https://mobilecontent.costco.com/live/resource/img/24w09075/d_24w09075_hero_mothers_day_gift_ideas.jpg',
    'https://mobilecontent.costco.com/live/resource/img/24w09040/d-24w09040_homepage_hero_mothers_day_bms.jpg',
    'https://mobilecontent.costco.com/staging/resource/img/24w09058/d_24w09058_hero_first_quailty.jpg',
    'https://mobilecontent.costco.com/live/resource/img/20240429_EUR_Imgs/20240429_Europe_US_ComHero_D.jpg',
    'https://mobilecontent.costco.com/staging/resource/img/24w08101/d_24w08101_appliances_homepage_hero_v03.jpg',
]
const descriptions=[

]
const data={
    imgs: imgs,
    descriptions: descriptions,
    index:0,
    timerID:null,
    arrButtons:[]
}

const objs ={
    img: document.querySelector('.carousel img'),
    btnBar: document.querySelector('.carousel .btnBar'),

    navPrev:document.querySelector('.btnNav.prev'),
    navNext:document.querySelector('.btnNav.next')

}

const cbClick = function (evt){
    let imgID=evt.target.dataset.imgID
    console.log('type of imgid',typeof(imgID))
    imgID=Number(imgID)
    objs.img.src = data.imgs[imgID]
}
const timerHanlder =function (){
    data.index++
    if(data.index===data.imgs.length){
        data.index=0
    }
    updatedSelected(data.index)
    objs.img.src = data.imgs[data.index]
}
const starAnimate = function (){
   data.timerID= setInterval(timerHanlder,3*1000)
}

const  stopAnimate = function (){
    if (data.timerID){
        clearInterval(data.timerID)
        data.timerID=null
    }

}
const updatedSelected=function (index){
    data.arrButtons.forEach(function (ele,inx){
        ele.className=''
        if (inx===index){
            data.arrButtons[index].className='btnSelected'
        }

    })

}
const cbMouseEnter  = function (evt){
    stopAnimate()
}
const cbMouseLeave  = function (evt){
    starAnimate()
}
const update=function (index){
    updatedSelected(index)
    objs.img.src=data.imgs[index]

}
const cbPagePrev=function (e){
    if(data.index>0){
        data.index--
        update(data.index)
    }
}
const cbPageNext=function (e){
    if(data.index<data.imgs.length-1){
        data.index++
        update(data.index)
    }
}
const createCarousel =function (){
    objs.img.src = data.imgs[data.index]
    objs.img.addEventListener('mouseenter',cbMouseEnter)
    objs.img.addEventListener('mouseleave',cbMouseLeave)
    objs.navPrev.addEventListener('click',cbPagePrev)
    objs.navNext.addEventListener('click',cbPageNext)
    for (let i =0; i < imgs.length; i++){
        let eleBtn =document.createElement('button')
        eleBtn.dataset.imgID =i
        eleBtn.addEventListener('click',cbClick)
        objs.btnBar.appendChild(eleBtn)
        data.arrButtons.push(eleBtn)
        if (i===data.index){
            updatedSelected(i)
        }

    }
}
createCarousel()
starAnimate()