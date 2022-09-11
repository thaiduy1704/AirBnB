import styled from 'styled-components';

const Container = styled.article`
	position: sticky;
	top: calc(var(--navbar-height) + 8rem);
	width: 75%;
	height: 50rem;
	margin-inline: auto;
	border-radius: var(--radius);
	box-shadow: var(--box-shadow);
	padding: 3rem 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.price {
		font-weight: 500;

		span {
			font-weight: 200;
			font-size: 1.5rem;
		}
	}

	.light {
		font-weight: 200;
		font-size: 1.5rem;
	}

	.card__schedule {
		display: flex;
		flex-direction: column;

		margin: 2rem 0;
		border: 1px solid #b0b0b0;
		border-radius: var(--radius);

		h5 {
			font-size: 1.5rem;
			margin-bottom: 0.5rem;
		}

		p {
			font-size: 1.5rem;
		}

		.schedule__checkIn {
			display: grid;
			grid-template-columns: 1fr 1fr;
			position: relative;

			button {
				text-align: left;
				border-bottom: 1px solid #b0b0b0;
				padding: 1rem;
			}

			.btn-checkIn {
				border-right: 1px solid #b0b0b0;
			}

			input {
				border: transparent;
				outline: none;
				width: 100%;
			}
		}

		.schedule__guest {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;
		}
	}

	.card__detail {
		margin-top: 2rem;
		.card__detail--item {
			display: flex;
			align-items: center;
			justify-content: space-between;

			p {
				font-size: 1.5rem;
			}

			.text-underline {
				text-decoration: underline;
			}
		}
	}
	.card__total {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		h4 {
			font-size: 1.5rem;
		}
	}

	.line {
		margin: 2rem 0;
	}
	.successBook {
		h5 {
			text-align: center;
			color: red;
			font-weight: bold;
		}
	}
`;
export { Container };
