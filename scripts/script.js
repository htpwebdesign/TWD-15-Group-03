
// $('.main-nav').hide();

const $body = $('body');
const $btn = $('.mobile_menu');

$btn.on('click', function(){

	$body.toggleClass('show-mobile-menu');

});


// JavaScript Document

// const $body = document.querySelector('body');   
// const $btnMobileMenu = document.querySelector('.btn-mobile-menu');      

// $btnMobileMenu.addEventListener('click', function(){
	
// 	$body.classList.toggle('show-mobile-menu');	
	
// });