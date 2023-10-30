import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import moment from 'moment';
import Button from '../Button/Button';

import { Container } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { bookRoomById } from '../../redux/features/Room/RoomThunk';
interface ICard {
	pricePerNight: number;
	bookDate: {
		startDate: Date;
		endDate: Date;
	};
	countNight: number;
	setCheckInHandle?: any;
	roomId: string;
}
const Card = ({ pricePerNight, bookDate, countNight, roomId }: ICard) => {
	const [checkInDate, setCheckInDate] = useState(
		moment(bookDate.startDate).format('l')
	);
	const [checkOutDate, setCheckOutDate] = useState(
		moment(bookDate.endDate).format('l')
	);

	useEffect(() => {
		setCheckInDate(moment(bookDate.startDate).format('L'));
		setCheckOutDate(moment(bookDate.endDate).format('L'));
	}, [bookDate]);

	const { auth } = useAppSelector((store) => store.auth);
	const { successMsg } = useAppSelector((store) => store.room);
	const dispatch = useAppDispatch();
	const navigation = useNavigate();

	const onChangeDateHandle = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'start-date') {
			setCheckInDate(value);
		} else {
			setCheckOutDate(value);
		}
	};
	const onSumbitHandle = (e: FormEvent) => {
		e.preventDefault();
		if (auth?.message !== 'Đăng Nhập Thành Công ! ') {
			navigation('/login');
		} 
		if(auth)	{
			dispatch(
				bookRoomById({
					userId: auth?.user.id ,
					roomId: roomId,
					startDate: checkInDate,
					endDate: checkOutDate,
					totalGuests: 2,
				})
			);
		}
			
			
		
	};
	return (
		<Container>
			<h3>
				${pricePerNight.toLocaleString()}
				<span className='light'> /night</span>
			</h3>
			<form onSubmit={onSumbitHandle}>
				<div className='card__schedule'>
					<div className='schedule__checkIn'>
						<button type='button' className='btn-checkIn'>
							<label htmlFor='start-date'>
								<h5>CHECK-IN</h5>
							</label>
							<input
								value={checkInDate}
								type='text'
								name='start-date'
								id='start-date'
								onChange={onChangeDateHandle}
							/>
						</button>
						<button type='button' className='btn-checkOut'>
							<label htmlFor='end-date'>
								<h5>CHECK-OUT</h5>
							</label>
							<input
								value={checkOutDate}
								type='text'
								name='end-date'
								id='end-date'
								onChange={onChangeDateHandle}
							/>
						</button>
					</div>
					<div className='schedule__guest'>
						<div>
							<h5>GUESTS</h5>
							<p>2 guests</p>
						</div>
						<button>
							<MdOutlineKeyboardArrowDown />
						</button>
					</div>
				</div>
				<Button  fullWidth>Check Availability</Button>
			</form>
			<div className='card__detail'>
				<div className='card__detail--item'>
					<p className='text-underline'>
						${pricePerNight.toLocaleString()} x {countNight} nights
					</p>
					<p>${(pricePerNight * countNight).toLocaleString()}</p>
				</div>
				<div className='card__detail--item'>
					<p className='text-underline'>Cleaning fee</p>
					<p>$200</p>
				</div>
				<div className='card__detail--item'>
					<p className='text-underline'>Service fee</p>
					<p>$500</p>
				</div>
				<div className='successBook'>
					<h5>{successMsg ? 'Successfull' : ''}</h5>
				</div>
			</div>
			<div className='line'></div>
			<div className='card__total'>
				<h4>Total before taxes</h4>
				<h4>
					${(pricePerNight * countNight + 200 + 500).toLocaleString()}
				</h4>
			</div>
		</Container>
	);
};

export default Card;
