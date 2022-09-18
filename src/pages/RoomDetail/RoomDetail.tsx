import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
	Footer,
	Loading,
	Navbar,
	Review,
	ReviewContainer,
	SingleRoomCatalog,
	SingleRoomDetail,
	ThinkToKnow,
} from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getRoomDetailById } from '../../redux/features/Room/RoomThunk';
import { Container } from './style';

const RoomDetail = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getRoomDetailById(id as string));
	}, [id]);

	const { isLoading } = useAppSelector((store) => store.room);
	if (isLoading) {
		return <Loading />;
	}
	return (
		<>
			<Navbar />
			<Container className='section'>
				<SingleRoomCatalog />
				<SingleRoomDetail />
				<ReviewContainer />
				<ThinkToKnow />
			</Container>
			<Footer />
		</>
	);
};

export default RoomDetail;
