import CalenderReact from 'react-calendar';
import { StyledContainer } from './style';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

interface ICalender {
	setBookDate?: any;
}
const Calender = ({ setBookDate }: ICalender) => {
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});
	const currentDate = new Date();
	const nextDate = new Date();
	nextDate.setDate(currentDate.getDate());
	console.log('curent', currentDate);
	console.log(nextDate);
	const [value, setValue] = useState<any>(currentDate);
	console.log('value', value);

	useEffect(() => {
		if (value.length == 2) {
			setBookDate({
				checkIn: value[0],
				checkOut: value[1],
			});
		}
	}, [value]);

	return (
		<StyledContainer>
			<CalenderReact
				minDate={currentDate}
				value={value}
				onChange={setValue}
				selectRange={true}
				showDoubleView={!isMobileDevice}
			/>
		</StyledContainer>
	);
};

export default Calender;
