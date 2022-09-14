import { useEffect, useState } from 'react';
import {
	deleteUserById,
	getAllUsers,
	getUserById,
	updateUserById,
} from '../../redux/features/User/UserThunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import Button from '../Button/Button';
import { IUser } from '../../@types/User';
import {
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
} from './style';
import Loading from '../Loading/Loading';
import { transformDate } from '../../utils/util';
import { usePagination } from '../../redux/hooks/usePagination';
import ModalUser from '../ModalUser/ModalUser';

const USER_PER_PAGE = 10;

const UserDashBoard = () => {
	const [page, setPage] = useState(0);
	const [displayUser, setDisplayUser] = useState<IUser[]>([]);
	const [modalTilte, setModalTilte] = useState('User Modal');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { userList, isLoading, userSelected } = useAppSelector(
		(store) => store.user
	);
	const dispatch = useAppDispatch();
	const maxPage = Math.floor(userList.length / USER_PER_PAGE) - 1;
	const { currentPage, setCurrentPage, nextPage, prevPage, pageArray } =
		usePagination(maxPage);

	const renderUserPage = () => {
		let tempArray = Array.from(
			{ length: USER_PER_PAGE },
			(_, i) => userList[currentPage * USER_PER_PAGE + i]
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
			setModalTilte('User Info');
			setIsModalOpen(true);
			dispatch(getUserById(id));
		};
	};
	const updateUser = (id: string) => {
		return () => {
			setModalTilte('Update User');
			setIsModalOpen(true);
			dispatch(getUserById(id));
		};
	};

	useEffect(() => {
		renderUserPage();
	}, [currentPage, userList]);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [userSelected]);

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
				title={modalTilte}
				isLoading={isLoading}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				data={userSelected}
				disableInput={modalTilte === 'Update User' ? false : true}
				dispatchFunction={updateUserById}
			/>
			<Button fullWidth={false}>Add New</Button>
			<StyledSearchContainer>
				<StyledSearch />
				<StyledSearchButton>Search</StyledSearchButton>
			</StyledSearchContainer>
			<StyledTableContainer>
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
										<StyledButtonContainer>
											<Button onClickHandler={showUser(_id)} bgColor='#28a745'>
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
			</StyledTableContainer>
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
		</StyledContainer>
	);
};

export default UserDashBoard;
