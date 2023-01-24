"use strict"

let main_box = document.getElementById('post__info');
let overlay = document.getElementById('overlay');
let popapcontent = document.getElementById('overlay__content');
let closeBtn = document.getElementById('close_btn');
let addBtn = document.getElementById('add');
let overlayAdd = document.getElementById('overlay_add');
let formAdd = document.getElementById('form_add');
let inputTitle = document.getElementById('title');


function ajax(url, callback ) {
let request = new XMLHttpRequest();
request.open('GET', url)
request.addEventListener('load', function(){
    let recivedInfo = JSON.parse(this.responseText);
    callback(recivedInfo);
});
request.send();
}
function createPost(element) {
    let div__box = document.createElement('div');
    div__box.classList.add('post__info__box');
    div__box.setAttribute('date-id', element.id);
    let post__id = document.createElement('h4');
    post__id.innerText = element.id;
    let post__title = document.createElement('h2');
    post__title.innerText = element.title;

    let dlt__btn = document.createElement('i')
    dlt__btn.classList.add('fa-solid');
    dlt__btn.classList.add('fa-trash-can-arrow-up');
    dlt__btn.setAttribute("data-id", element.id);

    div__box.appendChild(post__id);
    div__box.appendChild(post__title);
    div__box.appendChild(dlt__btn);
    div__box.addEventListener('click', function(event){
        let id = event.currentTarget.getAttribute('date-id');
        overlay.classList.add('active');
        let servUrl = `http://localhost:3000/comments/${id}`;
        ajax(servUrl, function(recivedInfo){
            overlaydescription(recivedInfo); 
        });
        console.log(id);
    })

    dlt__btn.addEventListener('click', function(event){
        event.stopPropagation();
        let dltBtnid = event.target.getAttribute('data-id');
        let dltidUrl = `http://localhost:3000/comments/${dltBtnid}`;
        fetch(dltidUrl, {
        method: 'DELETE',
    })

    .then((response) => response.json())
    .then( () => div__box.remove());


    });
     
    main_box.appendChild(div__box);
    console.log(div__box);
}
function overlaydescription(element){
    let description = document.createElement('p');
    description.innerText = element.body;
    popapcontent.appendChild(description);
}
closeBtn.addEventListener('click', function(){
    overlay.classList.remove('active');
    popapcontent.innerHTML = " ";  
})
ajax('http://localhost:3000/comments', function(recivedInfo){
    recivedInfo.forEach(element => {  
        createPost(element);
    });
});


addBtn.addEventListener('click', function(){
    overlayAdd.classList.add('activeAdd');
    inputTitle.value = ' ';
});

formAdd.addEventListener('submit', function(event) {
event.preventDefault();
console.log(event.target[0].value);

let formData = {

    title: event.target[0].value,
};

fetch('http://localhost:3000/comments', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((newPost) => {
    createPost(newPost);
    overlayAdd.classList.remove('activeAdd');

  });
});


// navigation bg scrol chaged color 

let navigation = document.getElementById('nav_scrol');

window.onscroll = function (){
  if (document.documentElement.scrollTop > 2){
    navigation.classList.add("scrol");
  }else {
    navigation.classList.remove("scrol");
  }
};


// scrol up btn 

let upbtn = document.getElementById('go_up');

upbtn.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
});
