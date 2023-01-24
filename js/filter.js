"Use Strict"



let btns = document.querySelectorAll('.buttons button');
let imgs = document.querySelectorAll('.list__wraper img');


for(let i=1; i < btns.length; i++ ){

    btns[i].addEventListener('click', filterImg);
}

function setActiveBtn(e) {

    btns.forEach( btn => {
        btn.classList.remove('btn-clicked');
    });

    e.target.classList.add('btn-clicked');
}

function filterImg(e) {

    setActiveBtn(e);

    imgs.forEach(img => {

        img.classList.remove('img-shrink');
        img.classList.add('img-expend');


        let imgType = parseInt(img.dataset.img);
        let btnType = parseInt(e.target.dataset.btn);


        if (imgType !== btnType) {
            img.classList.remove('img-expend');
            img.classList.add('img-shrink');
        }
    });
}

btns[0].addEventListener('click', (e) => {

    setActiveBtn(e);

    imgs.forEach(img => {
        img.classList.remove('img-shrink');
        img.classList.add('img-expend');
    });

});