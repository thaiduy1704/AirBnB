import React from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import { Container } from './style';
import Loading from '../Loading/Loading';
import SingleRoomInfo from '../SingleRoomInfo/SingleRoomInfo';

const SingleRoomDetail = () => {
	const { roomSelected } = useAppSelector((store) => store.room);

	if (!roomSelected) {
		return <Loading />;
	}
	return (
		<Container>
			<SingleRoomInfo {...roomSelected} />
		</Container>
	);
};

export default SingleRoomDetail;
