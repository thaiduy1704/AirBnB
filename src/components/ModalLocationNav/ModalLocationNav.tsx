import React from 'react';
import { IFilterLocationId } from '../Navbar/Navbar';
import { GoLocation } from 'react-icons/go';

import { Container, Button } from './style';

export interface IProps {
	locationList: IFilterLocationId[];
	disableInput: boolean;
	setInputLocation: (location: string, id: string) => void;
	setDisableInput: (value: boolean) => void;
}
interface InputProps {
	disableInput: boolean;
}

const ModalLocationNav = ({
	locationList,
	disableInput,
	setDisableInput,
	setInputLocation,
}: IProps) => {
	const onClickHandler = (location: string, id: string) => {
		setInputLocation(location, id);
		setDisableInput(true);
	};

	return (
		<Container disableInput={locationList.length === 0 || disableInput}>
			{locationList.map((item) => {
				const { location, id } = item;
				return (
					<Button
						onClick={() => {
							onClickHandler(location, id);
						}}
						key={id}>
						<GoLocation />
						{location}
					</Button>
				);
			})}
		</Container>
	);
};

export default ModalLocationNav;
