import {
	StyledContainer,
	StyledFillerContainer,
	StyledFiller,
	StyledLabel,
} from './style';

interface IProgressBar {
	bgColor: string;
	completed: number;
}

const MAX_VALUE = 5;

const ProgressBar = ({ bgColor, completed }: IProgressBar) => {
	return (
		<StyledContainer>
			<StyledFillerContainer>
				<StyledFiller bgColor={bgColor} width={completed} />
			</StyledFillerContainer>
			<StyledLabel>{Math.round(MAX_VALUE * completed * 10) / 10}</StyledLabel>
		</StyledContainer>
	);
};

export default ProgressBar;
