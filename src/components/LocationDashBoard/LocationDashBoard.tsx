import { useEffect, useState, ChangeEvent } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import Button from '../Button/Button';
import { ILocation } from '../../@types/Location';
import { LOCATION_DATA } from '../../constant';
import Loading from '../Loading/Loading';
import Image from '../Image/Image';
import { transformDate, transformLanguage } from '../../utils/util';
import { usePagination } from '../../redux/hooks/usePagination';
import ModalUser from '../ModalUser/ModalUser';
import { type FormType } from '../ModalUser/ModalUser';
import { searchLocation } from '../../redux/features/Location/LocationSlice';
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
	StyledRefreshButton,
	StyledHeadButtonContainer,
} from './style';
import {
	createLocation,
	deleteLocationById,
	getLocationList,
	getLocationListById,
	updateLocationById,
	uploadLocationImageById,
} from '../../redux/features/Location/LocationThunk';
const LOCATION_PER_PAGE = 10;

const LocationDashBoard = () => {
	const [formType, setFormType] = useState<FormType>('INFO');
	const [displayLocation, setDisplayLocation] = useState<ILocation[]>([]);
	const { locationList, searchedLocation, locationSelect, isLoading } =
		useAppSelector((store) => store.location);
	const [modalTitle, setModalTitle] = useState('Location Info');
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
	} = usePagination(locationList.length);
	const [rotateRefreshButton, setRotateRefreshButton] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const renderNewLocation = () => {
		let tempArray = Array.from(
			{ length: LOCATION_PER_PAGE },
			(_, i) => searchedLocation[currentPage * LOCATION_PER_PAGE + i]
		);

		tempArray = tempArray.filter((item) => item !== undefined);
		setDisplayLocation(tempArray);
	};

	const deleteLocation = (id: string) => {
		return () => {
			dispatch(deleteLocationById(id));
			dispatch(getLocationList());
		};
	};

	const showLocation = (id: string) => {
		return () => {
			setFormType('INFO');
			setModalTitle('Location Info');
			setIsModalOpen(true);
			dispatch(getLocationListById(id));
		};
	};

	const createNewLocation = () => {
		return () => {
			setModalTitle('Create Location');
			setFormType('CREATE');
			setIsModalOpen(true);
		};
	};

	const updateLocation = (id: string) => {
		return () => {
			setFormType('UPDATE');
			setModalTitle('Update Location');
			setIsModalOpen(true);
			dispatch(getLocationListById(id));
		};
	};

	const onRefreshHandler = () => {
		setRotateRefreshButton(true);
		dispatch(getLocationList());
		renderNewLocation();
		setTimeout(() => {
			setRotateRefreshButton(false);
		}, 3000);
	};

	const onSearchHandler = () => {
		setCurrentPage(0);
		dispatch(searchLocation(searchValue));
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		renderNewLocation();
		setMaxPage(Math.floor(searchedLocation.length / LOCATION_PER_PAGE));
	}, [currentPage, locationList, searchedLocation, maxPage]);

	useEffect(() => {
		dispatch(getLocationList());
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
				data={locationSelect}
				disableInput={formType === 'INFO' ? true : false}
				dispatchFunction={
					formType === 'UPDATE' ? updateLocationById : createLocation
				}
				dispatchUploadImageFunction={uploadLocationImageById}
				dummyData={LOCATION_DATA}
				imageName='avatar'
			/>
			<StyledHeadButtonContainer>
				<Button onClickHandler={createNewLocation()} fullWidth={false}>
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
				<StyledTable>
					<StyledTableHead>
						<StyledRow>
							<StyledTitle>Id</StyledTitle>
							<StyledTitle>Name</StyledTitle>
							<StyledTitle>Province</StyledTitle>
							<StyledTitle>Country</StyledTitle>
							<StyledTitle>Image</StyledTitle>
							<StyledTitle>Actions</StyledTitle>
						</StyledRow>
					</StyledTableHead>
					<StyledTableBody>
						{displayLocation.map((item) => {
							const { id, name, province, country, image } = item;
							return (
								<StyledRow key={id}>
									<StyledItem>{id}</StyledItem>
									<StyledItem>{name ? name : 'Not provided'}</StyledItem>
									<StyledItem>
										{province ? province : 'Not provided'}
									</StyledItem>
									<StyledItem>{country ? country : 'Not provided'}</StyledItem>
									{/* <StyledItem>{valueate ? valueate : 0}</StyledItem> */}

									<StyledItem>
										<Image url={image} alt={name} widthImage='100px' />
									</StyledItem>

									<StyledItem>
										<StyledButtonContainer>
											<Button
												onClickHandler={showLocation(id)}
												bgColor='#28a745'>
												Info
											</Button>
											<Button
												onClickHandler={updateLocation(id)}
												bgColor='#ffc107'>
												Update
											</Button>
											<Button
												onClickHandler={deleteLocation(id)}
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

export default LocationDashBoard;
