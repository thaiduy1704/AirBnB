import { ReactNode } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { StyledContainer, StyledContent, StyledCloseButton } from './style';

interface IModal {
	children?: ReactNode;
	isModalOpen?: boolean;
	setIsModalOpen?: any;
}

const Modal = ({ children, isModalOpen, setIsModalOpen }: IModal) => {
	return (
		<StyledContainer isOpen={isModalOpen}>
			<StyledCloseButton onClick={() => setIsModalOpen(!isModalOpen)}>
				<MdOutlineKeyboardArrowRight />
			</StyledCloseButton>
			<StyledContent>{children}</StyledContent>
		</StyledContainer>
	);
};

export default Modal;
