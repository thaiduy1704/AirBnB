import styled from 'styled-components';
const Container = styled.section`
	display: grid;
	grid-template-columns: 3fr 2fr;
	margin: 5rem auto;

	@media only screen and (max-width: 1200px) {
		grid-template-columns: 1fr;
		margin: 5rem auto;
		padding: 1rem;
	}
`;
export { Container };
