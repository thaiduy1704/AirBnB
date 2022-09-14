import { useEffect, useState } from 'react';
import { getAllUsers } from '../../redux/features/User/UserThunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import Button from '../Button/Button';
import Image from '../Image/Image';
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
	StyledTickIcon,
	StyledStopIcon,
} from './style';
import Loading from '../Loading/Loading';
import { transformDate } from '../../utils/util';
import { usePagination } from '../../redux/hooks/usePagination';
import { IRoom } from '../../@types/Room';
import {
	deleteRoomById,
	getAllRoom,
} from '../../redux/features/Room/RoomThunk';

const ROOM_PER_PAGE = 10;

const RoomDashBoard = () => {
	const [displayRoom, setDisplayRoom] = useState<IRoom[]>([]);
	const [modalTilte, setModalTilte] = useState('User Modal');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { roomList, isLoading, roomSelected } = useAppSelector(
		(store) => store.room
	);
	const dispatch = useAppDispatch();
	const maxPage = Math.floor(roomList.length / ROOM_PER_PAGE) - 1;
	const { currentPage, setCurrentPage, nextPage, prevPage, pageArray } =
		usePagination(maxPage);

	const renderUserPage = () => {
		let tempArray = Array.from(
			{ length: ROOM_PER_PAGE },
			(_, i) => roomList[currentPage * ROOM_PER_PAGE + i]
		);
		tempArray = tempArray.filter((item) => item !== undefined);
		setDisplayRoom(tempArray);
	};
	const deleteRoom = (id: string) => {
		return () => {
			dispatch(deleteRoomById(id));
			dispatch(getAllRoom());
		};
	};
	useEffect(() => {
		renderUserPage();
		console.log(displayRoom);
	}, [currentPage, roomList]);

	useEffect(() => {
		dispatch(getAllRoom());
	}, [roomSelected]);

	if (isLoading) {
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);
	}
	return (
		<StyledContainer>
			<h1>Model</h1>
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
							<StyledTitle>Guests</StyledTitle>
							<StyledTitle>BedRoom</StyledTitle>
							<StyledTitle>Bath</StyledTitle>
							<StyledTitle>Elevator</StyledTitle>
							<StyledTitle>Hot Tubs</StyledTitle>
							<StyledTitle>Pool</StyledTitle>
							<StyledTitle>Indoor Fireplace</StyledTitle>
							<StyledTitle>Dryer</StyledTitle>
							<StyledTitle>Gym</StyledTitle>
							<StyledTitle>Kitchen</StyledTitle>
							<StyledTitle>Wifi</StyledTitle>
							<StyledTitle>Heating</StyledTitle>
							<StyledTitle>CableTv</StyledTitle>
							<StyledTitle>Image</StyledTitle>
							<StyledTitle>Price</StyledTitle>
							<StyledTitle>Actions</StyledTitle>
						</StyledRow>
					</StyledTableHead>
					<StyledTableBody>
						{displayRoom.map((item) => {
							const {
								_id,
								name,
								guests,
								bedRoom,
								bath,
								price,
								elevator,
								hotTub,
								pool,
								indoorFireplace,
								dryer,
								gym,
								kitchen,
								wifi,
								heating,
								cableTV,
								image,
							} = item;
							return (
								<StyledRow key={_id}>
									<StyledItem>{_id}</StyledItem>
									<StyledItem>{name}</StyledItem>
									<StyledItem>{guests ? guests : 0}</StyledItem>
									<StyledItem>{bedRoom ? bedRoom : 0}</StyledItem>
									<StyledItem>
										{bath ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{elevator ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{hotTub ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{pool ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{indoorFireplace ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{dryer ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{gym ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{kitchen ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{wifi ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{heating ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{cableTV ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										<Image url={image} alt={name} />
									</StyledItem>
									<StyledItem>{price ? price : 'Not Provided'}</StyledItem>
									<StyledItem>
										<StyledButtonContainer>
											<Button bgColor='#28a745'>Info</Button>
											<Button bgColor='#ffc107'>Update</Button>
											<Button
												bgColor='#dc3545'
												onClickHandler={deleteRoom(_id)}>
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

export default RoomDashBoard;
