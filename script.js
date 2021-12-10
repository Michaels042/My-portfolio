// let btn = document.querySelector('.toggle');
// let icon = btn.querySelector('.fa-bars');

// btn.onclick = function (){
//     if(icon.classList.contains('.fa-bars')){
//         icon.classList.replace('fa-bars', 'fa-times');
//     }
//     else {
//         icon.classList.replace('fa-times', 'fa-bars');
//     }
// }

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn = addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});