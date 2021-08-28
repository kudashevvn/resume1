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

// Отзывы - показать все
let reviews = document.querySelector('.reviews-btn-all');
let allReviews = document.querySelector('.reviews__item_all-reviews');
if (reviews){
	reviews.addEventListener('click', function(e){
		allReviews.classList.toggle('_active');
		console.log('dsadas');
	})
}
// Перемещение основных отзывов в "Показать все"
let screen = window.innerWidth;
let review767 = document.getElementById('reviews__item_767');
let review1020 = document.getElementById('reviews__item_1020');
let reviewsAll = document.getElementById('all-reviews');
let fragment = document.createDocumentFragment();
if (screen < 1020){
	fragment.appendChild(review1020);
	reviewsAll.appendChild(fragment);
}
if (screen < 767){
	fragment.appendChild(review767);
	reviewsAll.appendChild(fragment);
}

// Рейтинг в отзывах
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0){
	initRatings();
}
function initRatings() {
	let ratingActive, ratingValue;
	for (let i = 0; i < ratings.length; i++){
		const rating = ratings[i];
		initRating(rating);
	}
	function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWeidth();
	}
	function initRatingVars(rating){
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	function setRatingActiveWeidth(i = ratingValue.innerHTML){
		const ratingActiveWidth = i / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}

// Показать отзыв полностью
let reviewsTurn = document.querySelectorAll('.reviews__btn_turn');
let reviewsRead = document.querySelectorAll('.reviews__btn_read');
let reviewsPreview = document.querySelectorAll('.reviews__text_preview');
let reviewsFull = document.querySelectorAll('.reviews__text_full');
if (reviewsRead.length > 0){
	readAll();
}
function readAll(){
	for (let i = 0; i < reviewsRead.length; i++){
		const reviewRead = reviewsRead[i];
		const reviewTurn = reviewsTurn[i];
		const preview = reviewsPreview[i];
		const full = reviewsFull[i];
		openReview(reviewRead, reviewTurn, preview, full);
		turnReview(reviewTurn, reviewRead, preview, full);
	}
	function openReview(reviewRead, reviewTurn, preview, full) {
		reviewRead.addEventListener('click', function(e){
			reviewRead.classList.toggle('_active');
			reviewTurn.classList.toggle('_active');
			preview.classList.toggle('_active');
			full.classList.toggle('_active');
		})
	}
	function turnReview(reviewRead, reviewTurn, preview, full) {
		reviewRead.addEventListener('click', function(e){
			reviewRead.classList.toggle('_active');
			reviewTurn.classList.toggle('_active');
			preview.classList.toggle('_active');
			full.classList.toggle('_active');
		})
	}
}

// Наличие согласия на обработку персональных данных
let agree = document.querySelector('.checkbox__input');
let checkbox = document.querySelector('.checkbox');
let checkInput = document.querySelectorAll('.call__input');
let checkBtn = document.querySelector('.call__btn');

if (checkbox){
	agree.addEventListener('click', function(e){
		if (agree.hasAttribute('checked') === true){
			checkBtn.setAttribute('disabled', 'disabled');
			checkInput.forEach(i => i.setAttribute('disabled', 'disabled'));
			agree.removeAttribute('checked');
			return
		} else if (agree.hasAttribute('checked') === false){
			checkBtn.removeAttribute('disabled');
			checkInput.forEach(i => i.removeAttribute('disabled'));
			agree.setAttribute('checked', 'checked');
		}
	})
}
// Сколл по странице
let links = document.querySelectorAll('a[href^="#"]');
for (let link of links){
	link.addEventListener('click', function(e){
		e.preventDefault()
		const id = link.getAttribute('href');
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}