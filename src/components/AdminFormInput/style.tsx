import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	border-bottom: 2px solid black;
`;

const StyledLabel = styled.label`
	font-size: 2rem;
	text-transform: capitalize;
`;

const StyledInput = styled.input<{ marginBottom?: boolean }>`
	width: 100%;
	font-size: 2rem;
	border: none;
	padding-bottom: 1rem;
	/* border-bottom: 2px solid black; */
	margin-bottom: ${(props) => (props.marginBottom ? '1rem' : '0')};
	outline: none;
	cursor: pointer;
`;

export { StyledContainer, StyledLabel, StyledInput };
