const floresMes = [
	{
		id: 1,
		name: 'flor1',
		img: './assets/flro1.jpeg',
		price: 40000,
	},
	{
		id: 2,
		name: 'flor2',
		img: './assets/flor2.jpeg',
		price: 60000,
	},
	{
		id: 3,
		name: 'flor3',
		img: './assets/flor3.jpeg',
		price: 50000,
	},
	{
		id: 4,
		name: 'flor4',
		img: './assets/flor4.jpeg',
		price: 40000,
	},
	{
		id: 5,
		name: 'flor5',
		img: './assets/flor5.jpeg',
		price: 80000,
	},
	{
		id: 6,
		name: 'flor6',
		img: './assets/flor6.jpeg',
		price: 40000,
	},
];

// getElementsByClassName = Devuelve una "especie de array"(documentColection)
// querySelector = un selector que sirve tanto para Id, Class y tags, sin embargo toca especificar
const floresDelMes = document.querySelector('.month-flowers');
const tusMeGusta = document.querySelector('.section-likes');
const shopCart = [];

// <------------ Eventos ----------------->
// DOMContentLoaded = para cargar todo lo que venga después de la ,
document.addEventListener('DOMContentLoaded', () => {
	mostrarFlores();
});

//
//Funciones
const mostrarFlores = () => {
	for (let flor of floresMes) {
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

		const btnMonth = document.createElement('button');
		btnMonth.classList.add('btn-cardMonth');
		btnMonth.textContent = 'Comprar';
		btnMonth.onclick = () => {
			addTocart(flor.id);
		};

		//appendar --> Para que todos los elementos queden
		divCard.appendChild(imgFlorMes);
		divCard.appendChild(tituloFlorMes);
		divCard.appendChild(priceMes);
		divCard.appendChild(btnMonth);
		// console.log(divCard);

		//Agregar el divCard al section
		floresDelMes.appendChild(divCard);
	}
};

const addTocart = (id) => {
	const selectedFlower = floresMes.find((flor) => {
		return flor.id === id;
	});
	shopCart.push(selectedFlower);
	showCart(shopCart);
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
