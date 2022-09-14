import styled from 'styled-components';
import { TiTickOutline } from 'react-icons/ti';
import { AiOutlineStop } from 'react-icons/ai';

import { Button } from '../../components';

const StyledContainer = styled.section`
	padding: 5rem;
	position: relative;
	background-color: #fafbfb;
	height: 100%;
`;

const StyledSearchButton = styled(Button)``;

const StyledSearchContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 20rem;
	gap: 1rem;
	margin: 2rem auto;
	width: 100%;
`;

const StyledSearch = styled.input`
	font-size: 2rem;
`;

const StyledTableContainer = styled.div`
	overflow-x: scroll;
	margin-inline: auto;
	width: 100%;
`;

const StyledTable = styled.table`
	border: 1px solid black;
	border-collapse: collapse;
	margin-inline: auto;
	table-layout: fixed;
`;

const StyledTableHead = styled.thead``;
const StyledTableBody = styled.tbody``;

const StyledTitle = styled.th`
	font-size: 2.5rem;
	padding: 0.5rem;
	border: 1px solid black;
	border-collapse: collapse;
`;

const StyledItem = styled.td`
	border: 1px solid black;
	border-collapse: collapse;
	font-size: 2rem;
	padding: 0.5rem;
	overflow: hidden;
	white-space: nowrap;

	text-align: center;
`;

const StyledRow = styled.tr``;

const StyledButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	border: none !important;
	margin: auto 0;
	align-items: center;
`;

const StyledPaginateContainer = styled.div`
	margin-inline: auto;
	width: 50%;
	height: 10rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledPrevButton = styled.button`
	font-size: 2.5rem;
	font-weight: bold;
`;
const StyledNextButton = styled.button`
	font-size: 2.5rem;
	font-weight: bold;
`;

const StyledPageButton = styled.button<{ active?: boolean }>`
	width: 5rem;
	background-color: ${(props) => (props.active ? '#9d0832' : '#e41d57')};
	font-weight: bold;
	transition: var(--transition);
	font-size: 2rem;
	border-radius: var(--radius);
	padding: 0.5rem;
	color: ${(props) => (props.active ? 'black' : 'white')};
`;

const StyledTickIcon = styled(TiTickOutline)`
	color: var(--clr-success);
	font-size: 2rem;
	place-items: center;
`;

const StyledStopIcon = styled(AiOutlineStop)`
	color: var(--clr-danger);
	font-size: 2rem;
	place-items: center;
`;

export {
	StyledContainer,
	StyledSearchButton,
	StyledSearchContainer,
	StyledSearch,
	StyledTableContainer,
	StyledTable,
	StyledTableHead,
	StyledTableBody,
	StyledTitle,
	StyledItem,
	StyledRow,
	StyledButtonContainer,
	StyledPaginateContainer,
	StyledPrevButton,
	StyledNextButton,
	StyledPageButton,
	StyledTickIcon,
	StyledStopIcon,
};
