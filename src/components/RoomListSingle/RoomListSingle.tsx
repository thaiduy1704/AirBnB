import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

import { IRoom } from '../../@types/Room';
import { Container } from './style';
import Image from '../Image/Image';
import LazyLoading from '../LazyLoading/LazyLoading';
const RoomListSingle = ({
	id,
	imageList,
	name,
	homeType,
	roomType,
	totalBathrooms,
	totalBedrooms,
	totalOccupancy,
	address,
	sumary,
	hasTV,
	hasAirCon,
	hasInternet,
	hasKitchen,
	price,
	publisedAt,
	longitude,
	latitude,
	locationId,
	reservationId,
	userId,
}: IRoom) => {
	return (
		<Container>
			<div className='imgList'>
				<LazyLoading
					placeholderSrc={imageList[0].lowQualityUrl}
					url={imageList[0].lowQualityUrl}
					alt={name}
				/>
			</div>

			<div className='info'>
				<Link className='action-link' to={`/roomDetail/${id}`}>
					{name}
				</Link>
				<p>
					{locationId ? locationId.province : 'not provided'}
					{'-'}
					{locationId ? locationId.country : 'not provided'}
				</p>
				<div className='line'></div>
				<p className='detail'>
					{homeType} HomeType - {totalBedrooms} bedrooms - {totalBathrooms}{' '}
					bathroom
				</p>
				<ul className='list'>
					<li className='list-item'>
						AirCon{' '}
						<span>
							{hasAirCon ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						KitChen{' '}
						<span>
							{hasKitchen ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Television{' '}
						<span>
							{hasTV ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Wifi{' '}
						<span>
							{hasInternet ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
				</ul>
				<h5 className='price'>
					{price.toLocaleString()}VND<span>/Night</span>
				</h5>
			</div>
		</Container>
	);
};

export default RoomListSingle;
