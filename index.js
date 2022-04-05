let desplegable = document.querySelector('.desplegable');

//
//
let listElements = document.querySelectorAll('.list_button--click');
listElements.forEach((listElement) => {
	listElement.addEventListener('click', () => {
		listElement.classList.toggle('arrow'); //crea una clase con el nombre arrow cuando le doy click, de igual forma, si le vuelvo a dar click, lo quita

		let height = 0;
		let menu = listElement.nextElementSibling;
		// console.log(
		// 	menu.scrollHeight
		// ); /* Para que diga el alto minimo que se requiere para que exista el elemento*/
		if (menu.clientHeight == '0') {
			height = menu.scrollHeight;
		}
		menu.style.height = `${height}px`;
	});
});

//
//
const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
const closeArrow = document.querySelector('#upArrow');
btnMenu.addEventListener('click', () => {
	menu.classList.toggle('show');
	btnMenu.classList.toggle('hide');
	closeArrow.classList.toggle('upArrow');
});
closeArrow.addEventListener('click', () => {
	menu.classList.toggle('show');
	btnMenu.classList.toggle('hide');
	closeArrow.classList.toggle('upArrow');
});
