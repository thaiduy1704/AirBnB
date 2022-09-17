import styled from 'styled-components';

interface IStyledContainerProps {
	gridArea?: string;
}

interface IStyledImageProps {
	borderRadius?: string;
}

const StyledContainer = styled.div<IStyledContainerProps>`
	width: 100%;
	height: 100%;
	grid-area: ${(props) => (props.gridArea ? props.gridArea : '')};
`;

const StyledImage = styled.img<IStyledImageProps>`
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : 'var(--radius)'};
`;

export { StyledContainer, StyledImage };
