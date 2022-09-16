import styled from 'styled-components';

const StyledContainer = styled.div<{ isModalOpen: boolean }>`
	display: ${(props) => (props.isModalOpen ? 'flex' : 'none')};
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	justify-content: center;
	align-items: center;
	z-index: 1000;
	cursor: pointer;

	* {
		cursor: default;
	}
`;

const StyledForm = styled.form`
	margin-inline: 20rem;
	min-width: 50rem;
	height: 50rem;
	background-color: white;
	border-radius: var(--radius);
	overflow-y: scroll;
	padding: 4rem;
`;

const StyledTitle = styled.h3`
	margin-bottom: 3rem;
`;

const StyledFormBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
	margin-bottom: 2rem;
`;

export { StyledContainer, StyledForm, StyledTitle, StyledFormBody };
