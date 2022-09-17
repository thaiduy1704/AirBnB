import { useEffect, useState, ChangeEvent } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

import {
	deleteUserById,
	getAllUsers,
	getUserById,
	updateUserById,
} from '../../redux/features/User/UserThunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import Button from '../Button/Button';
import { IUser } from '../../@types/User';
import { USER_DATA } from '../../constant';
import Loading from '../Loading/Loading';
import Image from '../Image/Image';
import { transformDate, transformLanguage } from '../../utils/util';
import { usePagination } from '../../redux/hooks/usePagination';
import ModalUser from '../ModalUser/ModalUser';
import { type FormType } from '../ModalUser/ModalUser';
import { searchUser } from '../../redux/features/User/UserSlice';
import {
	StyledContainer,
	StyledSearchButton,
	StyledSearchContainer,
	StyledHeadButtonContainer,
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
	StyledRefreshButton,
} from './style';

const USER_PER_PAGE = 10;

const UserDashBoard = () => {
	const [formType, setFormType] = useState<FormType>('INFO');
	const [displayUser, setDisplayUser] = useState<IUser[]>([]);
	const { userList, searchedUser, userSelected, isLoading } = useAppSelector(
		(store) => store.user
	);
	const [modalTitle, setModalTitle] = useState('User Info');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useAppDispatch();
	const {
		currentPage,
		setCurrentPage,
		nextPage,
		prevPage,
		pageArray,
		maxPage,
		setMaxPage,
	} = usePagination(userList.length);
	const [rotateRefreshButton, setRotateRefreshButton] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const renderNewUser = () => {
		let tempArray = Array.from(
			{ length: USER_PER_PAGE },
			(_, i) => searchedUser[currentPage * USER_PER_PAGE + i]
		);

		tempArray = tempArray.filter((item) => item !== undefined);
		setDisplayUser(tempArray);
	};

	const deleteUser = (id: string) => {
		return () => {
			dispatch(deleteUserById(id));
			dispatch(getAllUsers());
		};
	};

	const showUser = (id: string) => {
		return () => {
			setFormType('INFO');
			setModalTitle('User Info');
			setIsModalOpen(true);
			dispatch(getUserById(id));
		};
	};

	const createNewUser = () => {
		return () => {
			setModalTitle('Create User');
			setFormType('CREATE');
			setIsModalOpen(true);
		};
	};

	const updateUser = (id: string) => {
		return () => {
			setFormType('UPDATE');
			setModalTitle('Update User');
			setIsModalOpen(true);
			dispatch(getUserById(id));
		};
	};

	const onRefreshHandler = () => {
		setRotateRefreshButton(true);
		dispatch(getAllUsers());
		renderNewUser();
		setTimeout(() => {
			setRotateRefreshButton(false);
		}, 3000);
	};

	const onSearchHandler = () => {
		setCurrentPage(0);
		dispatch(searchUser(searchValue));
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		renderNewUser();
		setMaxPage(Math.floor(searchedUser.length / USER_PER_PAGE));
	}, [currentPage, userList, searchedUser, maxPage]);

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);
	if (isLoading) {
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<ModalUser
				formType={formType}
				title={modalTitle}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				isLoading={isLoading}
				data={userSelected}
				disableInput={formType === 'INFO' ? true : false}
				dispatchFunction={
					formType === 'UPDATE' ? updateUserById : createNewUser
				}
				dispatchUploadImageFunction={null}
				dummyData={USER_DATA}
				imageName='avatar'
			/>
			<StyledHeadButtonContainer>
				<Button onClickHandler={createNewUser()} fullWidth={false}>
					Add New
				</Button>
				<StyledRefreshButton
					isSpin={rotateRefreshButton}
					onClick={onRefreshHandler}>
					<HiOutlineRefresh />
				</StyledRefreshButton>
			</StyledHeadButtonContainer>
			<StyledSearchContainer>
				<StyledSearch onChange={onChangeHandler} />
				<StyledSearchButton onClickHandler={onSearchHandler}>
					Search
				</StyledSearchButton>
			</StyledSearchContainer>
			<StyledTableContainer>
				{isLoading ? (
					<Loading />
				) : (
					<StyledTable>
						<StyledTableHead>
							<StyledRow>
								<StyledTitle>Id</StyledTitle>
								<StyledTitle>Name</StyledTitle>
								<StyledTitle>Email</StyledTitle>
								<StyledTitle>Phone</StyledTitle>
								<StyledTitle>Birthday</StyledTitle>
								<StyledTitle>Gender</StyledTitle>
								<StyledTitle>Address</StyledTitle>
								<StyledTitle>Type</StyledTitle>
								<StyledTitle>Image</StyledTitle>
								<StyledTitle>Actions</StyledTitle>
							</StyledRow>
						</StyledTableHead>
						<StyledTableBody>
							{displayUser.map((item) => {
								const {
									_id,
									name,
									email,
									phone,
									birthday,
									gender,
									address,
									type,
									avatar,
								} = item;
								return (
									<StyledRow key={_id}>
										<StyledItem>{_id}</StyledItem>
										<StyledItem>{name}</StyledItem>
										<StyledItem>{email}</StyledItem>
										<StyledItem>{phone}</StyledItem>
										<StyledItem>{transformDate(new Date(birthday))}</StyledItem>
										<StyledItem>{gender ? 'Male' : 'Female'}</StyledItem>
										<StyledItem>{address}</StyledItem>
										<StyledItem>{type}</StyledItem>
										<StyledItem>
											<Image url={avatar as string} alt={name} />
										</StyledItem>
										<StyledItem>
											<StyledButtonContainer>
												<Button
													onClickHandler={showUser(_id)}
													bgColor='#28a745'>
													Info
												</Button>
												<Button
													onClickHandler={updateUser(_id)}
													bgColor='#ffc107'>
													Update
												</Button>
												<Button
													onClickHandler={deleteUser(_id)}
													bgColor='#dc3545'>
													Delete
												</Button>
											</StyledButtonContainer>
										</StyledItem>
									</StyledRow>
								);
							})}
						</StyledTableBody>
					</StyledTable>
				)}
			</StyledTableContainer>
			{maxPage !== 0 && (
				<StyledPaginateContainer>
					<StyledPrevButton onClick={prevPage}>Prev</StyledPrevButton>
					{pageArray.map((page, index) => {
						return (
							<StyledPageButton
								key={index}
								active={currentPage === page}
								onClick={() => setCurrentPage(page)}>
								{page + 1}
							</StyledPageButton>
						);
					})}
					<StyledNextButton onClick={nextPage}>Next</StyledNextButton>
				</StyledPaginateContainer>
			)}
		</StyledContainer>
	);
};

export default UserDashBoard;
