import React from 'react';
import { StyledContainer, StyledLabel, StyledInput } from './style';
interface IAdminFormInput {
	id: string;
	inputName: string;
	disableInput?: boolean;
	inputType: string;
	defaultValue?: any;
	marginBottom?: boolean;
	isChecked?: boolean;
	register?: any;
}

const AdminFormInput = ({
	id,
	inputName,
	disableInput,
	inputType,
	defaultValue,
	marginBottom,
	isChecked,
	register,
}: IAdminFormInput) => {
	return (
		<StyledContainer key={id}>
			<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
			<StyledInput
				type={inputType}
				disabled={disableInput}
				defaultValue={defaultValue}
				marginBottom={marginBottom}
				placeholder={inputName}
				checked={isChecked}
				{...register}
			/>
		</StyledContainer>
	);
};

export default AdminFormInput;
