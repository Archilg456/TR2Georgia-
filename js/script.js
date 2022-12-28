let accordion = document.querySelectorAll('.acordeon__box');

for (i = 0; i < accordion.length; i++ ){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle('active')
    } ) 
}

// log _ reg
let log_btn = document.querySelector('.enter_btn');
let log_reg_js = document.querySelector('.log_reg');

log_btn.addEventListener("click", function(){
    log_btn.classList.toggle("enter_btn__avtive")

    log_reg_js.classList.toggle('log_reg_active')
})

// function openLoginForm(){
//     document.body.classList.add("showLoginForm");
//   }
//   function closeLoginForm(){
//     document.body.classList.remove("showLoginForm");
// }















