import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import { Container } from './style';
import Loading from '../Loading/Loading';
import SingleRoomInfo from '../SingleRoomInfo/SingleRoomInfo';
import Card from '../Card/Card';

const SingleRoomDetail = () => {
	const { roomSelected } = useAppSelector((store) => store.room);
	const [bookDate, setBookDate] = useState({
		checkIn: new Date(),
		checkOut: new Date(),
	});

	const [countNight, setCountNight] = useState(0);
	useEffect(() => {
		const count = bookDate.checkOut
			? Math.round(
					(bookDate.checkOut.getTime() - bookDate.checkIn.getTime()) /
						(1000 * 3600 * 24)
			  )
			: 0;
		if (count > 0) {
			setCountNight(count - 1);
		} else {
			setCountNight(0);
		}
	}, [bookDate]);

	if (!roomSelected) {
		return <Loading />;
	}
	return (
		<Container>
			<SingleRoomInfo
				{...roomSelected}
				bookDate={bookDate}
				setBookDate={setBookDate}
				countNight={countNight}
			/>
			<Card
				countNight={countNight}
				bookDate={bookDate}
				pricePerNight={roomSelected.price}
				roomId={roomSelected._id}
			/>
		</Container>
	);
};

export default SingleRoomDetail;
