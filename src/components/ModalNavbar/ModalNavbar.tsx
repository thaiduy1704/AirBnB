import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { logout } from '../../redux/features/Auth/AuthSlice';
import { Container } from './style';

const ModalNavbar = () => {
	const { auth ,userType} = useAppSelector((store) => store.auth);
	// const {} = useAppSelector((store)=>store.user);
	
	const dispatch = useAppDispatch();
	const navigation = useNavigate();
	const logoutHandle = () => {
		dispatch(logout());
		navigation('/');
	};
	console.log("ModalNavbar: ",userType);
	
	if (auth) {
		return (
			<Container>
				{auth.user.type ==='ADMIN' ? (
					<Link to='/admin' className='btn-link bold'>
						Admin
					</Link>
				) : (
					<Link className='btn-link bold' to={`/user/${auth.user.id}`}>
						User
					</Link>
				)}
				<a href='https://github.com/thaiduy1704' className='btn-link bold'>
					Messages
				</a>
				<a href='https://github.com/thaiduy1704' className='btn-link bold'>
					Notifications
				</a>
				<a href='https://github.com/thaiduy1704' className='btn-link bold'>
					Trips
				</a>
				<a href='https://github.com/thaiduy1704' className='btn-link bold'>
					Wishlists
				</a>
				<div className='line'></div>
				<a href='https://github.com/thaiduy1704' className='btn-link'>
					Host your home
				</a>
				<a href='https://github.com/thaiduy1704' className='btn-link'>
					Host an experience
				</a>
				<Link className='btn-link' to={`/user/${auth?.user.id}`}>
					Account
				</Link>
				<div className='line'></div>
				<a href='https://github.com/thaiduy1704' className='btn-link'>
					Help
				</a>
				<button className='btn-link' onClick={logoutHandle}>
					Logout
				</button>
			</Container>
		);
	} else {
		return (
			<Container>
				<Link className='btn-link bold' to='/login'>
					Login
				</Link>
				<Link className='btn-link' to='/register'>
					Sign up
				</Link>
				<div className='line'></div>
				<a className='btn-link' href='https://github.com/thaiduy1704'>
					Host your home
				</a>
				<a className='btn-link' href='https://github.com/thaiduy1704'>
					Host an experience
				</a>
				<a className='btn-link' href='https://github.com/thaiduy1704'>
					Help
				</a>
			</Container>
		);
	}
};

export default ModalNavbar;