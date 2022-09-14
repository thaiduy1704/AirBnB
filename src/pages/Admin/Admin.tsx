import { useState } from 'react';
import {
	Navbar,
	UserDashBoard,
	LocationDashBoard,
	RoomDashBoard,
} from '../../components';
import { Container, Button, Sidebar } from './style';
const Admin = () => {
	const [nameDashBoard, setNameDashBoard] = useState('user');
	const onSumbitChangeBoard = (type: string) => {
		return () => setNameDashBoard(type);
	};
	return (
		<>
			<Navbar hideSearch />
			<Container>
				<Sidebar>
					<Button
						active={nameDashBoard === 'user'}
						onClick={onSumbitChangeBoard('user')}>
						User
					</Button>
					<Button
						active={nameDashBoard === 'room'}
						onClick={onSumbitChangeBoard('room')}>
						Room
					</Button>
					<Button
						active={nameDashBoard === 'location'}
						onClick={onSumbitChangeBoard('location')}>
						Location
					</Button>
				</Sidebar>
				{nameDashBoard === 'user' && <UserDashBoard />}
				{nameDashBoard === 'room' && <RoomDashBoard />}
				{nameDashBoard === 'location' && <LocationDashBoard />}
			</Container>
		</>
	);
};

export default Admin;
