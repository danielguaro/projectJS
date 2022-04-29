import DATA from './dataBD.js';

const allFlowers = DATA;
console.log('---> AllFlowers', allFlowers);

const carroCompras = [];

const addTocart = (id) => {
	const selectedFlower = allFlowers.find((flor) => {
		return flor.id === id;
	});
	carroCompras.push(selectedFlower);
	showCart(carroCompras);
};

const showCart = (items) => {
	//Para limpiar el listado y evitar que se repita los llamados
	tusMeGusta.innerHTML = '';

	items.forEach((flor) => {
		//La creación del HTML desde JS, se hará con Scripting
		const divCard = document.createElement('div');
		divCard.classList.add('cardMonth'); //Agregar una clase al elemento creado

		const imgFlorMes = document.createElement('img');
		imgFlorMes.classList.add('img-cardMonth');
		imgFlorMes.src = flor.img;

		const tituloFlorMes = document.createElement('h3');
		tituloFlorMes.classList.add('text-cardMonth');
		tituloFlorMes.textContent = flor.name;

		const priceMes = document.createElement('p');
		priceMes.classList.add('price-cardMonth');
		priceMes.textContent = flor.price;

		//appendar --> Para que todos los elementos queden
		divCard.appendChild(imgFlorMes);
		divCard.appendChild(tituloFlorMes);
		divCard.appendChild(priceMes);
		// console.log(divCard);

		//Agregar el divCard al section
		tusMeGusta.appendChild(divCard);
	});
};
