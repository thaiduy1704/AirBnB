import styled from 'styled-components';

const Container = styled.div`
	p {
		font-weight: 200;
	}

	.detail__title {
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			text-transform: capitalize;
		}

		img {
			width: 10rem;
			height: 10rem;
		}
	}
	.detail__description {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;

		.detail__description-item {
			display: flex;
			align-items: center;
			gap: 2rem;
			margin: 1.5rem 0;
			h4 {
				margin: 0;
			}

			p {
				color: rgb(113, 113, 113);
				font-size: 300;
				font-size: 1.4rem;
				margin-top: 0.1rem;
			}
			svg {
				font-size: 4rem;
			}
			div {
				flex: 1;
			}
		}
	}

	.detail__sponsor {
		img {
			width: 20rem;
			margin-bottom: 1rem;
		}
	}

	.detail__offer-container {
		display: grid;
		grid-template-columns: 1fr 1fr;

		.detail__offer-item {
			margin: 0.5rem 0;
			p {
				display: flex;
				align-items: center;
				font-weight: 300;
				color: rgb(34, 34, 34);

				svg {
					margin-right: 1rem;
				}
			}

			.disable__offer {
				text-decoration: line-through;
				text-decoration-thickness: 3px;
			}
		}
	}

	.detail__calendar {
		p {
			color: var(--clr-paragraph);
			font-size: 1.5rem;
			font-weight: 200;
		}
	}
`;

export { Container };
