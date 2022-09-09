import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	top: 4.5rem;
	left: 0;
	border-radius: var(--radius);
	width: 100%;
	background-color: white;
	box-shadow: var(--box-shadow);
	display: flex;
	flex-direction: column;
	margin: 0.5rem 0;

	.btn-link {
		width: 100%;
		color: black;
		font-size: 2rem;
		font-weight: 300;
		width: 100%;
		padding: 1rem;
		transition: var(--transition);
		text-align: left;

		:hover {
			background-color: #f7f7f7;
		}
	}

	.bold {
		font-weight: 450;
	}

	.line {
		margin: 1rem auto;
	}
`;
export { Container };
