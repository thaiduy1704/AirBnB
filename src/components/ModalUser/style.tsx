import styled from 'styled-components';

const Container = styled.div<{ isModalOpen: boolean }>`
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

const Card = styled.form`
	margin-inline: 20rem;
	min-width: 50rem;
	height: 50rem;
	background-color: white;
	border-radius: var(--radius);
	overflow-y: scroll;
	padding: 8rem;
`;

const Title = styled.h3`
	margin-bottom: 3rem;
`;

const CardBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
	margin-bottom: 2rem;
`;

const CardItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`;

const CardItemHeader = styled.label`
	font-size: 2rem;
	font-weight: bold;
	text-transform: capitalize;
`;

const CardItemInfo = styled.input`
	width: 100%;
	font-size: 2rem;
	border: none;
	padding-bottom: 1rem;
	border-bottom: 2px solid black;
	outline: none;
	cursor: pointer;
	padding: 0 2rem;
`;

export {
	Container,
	Card,
	CardBody,
	CardItem,
	CardItemHeader,
	CardItemInfo,
	Title,
};
