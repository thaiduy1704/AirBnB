import styled from 'styled-components';
import { Link } from 'react-router-dom';
interface InputProps {
	disableInput: boolean;
}

interface ISearch {
	hide?: boolean;
}
const Container = styled.header`
	display: flex;
	background-color: white;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 10000;
	height: 8rem;
	border-bottom: 2px solid var(--clr-secondary);
	padding-inline: 8rem;

	img {
		width: 10rem;
	}

	@media only screen and (max-width: 992px) {
		padding: 1rem;
		display: grid;
		height: auto;
		grid-template-areas:
			'logo nav'
			'search search';
	}
`;

const Search = styled.form<ISearch>`
	display: ${(props) => (props.hide ? 'none' : 'flex')};
	justify-content: space-evenly;
	align-items: center;
	box-shadow: var(--light-shadow);
	padding: 1rem 1.5rem;
	border-radius: 30px;
	transition: var(--transition);

	@media only screen and (min-width: 992px) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	cursor: pointer;

	h5 {
		font-weight: 400;
		margin: 0;
	}

	.btn-search {
		margin-left: 0.5rem;
		background-color: var(--clr-primary);
		padding: 0.5rem;
		border-radius: 50%;
		svg {
			color: white;
			font-size: 1.5rem;
		}
	}

	.vertical-stripe {
		width: 1px;
		background-color: var(--clr-secondary);
		height: 2.5rem;
		margin-inline: 1rem;
	}

	.gray {
		color: #858585;
	}

	:hover {
		box-shadow: var(--dark-shadow);
	}

	@media only screen and (max-width: 992px) {
		grid-area: search;
		width: 80%;
		margin-inline: auto;
	}
`;

const Logo = styled(Link)`
	grid-area: logo;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;

	.translate {
		margin-inline: 0.25rem;
		svg {
			color: #222222;
			font-size: 1.75rem;
		}
	}

	.login {
		cursor: pointer;
		border: 1px solid #dddddd;
		padding: 1rem;
		border-radius: 30px;
		transition: var(--transition);
		box-shadow: var(--light-shadow);

		svg {
			margin-inline: 0.5rem;
			font-size: 2rem;
		}

		:hover {
			box-shadow: var(--dark-shadow);
		}
	}

	.active {
		box-shadow: var(--dark-shadow);
	}

	@media only screen and (max-width: 992px) {
		grid-area: nav;

		h5 {
			display: none;
		}
	}
`;

const Input = styled.input<InputProps>`
	display: ${(p) => (p.disableInput ? 'none' : 'block')};
	width: 100%;
	background-color: transparent;
	border: transparent;
	font-size: 1rem;
	color: #858585;
	outline-style: none;
	padding-inline: 0.5rem;
	margin-top: 0.5rem;
`;

export { Container, Search, Nav, Logo, Input };
