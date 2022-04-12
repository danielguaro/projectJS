class Product {
	constructor(name, price, quantity, sold) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.sold = false;
	}
	total() {
		if (this.quantity > 0) {
			let total = this.quantity * this.price;
			return total;
		} else {
			return 'Aun no has escogido la cantidad del producto';
		}
	}
}
const flores = [];
let total = 0;
let information = '';

const rosa = new Product('rosa', 2800, 2);
const girasol = new Product('girasol', 1600, 5);
const clavel = new Product('clavel', 800, 3);

flores.push(rosa, girasol, clavel);

for (let flor of flores) {
	total += flor.total();
	information += `${flor.quantity} ${flor.name}(s), `;
}
console.log(`Has comprado ${information} para un total de $${total} pesos`);
