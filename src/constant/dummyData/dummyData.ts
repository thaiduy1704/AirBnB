const USER_DATA = {
	name: '',
	email: '',
	password: '',
	phone: '',
	birthday: new Date(),
	gender: false,
	address: '',
	type: 'CLIENT',
};

const ROOM_DATA = {
	name: '',
	guests: 0,
	bedRoom: 0,
	bath: 0,
	elevator: false,
	hotTub: false,
	pool: false,
	indoorFireplace: false,
	dryer: false,
	gym: false,
	kitchen: false,
	wifi: false,
	heating: false,
	cableTV: false,
	image: '',
	price: 0,
};

const LOCATION_DATA = {
	name: '',
	province: '',
	country: '',
	valueate: 0,
	image: '',
};

export { USER_DATA, ROOM_DATA, LOCATION_DATA };
