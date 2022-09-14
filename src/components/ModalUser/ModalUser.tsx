import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../redux/hooks/hooks';
import { useOnClickOutside } from '../../redux/hooks/useClickOutSide';
import Loading from '../Loading/Loading';
import Button from '../Button/Button';

import {
	Container,
	Card,
	CardBody,
	CardItem,
	CardItemHeader,
	CardItemInfo,
	Title,
} from './style';
import { formType } from '../../constant';
export interface IModal<T> {
	title: string;
	isModalOpen: boolean;
	setIsModalOpen: any;
	isLoading: boolean;
	disableInput?: boolean;
	data: T | null;
	dispatchFunction?: any;
}

const ModalUser = <T extends { [key: string]: any }>({
	title,
	isLoading,
	isModalOpen,
	data,
	disableInput,
	dispatchFunction,
	setIsModalOpen,
}: IModal<T>) => {
	const dispatch = useAppDispatch();
	const ref = useRef(null);
	useOnClickOutside(ref, () => setIsModalOpen(false));
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();
	const onSubmitHandler = (data: any) => {
		setIsModalOpen(false);
		dispatch(dispatchFunction(data));
	};
	if (!data) {
		return (
			<Container isModalOpen={isModalOpen}>
				<Loading />
			</Container>
		);
	}
	const objectTitles = Object.keys(data);

	return (
		<Container isModalOpen={isModalOpen}>
			<Card ref={ref} onSubmit={handleSubmit(onSubmitHandler)}>
				<Title>{title}</Title>
				<CardBody>
					{objectTitles.map((title, id) => {
						let info = data[title] ? data[title] : 'Not Provided';
						if (info?.length === 0) info = 'null';
						let inputType = formType[title] ? formType[title] : 'text';
						if (title === 'birthday') {
							info = new Date(data[title]).toISOString().substring(0, 10);
						}
						if (title === 'gender') {
							inputType = 'checkbox';
						}

						return (
							<CardItem key={id}>
								<CardItemHeader htmlFor={title}>{title}</CardItemHeader>
								<CardItemInfo
									disabled={disableInput}
									type={inputType}
									defaultValue={info}
									placeholder={title}
									{...register(title, {
										required: {
											value: true,
											message: `${title} must be provided`,
										},
									})}
								/>
							</CardItem>
						);
					})}
				</CardBody>
				{title === 'Update User' && (
					<Button fullWidth bgColor='#ffc107'>
						Update
					</Button>
				)}
			</Card>
		</Container>
	);
};

export default ModalUser;
