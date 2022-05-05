const DATA = [
	//<-------- FLORES MES -------->
	{
		id: 1,
		tipo: '',
		momento: 'florMes',
		nombre: 'flor1',
		img: '../assets/flro1.jpeg',
		precio: 40000,
		descripcion: '',
		infoAdicional: '',
	},
	{
		id: 2,
		tipo: '',
		momento: 'florMes',
		nombre: 'flor2',
		img: '../assets/flor2.jpeg',
		precio: 60000,
		descripcion: '',
		infoAdicional: '',
	},
	{
		id: 3,
		tipo: '',
		momento: 'florMes',
		nombre: 'flor3',
		img: '../assets/flor3.jpeg',
		precio: 50000,
		descripcion: '',
		infoAdicional: '',
	},
	{
		id: 4,
		tipo: '',
		momento: 'florMes',
		nombre: 'flor4',
		img: '../assets/flor4.jpeg',
		precio: 40000,
		descripcion: '',
		infoAdicional: '',
	},
	{
		id: 5,
		tipo: '',
		momento: 'florMes',
		nombre: 'flor5',
		img: '../assets/flor5.jpeg',
		precio: 80000,
		descripcion: '',
		infoAdicional: '',
	},
	{
		id: 6,
		tipo: '',
		momento: 'florMes',
		nombre: 'flor6',
		img: '../assets/flor6.jpeg',
		precio: 40000,
		descripcion: '',
		infoAdicional: '',
	},
	//<-------- AMOR -------->
	{
		id: 1001,
		tipo: 'ramillete',
		momento: 'amor',
		nombre: 'Ramillete corazón',
		img: '../assets/momentAmor/1001.jpeg',
		precio: 70000,
		descripcion: '14 Rosas rojas, palma sika y rusco',
		infoAdicional: 'En la cúspide del amor, cuando entregas tu corazón',
	},
	{
		id: 1002,
		tipo: 'ramillete',
		momento: 'amor',
		nombre: 'Bouquet amor puro',
		img: '../assets/momentAmor/1002.jpeg',
		precio: 60000,
		descripcion: '8 rosas rojas, 8 rosas blancas y gipsofilia',
		infoAdicional: 'Demuestra tu amor desde la perspectiva mas pura.',
	},
	{
		id: 1003,
		tipo: 'ramillete',
		momento: 'amor',
		nombre: 'Bouquet determinación',
		img: '../assets/momentAmor/1003.jpeg',
		precio: 60000,
		descripcion: '15 rosas rojas',
		infoAdicional: 'Para celebrar el amor y enamorar aún más.',
	},
	{
		id: 1004,
		tipo: 'ramillete',
		momento: 'amor',
		nombre: 'ramillete ternura',
		img: '../assets/momentAmor/1004.jpeg',
		precio: 80000,
		descripcion: '24 rosas, eucalipto y rusco',
		infoAdicional: 'Ideal para manifestar el amor a primera vista',
	},
	{
		id: 1005,
		tipo: 'ramo',
		momento: 'amor',
		nombre: 'Ramo con espiga',
		img: '../assets/momentAmor/1005.jpeg',
		precio: 120000,
		descripcion: 'rosas rojas, girasoles y palma sika',
		infoAdicional: 'El toque perfecto para sorprender',
	},
	{
		id: 1006,
		tipo: 'ramo',
		momento: 'amor',
		nombre: 'Media luna combinada',
		img: '../assets/momentAmor/1006.jpeg',
		precio: 140000,
		descripcion: 'rosas rojas, girasoles y ferrero rocher',
		infoAdicional:
			'Los colores vibrantes, proporción de alegría y energías positivas.',
	},

	//
	//
	// <-------- DÍA MADRES -------->
	{
		id: 2001,
		tipo: 'ramillete',
		momento: 'diaMadre',
		nombre: 'ramillete diverso',
		img: '../assets/momentMadre/2001.jpeg',
		precio: 70000,
		descripcion: '18 rosas en colores diferentes',
		infoAdicional: 'Las combinaciones de rosas para salir de la rutina',
	},
	{
		id: 2002,
		tipo: 'ramillete',
		momento: 'diaMadre',
		nombre: 'ramillete Utopía',
		img: '../assets/momentMadre/2002.jpeg',
		precio: 60000,
		descripcion: 'rosas rojas y girasoles',
		infoAdicional: '',
	},
	{
		id: 2003,
		tipo: 'ramo',
		momento: 'diaMadre',
		nombre: 'Ramo agrupado',
		img: '../assets/momentMadre/2003.jpeg',
		precio: 160000,
		descripcion: 'Rosas, papiros, lirios y baileys',
		infoAdicional: 'El complemento perfecto de colores, olores y sabores',
	},
	{
		id: 2004,
		tipo: 'ramo',
		momento: 'diaMadre',
		nombre: 'Media luna combinadas',
		img: '../assets/momentMadre/2004.jpeg',
		precio: 140000,
		descripcion: 'rosas rojas, girasoles y ferrero rocher',
		infoAdicional:
			'Los colores vibrantes, proporción de alegría y energías positivas.',
	},

	//
	//
	//
	// <-------- CONDOLENCIAS -------->
	{
		id: 3001,
		tipo: 'ramillete',
		momento: 'condolencias',
		nombre: 'ramillete condolencias',
		img: '../assets/momentCondolen/3001.jpeg',
		precio: 40000,
		descripcion: 'rosas blancas y girasoles',
		infoAdicional:
			'La intención de este detalle es acompañar con respeto los familiares de una persona fallecida.',
	},

	//
	//
	//
	// <-------- Aniversario / Cumpleaños -------->
	{
		id: 4001,
		tipo: 'ramo',
		momento: 'cumpleaños' /* Dice aniversario*/,
		nombre: 'Para siempre',
		img: '../assets/momentAniver/4001.jpeg',
		precio: 200000,
		descripcion: 'rosas rojas, chocolates y pareja de peluche',
		infoAdicional: 'El amor infinito llena de sorpresas cada fecha especial',
	},
	{
		id: 4002,
		tipo: 'ancheta',
		momento: 'cumpleaños' /* Dice recuperación*/,
		nombre: 'La cura está en el alma',
		img: '../assets/momentAniver/4002.jpeg',
		precio: 150000,
		descripcion: 'popurrí de flores',
		infoAdicional: 'No existe mejor medicina que las sonrisas',
	},
	{
		id: 4003,
		tipo: 'ramo',
		momento: 'cumpleaños' /* Dice aniversario*/,
		nombre: 'Media luna combinadas',
		img: '../assets/momentAniver/4003.jpeg',
		precio: 140000,
		descripcion: 'rosas rojas, girasoles y ferrero rocher',
		infoAdicional:
			'Los colores vibrantes, proporción de alegría y energías positivas.',
	},
];

export default DATA;
