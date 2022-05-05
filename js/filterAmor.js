import DATA from './dataBD.js';

const amor = [];
const datas = DATA;
for (let data of datas) {
	if (data.momento == 'amor') {
		amor.push(data);
	}
}

const categoryTitle = document.querySelectorAll('.category-title');
const floresMomento = document.querySelector('.section-likesAmor');
// const ValorTotal = document.querySelector('.ValorTotal');
const vaciarTotal = document.querySelector('.vaciarTotal');
let shopCartAmor = [];
export let floresEnCarritoAmor;

// <------------ Eventos ----------------->
// DOMContentLoaded = para cargar todo lo que venga después de la ,
document.addEventListener('DOMContentLoaded', () => {
	MostrarTodo();
});

for (let i = 0; i < categoryTitle.length; i++) {
	categoryTitle[i].addEventListener(
		'click',
		changeActivePosition.bind(this, categoryTitle[i])
	);
}

function changeActivePosition(activeItem) {
	for (let i = 0; i < categoryTitle.length; i++) {
		categoryTitle[i].classList.remove('active');
	}
	activeItem.classList.add('active');
}

// const ramos = amor.filter((element) => {
// 	return element.tipo.includes('ramo');
// });
// console.log(ramos);
// const anchetas = amor.filter((element) => {
// 	return element.tipo.includes('ancheta');
// });
// console.log(anchetas);
// const ramilletes = amor.filter((element) => {
// 	return element.tipo.includes('ramillete');
// });
// console.log(ramilletes);
// const cajas = amor.filter((element) => {
// 	return element.tipo.includes('caja');
// });
// console.log(cajas);

const momentoAmor = document.querySelector('.filterResult');
for (let i = 0; i < categoryTitle.length; i++) {
	categoryTitle[i].addEventListener(
		'click',
		changeFlowers.bind(this, categoryTitle[i])
	);
}

const MostrarTodo = () => {
	for (let a of amor) {
		//La creación del HTML desde JS, se hará con Scripting
		const divCard = document.createElement('div');
		divCard.classList.add('cardFilter'); //Agregar una clase al elemento creado

		const imgFlor = document.createElement('img');
		imgFlor.classList.add('img-cardFilter');
		imgFlor.src = a.img;

		const tituloFlor = document.createElement('h3');
		tituloFlor.classList.add('text-cardFilter');
		tituloFlor.textContent = a.nombre;

		const price = document.createElement('p');
		price.classList.add('price-cardFilter');
		price.textContent = a.precio;

		const btn = document.createElement('button');
		btn.classList.add('btn-cardFilter');
		btn.textContent = 'Comprar';
		btn.setAttribute('marcador', a.id);
		btn.addEventListener('click', addTocartAmor);

		divCard.appendChild(imgFlor);
		divCard.appendChild(tituloFlor);
		divCard.appendChild(price);
		divCard.appendChild(btn);
		momentoAmor.appendChild(divCard);
	}
};

const functionFilter = (moments, tipo) => {
	for (let moment of moments) {
		if (moment.tipo == tipo) {
			//La creación del HTML desde JS, se hará con Scripting
			const divCard = document.createElement('div');
			divCard.classList.add('cardFilter'); //Agregar una clase al elemento creado

			const imgFlor = document.createElement('img');
			imgFlor.classList.add('img-cardFilter');
			imgFlor.src = moment.img;

			const tituloFlor = document.createElement('h3');
			tituloFlor.classList.add('text-cardFilter');
			tituloFlor.textContent = moment.nombre;

			const price = document.createElement('p');
			price.classList.add('price-cardFilter');
			price.textContent = moment.precio;

			const btn = document.createElement('button');
			btn.classList.add('btn-cardFilter');
			btn.textContent = 'Comprar';
			btn.setAttribute('marcador', moment.id);
			btn.addEventListener('click', addTocartAmor);

			divCard.appendChild(imgFlor);
			divCard.appendChild(tituloFlor);
			divCard.appendChild(price);
			divCard.appendChild(btn);
			momentoAmor.appendChild(divCard);
		}
	}
};

function changeFlowers(categories) {
	if (categories.innerHTML.includes('<li>Todo</li>')) {
		momentoAmor.innerHTML = '';
		MostrarTodo();
	}
	if (categories.innerHTML.includes('<li>Ramos</li>')) {
		momentoAmor.innerHTML = '';
		functionFilter(amor, 'ramo');
		console.log('RAMOS');
	}
	if (categories.innerHTML.includes('<li>Anchetas</li>')) {
		momentoAmor.innerHTML = '';
		functionFilter(amor, 'ancheta');
		console.log('ANCHETAS');
	}
	if (categories.innerHTML.includes('<li>Ramilletes</li>')) {
		momentoAmor.innerHTML = '';
		functionFilter(amor, 'ramillete');
	}
	if (categories.innerHTML.includes('<li>Cajas</li>')) {
		momentoAmor.innerHTML = '';
		functionFilter(amor, 'caja');
		console.log('CAJAS');
	}
}

floresEnCarritoAmor = getCarFromStorage();

function getCarFromStorage() {
	return JSON.parse(sessionStorage.getItem('carritoAmor')) ?? [];
}

const addTocartAmor = (id) => {
	shopCartAmor = [];
	console.log('shopCart--->', shopCartAmor);
	// floresEnCarrito = getCarFromStorage();
	const idProducto = id.target.getAttribute('marcador');
	console.log('idProducto', idProducto);
	const florSeleccionada = amor.find((flor) => flor.id == idProducto);
	swal({
		title: 'Agregado al carrito',
		text: florSeleccionada.nombre,
		icon: 'success',
		button: false,
		timer: 2000,
	});
	floresEnCarritoAmor.push(florSeleccionada);
	floresEnCarritoAmor.map((flor) => {
		shopCartAmor.push(flor.id.toString());
	});
	console.log('floresEnCarrito, shopCart', floresEnCarritoAmor, shopCartAmor);
	sessionStorage.setItem('carritoAmor', JSON.stringify(floresEnCarritoAmor));
	/* */
	// const selectedMoment = amor.find((flor) => {
	// 	return flor.id === id;
	// });
	// shopCart.push(selectedMoment);
	showCartAmor();
};

/* HARÉ MUCHOS CAMBIOS AQUÍ*/
const showCartAmor = () => {
	//Para limpiar el listado y evitar que se repita los llamados
	floresMomento.innerHTML = '';

	const carritoSinDuplicados = [...new Set(shopCartAmor)];
	console.log('carritoSinDuplicados', carritoSinDuplicados);
	carritoSinDuplicados.forEach((flor) => {
		const miFlorAmor = amor.filter((florBaseDatos) => {
			return florBaseDatos.id == parseInt(flor);
		});
		console.log('miFlorAmor', miFlorAmor);
		const numeroRepetFlor = shopCartAmor.reduce((total, itemId) => {
			return itemId == flor ? (total += 1) : total;
		}, 0);

		//La creación del HTML desde JS, se hará con Scripting
		const divCard = document.createElement('div');
		divCard.classList.add('cardLikes'); //Agregar una clase al elemento creado

		const imgFlorMomento = document.createElement('img');
		imgFlorMomento.classList.add('img-cardLikes');
		imgFlorMomento.src = miFlorAmor[0].img;

		const tituloFlorMomento = document.createElement('h3');
		tituloFlorMomento.classList.add('text-cardLikes');
		tituloFlorMomento.textContent = miFlorAmor[0].nombre;

		const cantidad = document.createElement('p');
		cantidad.classList.add('price-cardLikes');
		cantidad.textContent = numeroRepetFlor;

		const priceMomento = document.createElement('p');
		priceMomento.classList.add('price-cardLikes');
		priceMomento.textContent = `$${miFlorAmor[0].precio}`;

		// Boton para borrar
		const bntBorrar = document.createElement('button');
		bntBorrar.classList.add('btn-cardFilter');
		bntBorrar.textContent = 'X';
		bntBorrar.dataset.flor = flor;
		bntBorrar.addEventListener('click', borrarFlorCarro);
		bntBorrar.addEventListener('click', () => {
			location.reload();
		});

		//appendar --> Para que todos los elementos queden
		divCard.appendChild(imgFlorMomento);
		divCard.appendChild(tituloFlorMomento);
		divCard.appendChild(cantidad);
		divCard.appendChild(priceMomento);
		divCard.appendChild(bntBorrar);
		// console.log(divCard);

		//Agregar el divCard al section
		floresMomento.appendChild(divCard);
	});
	// ValorTotal.textContent = `$ ${calcularTotal()}`;
};

if (floresEnCarritoAmor.length) {
	console.log('floresEnCarrito------->182', floresEnCarritoAmor);
	floresEnCarritoAmor.map((flor) => {
		shopCartAmor.push(flor.id.toString());
	});
	showCartAmor();
}

function borrarFlorCarro(evento) {
	// Obtener el Id almacenado
	const id = evento.target.dataset.flor;
	console.log('id180', id);
	//Borrar el o los productos
	shopCartAmor = shopCartAmor.filter((cartId) => {
		console.log('cartId--------------------------------->', cartId);
		return cartId != id;
	});
	const nuevoArray = floresEnCarritoAmor.filter((flor) => {
		return flor.id != id;
	});
	sessionStorage.setItem('carritoAmor', JSON.stringify(nuevoArray));
	// Renderizar
	floresEnCarritoAmor = nuevoArray;
	showCartAmor();
}

// Calcular precio total
function calcularTotal() {
	// Recorrer el array del shopCart
	return shopCartAmor
		.reduce((total, flor) => {
			//obtener el precio de cada flor
			const miFlor = amor.filter((florBaseDatos) => {
				return florBaseDatos.id == parseInt(flor);
			});
			//Sumamos al total
			return total + miFlor[0].precio;
		}, 0)
		.toFixed(2);
}

// Vaciar el carro

//Evento vaciar

function vaciarCarroAmor() {
	// Limpiar el Array del shop
	// sessionStorage.removeItem('carritoAmor');
	sessionStorage.clear();
	shopCartAmor = [];
	showCartAmor();
	console.log('floresEnCarritoAmor --VACIAR', floresEnCarritoAmor);
}
// vaciarTotal.addEventListener('click', vaciarCarroAmor);
// vaciarTotal.addEventListener('click', () => {
// 	location.reload();
// });
vaciarTotal.onclick = () => {
	swal({
		title: '¿Seguro quieres vaciar el carro?',
		text: 'Una vez borrado, perderás toda información almacenada!',
		icon: 'warning',
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			swal('Tu carro ha sido vaciado exitosamente', {
				icon: 'success',
				button: false,
			});
			vaciarCarroAmor();
			setTimeout(() => {
				location.reload();
			}, 1700);
		} else {
			swal('Continuas con tu carro', {
				button: false,
				timer: 1500,
			});
		}
	});
};
