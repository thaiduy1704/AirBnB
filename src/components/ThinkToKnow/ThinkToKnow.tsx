import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AiFillClockCircle, AiOutlineWarning } from 'react-icons/ai';
import {
	MdOutlinePets,
	MdOutlineAlarm,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { IoLogoNoSmoking } from 'react-icons/io5';
import { GiSparkles } from 'react-icons/gi';
import { Line, Modal } from '..';
import {
	StyledContainer,
	StyledListContainer,
	StyledList,
	StyledListItem,
	StyledButton,
	StyledHeading,
} from './style';

const ThinkToKnow = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});
	if (isMobileDevice) {
		return (
			<StyledContainer>
				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				<StyledListContainer>
					<StyledList>
						<StyledListItem isBold>House rules</StyledListItem>
						<StyledListItem>
							<AiFillClockCircle /> Check-in: 3:00 PM - 11:00 PM
						</StyledListItem>
					</StyledList>
					<StyledButton>
						<MdOutlineKeyboardArrowRight />
					</StyledButton>
				</StyledListContainer>
				<Line />
				<StyledListContainer>
					<StyledList>
						<StyledListItem isBold>Health & safety</StyledListItem>
						<StyledListItem>
							<GiSparkles /> Airbnb's COVID-19 safety practices apply
						</StyledListItem>
					</StyledList>
					<StyledButton>
						<MdOutlineKeyboardArrowRight />
					</StyledButton>
				</StyledListContainer>
				<Line />
				<StyledListContainer>
					<StyledList>
						<StyledListItem isBold>Cancellation policy</StyledListItem>
						<StyledListItem>This reservation is non-refundable.</StyledListItem>
						<StyledListItem>
							Review the Host’s full cancellation policy which applies even if
							you cancel for illness or disruptions caused by COVID-19.
						</StyledListItem>
					</StyledList>
					<StyledButton>
						<MdOutlineKeyboardArrowRight />
					</StyledButton>
				</StyledListContainer>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<StyledHeading>Things to know</StyledHeading>
			<StyledListContainer>
				<StyledList>
					<StyledListItem isBold>House rules</StyledListItem>
					<StyledListItem>
						<AiFillClockCircle /> Check-in: 3:00 PM - 11:00 PM
					</StyledListItem>
					<StyledListItem>
						<BsFillDoorOpenFill /> Self check-in with building staff
					</StyledListItem>
					<StyledListItem>
						<IoLogoNoSmoking /> No smoking
					</StyledListItem>
					<StyledListItem>
						<MdOutlinePets /> Allow pets
					</StyledListItem>
				</StyledList>
				<StyledList>
					<StyledListItem isBold>Health & safety</StyledListItem>
					<StyledListItem>
						<GiSparkles /> Airbnb's COVID-19 safety practices apply
					</StyledListItem>
					<StyledListItem>
						<AiOutlineWarning /> Carbon monoxide alarm
					</StyledListItem>
					<StyledListItem>
						<MdOutlineAlarm /> Smoke alarm
					</StyledListItem>
					<StyledButton>
						Show more
						<MdOutlineKeyboardArrowRight />
					</StyledButton>
				</StyledList>
				<StyledList>
					<StyledListItem isBold>Cancellation policy</StyledListItem>
					<StyledListItem>This reservation is non-refundable.</StyledListItem>
					<StyledListItem>
						Review the Host’s full cancellation policy which applies even if you
						cancel for illness or disruptions caused by COVID-19.
					</StyledListItem>
					<StyledButton>
						Show more
						<MdOutlineKeyboardArrowRight />
					</StyledButton>
				</StyledList>
			</StyledListContainer>
		</StyledContainer>
	);
};

export default ThinkToKnow;
