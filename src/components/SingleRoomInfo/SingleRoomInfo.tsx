import React from 'react';
import { IRoom } from '../../@types/Room';
import { Container } from './style';
import { AiOutlineStar } from 'react-icons/ai';
import { GiPoolDive } from 'react-icons/gi';
import { MdOutlineFreeCancellation } from 'react-icons/md';
import { logo } from '../../constant/logo';
import { transformDate } from '../../utils/util';
import Calender from '../Calender/Calender';

export interface ISingleRoomInfo extends IRoom {
	bookDate: any;
	countNight: number;
	setBookDate: any;
}

const SingleRoomInfo = ({
	name,
	guests,
	bedRoom,
	bath,
	description,
	kitchen,
	elevator,
	hotTub,
	pool,
	indoorFireplace,
	dryer,
	gym,
	wifi,
	heating,
	cableTV,
	bookDate,
	setBookDate,
	countNight,
}: ISingleRoomInfo) => {
	return (
		<Container>
			<div className='detail__title'>
				<div>
					<h4>{name}</h4>
					<p>
						{guests} guests &middot; {bedRoom} bedroom &middot; {bath} bath
					</p>
				</div>
				<img src='../../images/image1.jpg' alt='logo' />
			</div>
			<div className='line'></div>
			{/*description*/}
			<div className='detail__description'>
				<div className='detail__description-item'>
					<GiPoolDive />
					<div>
						<h4>Dive right in</h4>
						<p>This is one of the few places in the area with a pool.</p>
					</div>
				</div>
				<div className='detail__description-item'>
					<AiOutlineStar />
					<div>
						<h4>Experienced host</h4>
						<p>Dorothy has 757 reviews for other places.</p>
					</div>
				</div>
				<div className='detail__description-item'>
					<MdOutlineFreeCancellation />
					<div>
						<h4>Free cancellation for 48 hours.</h4>
					</div>
				</div>
			</div>
			<div className='line'></div>
			{/*Sponsor*/}

			<div className='detail__sponsor'>
				<img
					src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
					alt='sponsor'
				/>
				<p>
					Every booking includes free protection from Host cancellations,
					listing inaccuracies, and other issues like trouble checking in.
				</p>
			</div>
			<div className='line'></div>
			{/*Comment*/}

			<div className='detail__comment'>
				<h3>Description</h3>
				<p>{description}</p>
			</div>
			<div className='line'></div>
			{/*Offer*/}

			<div className='detail__offer'>
				<h3>What this place offers</h3>
				<div className='detail__offer-container'>
					<div className='detail__offer-item'>
						<p className={`${kitchen ? '' : 'disable__offer'}`}>
							{logo['kitchen']} kitchen
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${elevator ? '' : 'disable__offer'}`}>
							{logo['elevator']} elevator
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${hotTub ? '' : 'disable__offer'}`}>
							{logo['hotTub']} hotTub
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${pool ? '' : 'disable__offer'}`}>
							{logo['pool']} pool
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${indoorFireplace ? '' : 'disable__offer'}`}>
							{logo['indoorFireplace']} indoorFireplace
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${dryer ? '' : 'disable__offer'}`}>
							{logo['dryer']} dryer
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${gym ? '' : 'disable__offer'}`}>
							{logo['gym']} gym
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${wifi ? '' : 'disable__offer'}`}>
							{logo['wifi']} wifi
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${heating ? '' : 'disable__offer'}`}>
							{logo['heating']} heating
						</p>
					</div>
					<div className='detail__offer-item'>
						<p className={`${cableTV ? '' : 'disable__offer'}`}>
							{logo['cableTV']} cableTV
						</p>
					</div>
				</div>
			</div>
			<div className='line'></div>
			{/*Calender*/}

			<div className='detail__calender'>
				<h3>
					{countNight}{' '}
					<span style={{ textTransform: 'lowercase' }}>nights in</span> {name}
				</h3>
				<p>
					{transformDate(bookDate.checkIn)} - {transformDate(bookDate.checkOut)}
				</p>
				<Calender setBookDate={setBookDate} />
			</div>
		</Container>
	);
};

export default SingleRoomInfo;
