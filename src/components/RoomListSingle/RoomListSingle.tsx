import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

import { IRoom } from '../../@types/Room';
import { Container } from './style';
import Image from '../Image/Image';
const RoomListSingle = ({
	_id,
	name,
	guests,
	bedRoom,
	bath,
	description,
	price,
	indoorFireplace,
	hotTub,
	elevator,
	pool,
	dryer,
	gym,
	kitchen,
	wifi,
	heating,
	cableTV,
	__v,
	locationId,
	image,
}: IRoom) => {
	return (
		<Container>
			<img src={image} alt={name} />
			<div className='info'>
				<Link className='action-link' to={`/roomDetail/${_id}`}>
					{name}
				</Link>
				<p>
					{locationId ? locationId.province : 'not provided'}
					{'-'}
					{locationId ? locationId.country : 'not provided'}
				</p>
				<div className='line'></div>
				<p className='detail'>
					{guests} guests - {bedRoom} bedrooms - {bath} bathroom
				</p>
				<ul className='list'>
					<li className='list-item'>
						Elevator{' '}
						<span>
							{elevator ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Hot-Tub{' '}
						<span>
							{hotTub ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Pool{' '}
						<span>
							{pool ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Indoor FirePlace{' '}
						<span>
							{indoorFireplace ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Dryer{' '}
						<span>
							{dryer ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Gym{' '}
						<span>
							{gym ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Kitchen{' '}
						<span>
							{kitchen ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Wifi{' '}
						<span>
							{wifi ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Elevator{' '}
						<span>
							{elevator ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Heating{' '}
						<span>
							{heating ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						CableTV{' '}
						<span>
							{cableTV ? (
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
