const imgs =[
   'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240701-CanadaDay-en.png',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-24cweb1110-CanadaDay-tire-promo-240701-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-whybuy-tires-240122-en.png',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240618-microsoft-copilot-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240701-SD-promo-en.png',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-24cweb1027-Costco-Direct-promo-end-240901-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-231213-porterlaunch-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240701-P11-MVM-wk1-en.jpg'

]

 const data={
     imgs:imgs,
     index:0,
 }
const updatedSelected=function (index){

}
 const cbClick = function (e){
 console.log('click',e.target.dataset.imgID)
     let imgsID=e.target.dataset.imgID
     imgsID=Number(imgsID)
     imgEle.src=data.imgs[imgsID]
}

const btnEle=document.getElementById('button')
const imgEle=document.getElementById('img')



 const creatCarousel= function (){

   imgEle.src=data.imgs[data.index]
   for(let i =0; i<imgs.length;i++){
   let btnBar=document.createElement('button')
       btnBar.dataset.imgID=i
   btnBar.addEventListener('click',cbClick)
       btnBar.className='smallBtn'
   btnEle.append(
       btnBar
   )


 }
creatCarousel()