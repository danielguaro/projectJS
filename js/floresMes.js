import DATA from './dataBD.js';

const floresMes = [];
const datas = DATA;
for (let data of datas) {
	if (data.momento == 'florMes') {
		floresMes.push(data);
	}
}

// getElementsByClassName = Devuelve una "especie de array"(documentColection)
// querySelector = un selector que sirve tanto para Id, Class y tags, sin embargo toca especificar
const floresDelMes = document.querySelector('.month-flowers');
const tusMeGusta = document.querySelector('.section-likes');
const ValorTotal = document.querySelector('.ValorTotal');
const vaciarTotal = document.querySelector('.vaciarTotal');
export let shopCart = [];

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
		tituloFlorMes.textContent = flor.nombre;

		const priceMes = document.createElement('p');
		priceMes.classList.add('price-cardMonth');
		priceMes.textContent = flor.precio;

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

let floresEnCarrito = getCarFromStorage();

function getCarFromStorage() {
	return JSON.parse(sessionStorage.getItem('carrito')) ?? [];
}
const addTocart = (id) => {
	// shopCart.push(id.target.getAttribute('marcador'));
	shopCart = [];
	console.log('shopCart--->', shopCart);
	// floresEnCarrito = getCarFromStorage();
	const idProducto = id.target.getAttribute('marcador');
	const florSeleccionada = floresMes.find((flor) => flor.id == idProducto);
	floresEnCarrito.push(florSeleccionada);
	floresEnCarrito.map((flor) => {
		shopCart.push(flor.id.toString());
	});
	console.log('floresEnCarrito, shopCart', floresEnCarrito, shopCart);
	sessionStorage.setItem('carrito', JSON.stringify(floresEnCarrito));

	/* */
	showCart();
};

if (floresEnCarrito.length) {
	console.log('floresEnCarrito------->', floresEnCarrito);
	floresEnCarrito.map((flor) => {
		shopCart.push(flor.id.toString());
	});
	showCart();
}
function showCart() {
	//Para limpiar el listado y evitar que se repita los llamados
	tusMeGusta.innerHTML = '';
	// Quitar los duplicados

	const carritoSinDuplicados = [...new Set(shopCart)];
	console.log('Soy el carrito Sin Duplicar', carritoSinDuplicados);
	//Quitar los duplicados
	carritoSinDuplicados.forEach((flor) => {
		//Obtener la flor
		console.log('flor-->', flor);
		const miFlor = floresMes.filter((florBaseDatos) => {
			console.log('florBaseDatos', florBaseDatos);
			return florBaseDatos.id == parseInt(flor);
		});
		console.log('miflor', miFlor);

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
		tituloFlorMes.textContent = miFlor[0].nombre;

		const cantidad = document.createElement('p');
		cantidad.classList.add('price-cardLikes');
		cantidad.textContent = numeroRepetFlor;

		const priceMes = document.createElement('p');
		priceMes.classList.add('price-cardLikes');
		priceMes.textContent = `$ ${miFlor[0].precio}`;
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
		console.log('cartId--------------------------------->', cartId);
		return cartId != id;
	});
	const nuevoArray = floresEnCarrito.filter((flor) => {
		return flor.id != id;
	});
	sessionStorage.setItem('carrito', JSON.stringify(nuevoArray));
	// Renderizar
	floresEnCarrito = nuevoArray;
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
			return total + miFlor[0].precio;
		}, 0)
		.toFixed(2);
}

// Vaciar el carro
function vaciarCarro() {
	// Limpiar el Array del shop
	sessionStorage.clear();
	shopCart = [];
	showCart();
}

//Evento vaciar
vaciarTotal.addEventListener('click', vaciarCarro);
