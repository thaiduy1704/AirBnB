import React, { ReactNode } from 'react';
import { StyledContainer } from './style';

interface IButton {
	fullWidth?: boolean;
	bgColor?: string;
	children: ReactNode;
	onClickHandler?: any;
}
const Button = ({ children, fullWidth, bgColor, onClickHandler }: IButton) => {
	return (
		<StyledContainer
			onClick={onClickHandler}
			bgColor={bgColor}
			type='submit'
			fullWidth={fullWidth}>
			<h4>{children}</h4>
		</StyledContainer>
	);
};

export default Button;
