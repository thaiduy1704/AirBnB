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

	const [value, setValue] = useState<any>(currentDate);

	useEffect(() => {
		if (value.length == 2) {
			setBookDate({
				startDate: value[0],
				endDate: value[1],
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
