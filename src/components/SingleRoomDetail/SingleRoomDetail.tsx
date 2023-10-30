import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import { Container } from './style';
import Loading from '../Loading/Loading';
import SingleRoomInfo from '../SingleRoomInfo/SingleRoomInfo';
import Card from '../Card/Card';

const SingleRoomDetail = () => {
	const { roomSelected } = useAppSelector((store) => store.room);
	const [bookDate, setBookDate] = useState({
		startDate: new Date(),
		endDate: new Date(),
	});

	const [countNight, setCountNight] = useState(0);
	useEffect(() => {
		const count = bookDate.startDate
			? Math.round(
					(bookDate.endDate.getTime() - bookDate.startDate.getTime()) /
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
				roomId={roomSelected.id}
			/>
		</Container>
	);
};

export default SingleRoomDetail;
