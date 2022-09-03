import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { useAppSelector } from '../../redux/hooks/hooks';
import Catalog from '../Catalog/Catalog';
import Loading from '../Loading/Loading';
import { Container } from './style';

const dummyImageData = [
	'https://airbnb.cybersoft.edu.vn/public/images/room/1634894280363_a4.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1658146724696_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1634310414778_lahotelsaigon.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1658166647257_NYC-1096x722.jpg',
];
const SingleRoomCatalog = () => {
	const { roomSelected } = useAppSelector((store) => store.room);
	const isMobileDevice = useMediaQuery({
		query: '(max-width:992px)',
	});
	if (!roomSelected) return <Loading />;
	const { name, image, locationId } = roomSelected;

	return (
		<Container>
			<h3 className='location-name'>
				{name},{locationId ? locationId.name : 'not provided'},{''}
				{locationId ? locationId.province : 'not provided'}
			</h3>
			<div className='title'>
				<h5>{locationId ? locationId.province : 'not provided'}</h5>
				<div className='sub-title'>
					<a className='flex-center' href='https://github.com/thaiduy1704'>
						<FiShare /> <span>share</span>
					</a>
					<a className='flex-center' href='https://github.com/thaiduy1704'>
						<AiOutlineHeart /> <span>save</span>
					</a>
				</div>
			</div>
			{isMobileDevice ? (
				<Catalog images={[...dummyImageData, image]} />
			) : (
				<div className='photos'>
					<img className='main-image' src={image} alt={name} />
					<img className='image-1' src={dummyImageData[0]} alt={name} />
					<img className='image-2' src={dummyImageData[1]} alt={name} />
					<img className='image-3' src={dummyImageData[2]} alt={name} />
					<img className='image-4' src={dummyImageData[3]} alt={name} />
				</div>
			)}
		</Container>
	);
};

export default SingleRoomCatalog;
