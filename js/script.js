// Перевод изображений в формат webp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.toggle('webp');
	} else {
		document.querySelector('body').classList.toggle('no-webp');
	}
});

// Бургер
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav__menu-items');
if (burger) {
	burger.addEventListener("click", function (e) {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}

// Все варианты квартир
const priceAll = document.querySelector('.price__all-room');
const roomsFlex = document.querySelector('.price__rooms');
const rooms = document.querySelectorAll('._mobile-room');
if (priceAll) {
	priceAll.addEventListener("click", function(e) {
		priceAll.classList.toggle('_active');
		roomsFlex.classList.toggle('_active');
		for (let i = 0; i < rooms.length; i++) {
			rooms[i].classList.toggle('_active');
		}
	})
}

// Выбор авто по кнопке
let gas = document.querySelector('.slider__btnGasel');
let kabl = document.querySelector('.slider__btnKabluk');
let truck = document.querySelector('.slider__btnTruck');
let track1 = document.querySelector('._track-one');
let track2 = document.querySelector('._track-two');
let track3 = document.querySelector('._track-three');
mySlider('._track-one')
if (gas){
	track1.classList.add('_active');
	mySlider('._track-one');
	gas.addEventListener('click', function(e){
		gas.classList.add('_active');
		kabl.classList.remove('_active');
		truck.classList.remove('_active');
		track1.classList.add('_active');
		track2.classList.remove('_active');
		track3.classList.remove('_active');
		mySlider('._track-one');
	})
}
if (kabl){
	kabl.addEventListener('click', function(e){
		gas.classList.remove('_active');
		kabl.classList.add('_active');
		truck.classList.remove('_active');
		track1.classList.remove('_active');
		track2.classList.add('_active');
		track3.classList.remove('_active');
		mySlider('._track-two');
	})
}
if (truck) {
	truck.addEventListener('click', function(e){
		gas.classList.remove('_active');
		kabl.classList.remove('_active');
		truck.classList.add('_active');
		track1.classList.remove('_active');
		track2.classList.remove('_active');
		track3.classList.add('_active');
		mySlider('._track-three');
	})
}

// Слайдер
function mySlider(track) {
	$(document).ready(function(){
		$(track).slick({
			arrows:true,
			dots:false,
			slidesToShow:1,
			autoplay:false,
			speed:1000,
			autoplaySpeed:800,
			responsive:[
				{
					breakpoint: 768,
					settings: {
						slidesToShow:1,
						dots:true,
						arrows:false
					},
					
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow:1,
						dots:true,
						arrows:false
					}
				}
			]
		});
	});
}

