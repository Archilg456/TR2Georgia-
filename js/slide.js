"Use Strict"

let data = [

    {
        id: 1,
        imgURL: 'img/shoping brend img/carters-logo.svg',
        title: ''
    },

    {
        id: 2,
        imgURL: 'img/shoping brend img/9973673459742.svg',
        title: ''
    },
    {
        id: 3,
        imgURL: 'img/shoping brend img/de-facto-logo-light-v2.svg',
        title: ''
    },
    {
        id: 4,
        imgURL: 'img/shoping brend img/de-facto-logo-light-v2.svg' ,
        title: ''
    },
    {
        id: 5,
        imgURL: 'img/shoping brend img/flo-logo.svg' ,
        title: ''
    },
    {
        id: 6,
        imgURL: 'img/shoping brend img/logo-new.svg' ,
        title: ''
    },
    {
        id: 7,
        imgURL: 'img/shoping brend img/logo.svg' ,
        title: ''
    },
    {
        id: 8,
        imgURL: 'img/shoping brend img/mango.svg' ,
        title: ''
    },
    {
        id: 9,
        imgURL: 'img/shoping brend img/mavi-logo.svg' ,
        title: ''
    },
    {
        id: 10,
        imgURL: 'img/shoping brend img/teknosa.svg' ,
        title: ''
    },


]

let slbtn = document.getElementById('sliderBtn');
let slider_act = document.getElementById('slider');
let btnLeft = document.getElementById('btn_left');
let btnRight = document.getElementById('btn_rigth');
let sliderContent = document.getElementById('slider__content');
let sliderIndex = 0;


function createDiv(){
    let divElement = document.createElement('div');
    return divElement;
}

function creteImgElement(item) {
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', item.imgURL);
    return imgElement;
}

function createTitle(item) {

    let titleElement = document.createElement('h2'); 
    titleElement.innerText =   item.title;
    return titleElement;
}


function slide() {
    sliderContent.innerHTML = '';
    let slideDiv = createDiv();
    let slideImg = creteImgElement(data[sliderIndex]);
    let slideTitle = createTitle(data[sliderIndex]);

    slideDiv.appendChild(slideImg);
    slideDiv.appendChild(slideTitle);
    sliderContent.appendChild(slideDiv);
    console.log(slideDiv);

}
slide();

function btnLeftclick(){
    if (sliderIndex == 0){
        sliderIndex = data.length - 1;
        slide();
        return;
    }
    sliderIndex --;
    slide();
}

function btnRightclick(){
    if (sliderIndex == data.length -1){
        sliderIndex = 0;
        slide();
        return;
    }
    sliderIndex ++;
    slide();
}

btnLeft.addEventListener('click', btnLeftclick );
btnRight.addEventListener('click', btnRightclick);

setInterval(() => {
    btnRightclick();
}, 1500)


// scrol up btn 

let upbtn = document.getElementById('go_up');

upbtn.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
});
