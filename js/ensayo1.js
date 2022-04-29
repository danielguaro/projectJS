import DATA from './dataBD.js';

const ensayos = DATA;
console.log(ensayos[1].nombre); //flor 2
console.log('soy el ensayo');

for (let ensayo of ensayos) {
	if (ensayo.id > 3000 && ensayo.id < 4000) {
		console.log(ensayo.momento);
	}
}
