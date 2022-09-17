import styled from 'styled-components';

const StyledContainer = styled.div``;

const StyledUserInfoContainer = styled.div`
	display: grid;
	grid-template-columns: 7rem 1fr;
	gap: 1rem;
	margin-bottom: 0.5rem;
`;

const StyledUserImage = styled.div`
	width: 7rem;
	height: 7rem;
	border-radius: 50%;
`;

const StyledUserInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

// Typography
const StyledHeading = styled.h5`
	text-transform: capitalize;
`;

const StyledParagraph = styled.p`
	font-weight: 400;
	color: #717171;
	font-size: 1.4rem;
`;

const StyledUserComment = styled.p`
	font-size: 1.8rem;
	color: rgb(34, 34, 34);
`;

export {
	StyledContainer,
	StyledUserInfoContainer,
	StyledUserImage,
	StyledUserInfo,
	StyledUserComment,
	StyledHeading,
	StyledParagraph,
};
