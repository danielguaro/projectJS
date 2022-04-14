class Momentos {
	constructor(nombre, descripcion) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.tipoArreglos = [];
	}
	agregarArreglo(arreglo) {
		this.tipoArreglos.push(arreglo);
	}
}

class TipoArreglo {
	constructor(
		nombre,
		descripcion,
		cantidadFlores,
		precio,
		disponibilidad,
		adicion
	) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.cantidadFlores = cantidadFlores;
		this.precio = precio;
		this.disponibilidad = true;
		this.adicion = false;
		this.pagar = [];
	}

	hayArreglo() {
		if (this.disponibilidad == false) {
			return `Lo sentimos, actualmente no contamos con disponibilidad para el arreglo ${this.nombre}`;
		}
	}
}

class Pagar {
	constructor(metodoPago) {
		this.usuario = [];
		this.metodoPago = metodoPago; /* tarjeta credito, pse, efectivo*/
	}
}

class Usuario {
	constructor({ nombre, correo, celular, direccion }) {
		nombre, correo, celular, direccion;
	}
}
