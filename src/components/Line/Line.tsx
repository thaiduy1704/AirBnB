import { StyledContainer } from './style';

interface ILine {
	margin?: string;
}

const Line = ({ margin }: ILine) => {
	return <StyledContainer margin={margin} />;
};

export default Line;
