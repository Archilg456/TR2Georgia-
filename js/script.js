
//  Acordeon
let accordion = document.querySelectorAll('.acordeon__box');

for (i = 0; i < accordion.length; i++ ){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle('active')
    } ) 
}


// log 
let log_btn = document.querySelector('.enter_btn');
let log_reg_js = document.querySelector('.log_reg');
let closeBtn = document.getElementById("close_btn");

log_btn.addEventListener("click", function(){
    log_reg_js.classList.add('log_reg_active');

    closeBtn.addEventListener('click', function(){
      log_reg_js.classList.remove("log_reg_active")
    });
});

//  Burger __ Bar 

let burgerBar = document.getElementById('burgerbar');
let ulItem = document.querySelector('.ul__item');

burgerBar.addEventListener('click', function(){
    burgerBar.classList.toggle("is-active");
    ulItem.classList.toggle("ul-active");
})
















