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
const ValorTotal = document.querySelector('.ValorTotal');
const vaciarTotal = document.querySelector('.vaciarTotal');
let shopCart = [];

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
		btnMonth.setAttribute('marcador', flor.id);
		btnMonth.addEventListener('click', addTocart);

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

// const addToLocalStore = (id) => {
// 	const selectedFlower = floresMes.find((flor) => {
// 		return flor.id === id;
// 	});
// 	shopCart.push(selectedFlower);
// 	console.log(shopCart);
// 	showCart(shopCart);
// };
/* */
const guardarLocal = (key, keyValue) => {
	sessionStorage.setItem(key, keyValue);
};
/* */
const addTocart = (id) => {
	shopCart.push(id.target.getAttribute('marcador'));
	// console.log('target', id.target.getAttribute('marcador'));

	showCart();
};

function showCart() {
	//Para limpiar el listado y evitar que se repita los llamados
	tusMeGusta.innerHTML = '';
	// Quitar los duplicados

	const carritoSinDuplicados = [...new Set(shopCart)];
	console.log('Soy el carrito Sin Duplicar', carritoSinDuplicados);
	//Quitar los duplicados
	carritoSinDuplicados.forEach((flor) => {
		//Obtener la flor
		console.log('flor 122', flor);
		const miFlor = floresMes.filter((florBaseDatos) => {
			return florBaseDatos.id == parseInt(flor);
		});
		console.log('miflor', miFlor);

		/* Linea buena*/
		const floresAlmacenadasEnStorage = guardarLocal(
			flor,
			JSON.stringify(miFlor)
		);
		let floresGuardadas = JSON.parse(sessionStorage.getItem(flor));
		console.log('floresGuardadas', floresGuardadas);
		/* */
		//contar el número de veces que se repite un id
		const numeroRepetFlor = shopCart.reduce((total, itemId) => {
			return itemId == flor ? (total += 1) : total;
		}, 0);

		//La creación del HTML desde JS, se hará con Scripting
		const divCard = document.createElement('div');
		divCard.classList.add('cardLikes'); //Agregar una clase al elemento creado

		const imgFlorMes = document.createElement('img');
		imgFlorMes.classList.add('img-cardLikes');
		imgFlorMes.src = miFlor[0].img;

		const tituloFlorMes = document.createElement('h3');
		tituloFlorMes.classList.add('text-cardLikes');
		tituloFlorMes.textContent = miFlor[0].name;

		const cantidad = document.createElement('p');
		cantidad.classList.add('price-cardLikes');
		cantidad.textContent = numeroRepetFlor;

		const priceMes = document.createElement('p');
		priceMes.classList.add('price-cardLikes');
		priceMes.textContent = `$ ${miFlor[0].price}`;
		// Boton para borrar
		const bntBorrar = document.createElement('button');
		bntBorrar.classList.add('btn-cardMonth');
		bntBorrar.textContent = 'X';
		bntBorrar.dataset.flor = flor;
		bntBorrar.addEventListener('click', borrarFlorCarro);

		//appendar --> Para que todos los elementos queden
		divCard.appendChild(imgFlorMes);
		divCard.appendChild(tituloFlorMes);
		divCard.appendChild(cantidad);
		divCard.appendChild(priceMes);
		divCard.appendChild(bntBorrar);
		// console.log(divCard);

		//Agregar el divCard al section
		tusMeGusta.appendChild(divCard);
	});

	ValorTotal.textContent = `$ ${calcularTotal()}`;
}

function borrarFlorCarro(evento) {
	// Obtener el Id almacenado
	const id = evento.target.dataset.flor;
	console.log('id180', id);
	//Borrar el o los productos
	shopCart = shopCart.filter((cartId) => {
		return cartId != id;
	});
	// Renderizar
	showCart();
}

// Calcular precio total
function calcularTotal() {
	// Recorrer el array del shopCart
	return shopCart
		.reduce((total, flor) => {
			//obtener el precio de cada flor
			const miFlor = floresMes.filter((florBaseDatos) => {
				return florBaseDatos.id == parseInt(flor);
			});
			//Sumamos al total
			return total + miFlor[0].price;
		}, 0)
		.toFixed(2);
}

// Vaciar el carro
function vaciarCarro() {
	// Limpiar el Array del shop
	shopCart = [];
	showCart();
}

//Evento vaciar
vaciarTotal.addEventListener('click', vaciarCarro);
