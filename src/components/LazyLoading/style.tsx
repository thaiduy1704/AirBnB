import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IStyledContainerProps {
	gridArea?: string;
}

interface IStyledImageProps {
	borderRadius?: string;
	widthImage?: string;
}

const StyledContainer = styled.div<IStyledContainerProps>`
	width: 100%;
	height: 100%;
	grid-area: ${(props) => (props.gridArea ? props.gridArea : '')};
`;

const StyledImage = styled(LazyLoadImage)<IStyledImageProps>`
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : 'var(--radius)'};
	width: ${(props) => '100%'};
`;

export { StyledContainer, StyledImage };
