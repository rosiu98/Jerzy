'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}


const closeModal = function(){
		modal.classList.add('hidden');
		overlay.classList.add('hidden');
	}

for(let i = 0; i < btnsOpenModal.length; i++){
	 btnsOpenModal[i].addEventListener('click', function(e){
	  //openModal
	  e.preventDefault();
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	})
}

	btnCloseModal.addEventListener('click', closeModal);

	overlay.addEventListener('click', function(){ // closeModal
		modal.classList.add('hidden');
		overlay.classList.add('hidden');
	})

document.addEventListener('keydown', function(event){
	// console.log(event.key) Pokazuje ,ktory klawisz naciskamy
	if(event.key === 'Escape' && !modal.classList.contains('hidden')){
		
			closeModal();
	}
})


function initParadoxWay() {
    
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    // setInterval(function () {
    //     let size = random(sArray);
    //     $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
    //     $('.individual-bubble').animate({
    //         'bottom': '100%',
    //         'opacity': '-=0.7'
    //     }, 4000, function () {
    //         $(this).remove()
    //     });
    // }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});


const menu = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const menuActive = document.querySelector('.menu-btn active');

const openMenu = function() {
	navigation.classList.toggle('active');
	menu.classList.toggle('active');
}

menu.addEventListener('click' , openMenu);

// const closeMenu = function() {
// 	navigation.classList.remove('active');
// 	menu.classList.remove('active');
// }

// menuActive.addEventListener('click' , closeMenu);

