import { Navigate, useParams } from 'react-router-dom';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';
import { useAppSelector } from '../../redux/hooks/hooks';
import { transformDate } from '../../utils/util';

import { Container } from './style';
import { Navbar } from '../../components';

const User = () => {
	const { id } = useParams();
	// console.log(id);

	const { auth } = useAppSelector((store) => store.auth);
	if (!auth) {
		return <Navigate to='/login' />;
	}
	const {
		tickets,
		email,
		name,
		phone,
		birthday,
		gender,
		address,
		type,
		avatar,
	} = auth.user;
	// console.log(auth.user);

	return (
		<>
			<Navbar />
			<Container className='section'>
				<div className='user__info'>
					<img
						className='user__image'
						src={avatar ? avatar : '../../images/default-user-image.jpg'}
						alt={name}
					/>
					<h5>Upload user image</h5>
					<div>
						<h5 className='flex-center'>
							<MdOutlineVerifiedUser className='icon' /> verified your account
						</h5>
						<p>Verified your account to get authorization badge</p>
						<button>Get Badge</button>
					</div>
					<div className='line'></div>
					<div>
						<h5 className='flex-center'>
							<TiTickOutline className='icon' /> {name} verified
						</h5>
					</div>
				</div>
				<div className='user__detail'>
					<h5>Hello, my name is {name}</h5>
					<p>Join in 2021</p>
					<div className='line'></div>
					<ul>
						<li>Email: {email}</li>
						<li>Phone: {phone}</li>
						<li>Birthday: {transformDate(new Date(birthday))}</li>
						<li>Gender: {gender ? 'male' : 'female'}</li>
						<li>Address: {address}</li>
						<li>Type: {type}</li>
						<li>
							tickets: {tickets?.length === 0 ? 'null' : tickets?.join(', ')}
						</li>
					</ul>
				</div>
			</Container>
		</>
	);
};

export default User;
