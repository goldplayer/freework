// // MIXITUP PLUGINS
// $(document).ready(function(){
//     var mixer = mixitup('.box-list')
// });
// // 


let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})