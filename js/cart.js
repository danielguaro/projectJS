// // import { floresEnCarrito, shopCart } from './floresMes.js';

// import DATA from './dataBD.js';

// const allFlowers = DATA;
// console.log('---> AllFlowers', allFlowers);
// // console.log('---> shopCart', shopCart);

// const tusMeGusta = document.querySelector('.section-likes');
// const ValorTotal = document.querySelector('.ValorTotal');
// const vaciarTotal = document.querySelector('.vaciarTotal');
// let shopCart = [];
// let floresEnCarrito;

// // const addTocart = (id) => {
// // 	const selectedFlower = allFlowers.find((flor) => {
// // 		return flor.id === id;
// // 	});
// // 	carroCompras.push(selectedFlower);
// // 	showCart(carroCompras);
// // };

// floresEnCarrito = getCarFromStorage();

// function getCarFromStorage() {
// 	return JSON.parse(sessionStorage.getItem('carrito')) ?? [];
// }
// const addTocart = (id) => {
// 	// shopCart.push(id.target.getAttribute('marcador'));
// 	shopCart = [];
// 	console.log('shopCart--->', shopCart);
// 	// floresEnCarrito = getCarFromStorage();
// 	const idProducto = id.target.getAttribute('marcador');
// 	const florSeleccionada = allFlowers.find((flor) => flor.id == idProducto);
// 	floresEnCarrito.push(florSeleccionada);
// 	floresEnCarrito.map((flor) => {
// 		shopCart.push(flor.id.toString());
// 	});
// 	console.log('floresEnCarrito, shopCart', floresEnCarrito, shopCart);
// 	sessionStorage.setItem('carrito', JSON.stringify(floresEnCarrito));

// 	/* */
// 	showCart();
// };

// const showCart = () => {
// 	//Para limpiar el listado y evitar que se repita los llamados
// 	tusMeGusta.innerHTML = '';

// 	const carritoSinDuplicados = [...new Set(shopCart)];
// 	console.log('Soy el carrito Sin Duplicar', carritoSinDuplicados);
// 	//Quitar los duplicados
// 	carritoSinDuplicados.forEach((flor) => {
// 		//Obtener la flor
// 		console.log('flor-->', flor);
// 		const miFlor = allFlowers.filter((florBaseDatos) => {
// 			console.log('florBaseDatos', florBaseDatos);
// 			return florBaseDatos.id == parseInt(flor);
// 		});
// 		console.log('miflor', miFlor);

// 		//contar el número de veces que se repite un id
// 		const numeroRepetFlor = shopCart.reduce((total, itemId) => {
// 			return itemId == flor ? (total += 1) : total;
// 		}, 0);

// 		//La creación del HTML desde JS, se hará con Scripting
// 		const divCard = document.createElement('div');
// 		divCard.classList.add('cardLikes'); //Agregar una clase al elemento creado

// 		const imgFlorMes = document.createElement('img');
// 		imgFlorMes.classList.add('img-cardLikes');
// 		imgFlorMes.src = miFlor[0].img;

// 		const tituloFlorMes = document.createElement('h3');
// 		tituloFlorMes.classList.add('text-cardLikes');
// 		tituloFlorMes.textContent = miFlor[0].nombre;

// 		const cantidad = document.createElement('p');
// 		cantidad.classList.add('price-cardLikes');
// 		cantidad.textContent = numeroRepetFlor;

// 		const priceMes = document.createElement('p');
// 		priceMes.classList.add('price-cardLikes');
// 		priceMes.textContent = `$ ${miFlor[0].precio}`;
// 		// Boton para borrar
// 		const bntBorrar = document.createElement('button');
// 		bntBorrar.classList.add('btn-cardMonth');
// 		bntBorrar.textContent = 'X';
// 		bntBorrar.dataset.flor = flor;
// 		bntBorrar.addEventListener('click', borrarFlorCarro);

// 		//appendar --> Para que todos los elementos queden
// 		divCard.appendChild(imgFlorMes);
// 		divCard.appendChild(tituloFlorMes);
// 		divCard.appendChild(cantidad);
// 		divCard.appendChild(priceMes);
// 		divCard.appendChild(bntBorrar);

// 		//Agregar el divCard al section
// 		tusMeGusta.appendChild(divCard);
// 	});

// 	ValorTotal.textContent = `$ ${calcularTotal()}`;

// 	//
// 	// items.forEach((flor) => {
// 	// 	//La creación del HTML desde JS, se hará con Scripting
// 	// 	const divCard = document.createElement('div');
// 	// 	divCard.classList.add('cardMonth'); //Agregar una clase al elemento creado

// 	// 	const imgFlorMes = document.createElement('img');
// 	// 	imgFlorMes.classList.add('img-cardMonth');
// 	// 	imgFlorMes.src = flor.img;

// 	// 	const tituloFlorMes = document.createElement('h3');
// 	// 	tituloFlorMes.classList.add('text-cardMonth');
// 	// 	tituloFlorMes.textContent = flor.name;

// 	// 	const priceMes = document.createElement('p');
// 	// 	priceMes.classList.add('price-cardMonth');
// 	// 	priceMes.textContent = flor.price;

// 	// 	//appendar --> Para que todos los elementos queden
// 	// 	divCard.appendChild(imgFlorMes);
// 	// 	divCard.appendChild(tituloFlorMes);
// 	// 	divCard.appendChild(priceMes);
// 	// 	// console.log(divCard);

// 	// 	//Agregar el divCard al section
// 	// 	tusMeGusta.appendChild(divCard);
// 	// });
// };

// function borrarFlorCarro(evento) {
// 	// Obtener el Id almacenado
// 	const id = evento.target.dataset.flor;
// 	console.log('id180', id);
// 	//Borrar el o los productos
// 	shopCart = shopCart.filter((cartId) => {
// 		console.log('cartId--------------------------------->', cartId);
// 		return cartId != id;
// 	});
// 	const nuevoArray = floresEnCarrito.filter((flor) => {
// 		return flor.id != id;
// 	});
// 	sessionStorage.setItem('carrito', JSON.stringify(nuevoArray));
// 	// Renderizar
// 	floresEnCarrito = nuevoArray;
// 	showCart();
// }

// // Calcular precio total
// function calcularTotal() {
// 	// Recorrer el array del shopCart
// 	return shopCart
// 		.reduce((total, flor) => {
// 			//obtener el precio de cada flor
// 			const miFlor = allFlowers.filter((florBaseDatos) => {
// 				return florBaseDatos.id == parseInt(flor);
// 			});
// 			//Sumamos al total
// 			return total + miFlor[0].precio;
// 		}, 0)
// 		.toFixed(2);
// }

// // Vaciar el carro
// function vaciarCarro() {
// 	// Limpiar el Array del shop
// 	sessionStorage.clear();
// 	shopCart = [];
// 	showCart();
// }

// //Evento vaciar
// vaciarTotal.addEventListener('click', () => {
// 	vaciarCarro();
// });

//
/* */

import { floresEnCarrito } from './floresMes.js';
import { floresEnCarritoAmor } from './filterAmor.js';

const ValorTotal = document.querySelector('.ValorTotal');

let sumatoria = 0;

for (let flor of floresEnCarrito) {
	sumatoria += flor.precio;
}
console.log('sumatoria', sumatoria);

for (let flor of floresEnCarritoAmor) {
	sumatoria += flor.precio;
}
console.log('sumatoria', sumatoria);

sumatoria == 0
	? (ValorTotal.textContent = ' - ')
	: (ValorTotal.textContent = `$ ${sumatoria.toFixed(2)}`);
