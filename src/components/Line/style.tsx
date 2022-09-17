import styled from 'styled-components';

const StyledContainer = styled.div<{ margin?: string }>`
	height: 1px;
	width: 100%;
	background-color: #dddddd;
	margin: ${(props) => (props.margin ? props.margin : '3.5rem auto')};

	@media only screen and (max-width: 992px) {
		margin: ${(props) => (props.margin ? props.margin : '2.5rem auto')};
	}
`;

export { StyledContainer };
