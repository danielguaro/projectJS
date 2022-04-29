const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSelectionLast = sliderSection[sliderSection.length - 1];

const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');

//Para obtener el ultimo elemento y ponerlo en el slider
slider.insertAdjacentElement('afterbegin', sliderSelectionLast);

const moveRight = () => {
	let sliderSelectionFirst = document.querySelectorAll('.slider__section')[0];
	slider.style.marginLeft = '-200%';
	slider.style.transition = 'all 0.5s';
	setTimeout(() => {
		slider.style.transition = 'none';
		slider.insertAdjacentElement('beforeend', sliderSelectionFirst);
		slider.style.marginLeft = '-100%';
	}, 500);
};

btnRight.addEventListener('click', () => {
	moveRight();
});

const moveLeft = () => {
	let sliderSection = document.querySelectorAll('.slider__section');
	let sliderSelectionLast = sliderSection[sliderSection.length - 1];
	slider.style.marginLeft = '0';
	slider.style.transition = 'all 0.5s';
	setTimeout(() => {
		slider.style.transition = 'none';
		slider.insertAdjacentElement('afterbegin', sliderSelectionLast);
		slider.style.marginLeft = '-100%';
	}, 500);
};

btnLeft.addEventListener('click', () => {
	moveLeft();
});

//Para que se ejecute cada cierto tiempo se aplica setInterval()
setInterval(() => {
	moveRight();
}, 4000);
