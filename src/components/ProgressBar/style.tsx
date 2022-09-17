import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledFillerContainer = styled.div`
	height: 8px;
	width: 100%;
	background-color: #e0e0de;
	border-radius: var(--radius);
	margin: 0.5rem;
`;

const StyledFiller = styled.div<{ width: number; bgColor: string }>`
	height: 100%;
	width: ${(props) => `${props.width * 100}%`};
	background-color: ${(props) => props.bgColor};
	border-radius: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLabel = styled.h5`
	color: black;
	font-weight: bold;
	font-size: 1.2rem;
`;

export { StyledContainer, StyledFillerContainer, StyledFiller, StyledLabel };
