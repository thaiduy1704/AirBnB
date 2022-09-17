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
const USER_REVIEW = [
	{
		id: 1,
		avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
		name: 'susan smith',
		review:
			'If you are in this place please stay at Panorama. It is a nice suite at 26th floor with beach view. You can walk to beach in 3 minutes. Doesn’t get better with this price.',
		created_at: '2022-05-20T12:29:58.194Z',
	},
	{
		id: 2,
		avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
		name: 'peter jones',
		review:
			'Great place , great view , great price , and a fantastic host. Always there to help',
		created_at: '2022-05-20T12:14:46.072Z',
	},
	{
		id: 3,
		avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
		name: 'anna johnson',
		review:
			'It was in the city center, so it was very convenient to go around, and the facilities were good.',
		created_at: '2022-05-20T19:11:09.633Z',
	},
	{
		id: 4,
		avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
		name: 'Roberta Boyd',
		review: 'Very good',
		created_at: '2022-07-23T14:49:06.631Z',
	},
	{
		id: 5,
		avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
		name: 'bill anderson',
		review:
			'We are very fortunate to be able to enjoy a room with a nice and tidy view at this price.',
		created_at: '2022-04-26T14:59:16.018Z',
	},
	{
		id: 6,
		avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
		name: 'Henry Bell',
		review:
			'The location is good, quiet, and especially the bed is very comfortable.',
		created_at: '2022-04-26T15:44:10.530Z',
	},
];
export { USER_DATA, ROOM_DATA, LOCATION_DATA, USER_REVIEW };
