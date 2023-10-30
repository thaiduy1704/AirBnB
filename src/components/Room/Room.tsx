import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { IRoom } from '../../@types/Room';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { Container } from './style';
import Image from '../Image/Image';

const Room = ({ id, name, imageList, locationId, price }: IRoom) => {
	const { isLoading } = useAppSelector((store) => store.room);
	const firstImage = imageList[0];
	
	
	return (
		<Container to={`/roomDetail/${id}`}>
			<div className='img-container'>
				{isLoading ? <Skeleton /> : <Image url={firstImage.highQualityUrl} alt={name} />}
			</div>
			<div className='info'>
				{isLoading ? <Skeleton /> : <h5>{name}</h5>}
				{isLoading ? (
					<Skeleton />
				) : (
					<p>
						{locationId?.province} <span>{locationId?.name}</span>
					</p>
				)}
				{isLoading ? (
					<Skeleton />
				) : (
					<p>
						<span className='bold'>${price?.toLocaleString()}</span> night
					</p>
				)}
			</div>
		</Container>
	);
};

export default Room;
