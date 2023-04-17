slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const img = document.querySelector('.banner-img');
let positionSlide = 0;
const txt = document.querySelector('#banner-txt');
// fleche
leftArrow.addEventListener('click', function() {
	positionSlide--;
	if (positionSlide === -1) {
		positionSlide = slides.length - 1;
	}
	img.src = slides[positionSlide].image;
	txt.innerHTML = slides[positionSlide].tagLine;
	console.log('On clique sur la flèche de gauche');
	updateDots();
});

rightArrow.addEventListener('click', function() {
	positionSlide++;
	if (positionSlide === slides.length) {
		positionSlide = 0;
	}
	img.src = slides[positionSlide].image;
	txt.innerHTML = slides[positionSlide].tagLine;
	console.log('On clique sur la flèche de droite');
	updateDots();
	
});
// petit points

for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement('div');
	newDot.classList = 'dot';
	dots.appendChild(newDot);
	newDot.addEventListener('click', function() {
		positionSlide = i;
		img.src = slides[positionSlide].image;
		txt.innerHTML = slides[positionSlide].tagLine;
		updateDots();
	});
}

let dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');

function updateDots() {
	for (let i = 0; i < dot.length; i++) {
		if (i === positionSlide) {
			dot[i].classList.add('dot_selected');
		} else {
			dot[i].classList.remove('dot_selected');
		}
	}}