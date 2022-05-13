//Variables
const formulario = document.querySelector('#formulario');
const inputBusqueda = document.querySelector('.termino');
const divResultado = document.querySelector('#resultado');

//Eventos
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	validarFormulario();
});

function validarFormulario() {
	const terminoBusqueda = inputBusqueda.value; //  ""
	if (!terminoBusqueda) {
		swal({
			title: 'Falla',
			text: 'No ingresaste ninguna palabra o frase',
			icon: 'error',
			button: false,
			timer: 2100,
		});
		return;
	}

	buscarFrase(terminoBusqueda);
	inputBusqueda.value = '';
}

function buscarFrase(termino) {
	fetch('/js/frases.json')
		.then((respuesta) => respuesta.json())
		.then((data) => {
			let resultado = data.filter((valor) => {
				if (
					valor.frase.toLowerCase().includes(termino.toLowerCase()) ||
					valor.tipo.toLowerCase().includes(termino.toLowerCase())
				) {
					return valor.frase;
				}
			});
			if (resultado == '') {
				swal({
					title: 'Lo sentimos',
					text: 'Actualmente no contamos con frases con esa palabra o frase',
					icon: 'warning',
					button: false,
					timer: 2400,
				});
			}
			mostrarResultados(resultado);
		});
}

function mostrarResultados(frases = []) {
	divResultado.innerHTML = '';

	frases.forEach((phrase) => {
		console.log('frases', frases);
		const { tipo, numero, frase } = phrase;

		const divFrases = document.createElement('div');
		divFrases.classList.add('card');

		const textTitle = document.createElement('h3');
		textTitle.classList.add('title');
		textTitle.textContent = `${tipo}`;

		const textPhrase = document.createElement('p');
		textPhrase.classList.add('phrase');
		textPhrase.textContent = `${frase}`;

		const textNumber = document.createElement('p');
		textNumber.classList.add('number');
		textNumber.textContent = `# ${numero}`;

		divFrases.appendChild(textTitle);
		divFrases.appendChild(textPhrase);
		divFrases.appendChild(textNumber);

		divResultado.appendChild(divFrases);
	});
}
