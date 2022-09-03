import styled from 'styled-components';
const Container = styled.section`
	width: 100%;
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h5 {
			font-size: 1.5rem;
			border-bottom: 1px solid black;
			font-weight: 450;
		}

		.sub-title {
			display: flex;
			justify-content: center;
			align-items: center;
			a {
				color: black;
				font-size: 1.5rem;
				margin-inline: 1rem;
				place-items: center;
				transition: var(--transition);
				padding: 0.5rem;
				border-radius: var(--radius);

				span {
					margin-left: 0.5rem;
					border-bottom: 1px solid black;
				}

				:hover {
					background-color: #f7f7f7;
				}
			}
		}
	}

	.photos {
		margin: 3rem auto;
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 20rem);

		.main-image {
			grid-area: main;
		}
		.image-1 {
			grid-area: image-1;
		}
		.image-2 {
			grid-area: image-2;
		}
		.image-3 {
			grid-area: image-3;
		}
		.image-4 {
			grid-area: image-4;
		}

		grid-template-areas:
			'main main image-1 image-2'
			'main main image-3 image-4';

		img {
			border-radius: var(--radius);
		}
	}
`;
export { Container };
