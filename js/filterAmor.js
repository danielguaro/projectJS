import DATA from './dataBD.js';
import { shopCart } from './floresMes.js';

const amor = [];
const shopCartAmor = shopCart;

const categoryTitle = document.querySelectorAll('.category-title');
const floresMomento = document.querySelector('.section-likes');

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

const datas = DATA;
for (let data of datas) {
	if (data.momento == 'amor') {
		amor.push(data);
	}
}
console.log(amor);

const ramos = amor.filter((element) => {
	return element.tipo.includes('ramo');
});
console.log(ramos);
const anchetas = amor.filter((element) => {
	return element.tipo.includes('ancheta');
});
console.log(anchetas);
const ramilletes = amor.filter((element) => {
	return element.tipo.includes('ramillete');
});
console.log(ramilletes);
const cajas = amor.filter((element) => {
	return element.tipo.includes('caja');
});
console.log(cajas);

const momentoAmor = document.querySelector('.filterResult');
for (let i = 0; i < categoryTitle.length; i++) {
	categoryTitle[i].addEventListener(
		'click',
		changeFlowers.bind(this, categoryTitle[i])
	);
}
function changeFlowers(categories) {
	if (categories.innerHTML.includes('<li>Todo</li>')) {
		momentoAmor.innerHTML = '';
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
			btn.onclick = () => {
				addTocartAmor(a.id);
			};

			divCard.appendChild(imgFlor);
			divCard.appendChild(tituloFlor);
			divCard.appendChild(price);
			divCard.appendChild(btn);
			momentoAmor.appendChild(divCard);
		}
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
			btn.onclick = () => {
				addTocartAmor(moment.id);
			};

			divCard.appendChild(imgFlor);
			divCard.appendChild(tituloFlor);
			divCard.appendChild(price);
			divCard.appendChild(btn);
			momentoAmor.appendChild(divCard);
		}
	}
};

const addTocartAmor = (id) => {
	const selectedMoment = amor.find((flor) => {
		return flor.id === id;
	});
	shopCartAmor.push(selectedMoment);
	showCart(shopCartAmor);
};

const showCart = (items) => {
	//Para limpiar el listado y evitar que se repita los llamados
	floresMomento.innerHTML = '';

	items.forEach((moment) => {
		//La creación del HTML desde JS, se hará con Scripting
		const divCard = document.createElement('div');
		divCard.classList.add('cardMonth'); //Agregar una clase al elemento creado

		const imgFlorMes = document.createElement('img');
		imgFlorMes.classList.add('img-cardMonth');
		imgFlorMes.src = moment.img;

		const tituloFlorMes = document.createElement('h3');
		tituloFlorMes.classList.add('text-cardMonth');
		tituloFlorMes.textContent = moment.nombre;

		const priceMes = document.createElement('p');
		priceMes.classList.add('price-cardMonth');
		priceMes.textContent = moment.precio;

		//appendar --> Para que todos los elementos queden
		divCard.appendChild(imgFlorMes);
		divCard.appendChild(tituloFlorMes);
		divCard.appendChild(priceMes);
		// console.log(divCard);

		//Agregar el divCard al section
		floresMomento.appendChild(divCard);
	});
};
