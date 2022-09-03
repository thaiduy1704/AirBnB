import styled from 'styled-components';

const Container = styled.section`
	display: grid;
	grid-template-columns: 40rem 1fr;
	grid-gap: 5rem;

	.user__info {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: var(--radius);
		border: 1px solid #dddddd;
		padding: 1rem;

		.user__image {
			border-radius: 50%;
			height: 15rem;
			width: 15rem;
			margin-bottom: 1rem;
		}

		div {
			width: 100%;
			display: flex;
			align-items: flex-start;
			flex-direction: column;

			p {
				font-size: 1.5rem;
			}

			button {
				font-size: 2.5rem;
				border: 1px solid gray;
				padding: 0.5rem 1.5rem;
				margin: 1rem 0;
				border-radius: var(--radius);
			}
		}
		.icon {
			color: var(--clr-success);
		}
	}
	.user__detail {
		li {
			font-size: 2rem;
		}
	}
	.line {
		margin: 2rem 0;
	}
`;

export { Container };
