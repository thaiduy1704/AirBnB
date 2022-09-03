import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: 25rem 1fr;
	padding: 2rem;
	gap: 2rem;

	.action-link {
		font-size: 2.5rem;
		color: black;
		font-weight: 450;
		cursor: pointer;
	}

	p {
		font-size: 1.5rem;
		color: var(--clr-paragraph);
	}

	.detail {
		font-weight: bold;
	}

	:not(:first-child) {
		border-top: 1px solid var(--clr-secondary);
	}

	img {
		border-radius: var(--radius);
	}

	.info {
		display: flex;
		flex-direction: column;
		.price {
			margin-top: auto;
			text-align: right;

			span {
				color: var(--clr-paragraph);
			}
		}

		.line {
			width: 5rem;
			height: 1px;
			background-color: var(--clr-secondary);
			margin: 1rem 0;
		}

		.list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			margin-top: 0.5rem;

			li {
				text-transform: capitalize;
			}

			li,
			svg {
				font-size: 1.2rem;
				vertical-align: middle;
			}
		}
	}

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr;
	}
`;
export { Container };
