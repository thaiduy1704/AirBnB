import { useState, useRef, ChangeEvent, useEffect, FormEvent } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineGlobal, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { Container, Search, Nav, Logo, Input } from './style';
import ModalNavbar from '../ModalNavbar/ModalNavbar';
import { useAppSelector } from '../../redux/hooks/hooks';
import { useOnClickOutside } from '../../redux/hooks/useClickOutSide';
import { useNavigate } from 'react-router-dom';
import { ChangeHandler } from 'react-hook-form';
import { transformLanguage } from '../../utils/util';
import ModalLocationNav from '../ModalLocationNav/ModalLocationNav';

interface InputProps {
	disableInput: boolean;
}
export interface IFilterLocationId {
	location: string;
	id: string;
}
export interface INavbar {
	hideSearch?: boolean;
}

const Navbar = ({ hideSearch }: INavbar) => {
	const [title, setTitle] = useState('Any Where');
	const [isUserModalOpen, setIsUserModalOpen] = useState(false);
	const [disableInput, setDisableInput] = useState(true);

	const [inputLocation, setInputLocation] = useState<IFilterLocationId>({
		location: '',
		id: '',
	});
	const [filteredLocation, setFilteredLocation] = useState<IFilterLocationId[]>(
		[]
	);

	const { locationList } = useAppSelector((store) => store.location);
	const userModelRef = useRef(null);
	useOnClickOutside(userModelRef, () => setIsUserModalOpen(false));

	const ref = useRef(null);
	useOnClickOutside(ref, () => setDisableInput(true));

	const navigation = useNavigate();

	const onFilterLocationHandle = (e: ChangeEvent<HTMLInputElement>) => {
		const inputTemp = transformLanguage(e.target.value);
		setInputLocation({ ...inputLocation, location: inputTemp });
		console.log(inputTemp);
	};
	useEffect(() => {
		let transformedLocation = locationList.map((item) => {
			const { id, province, name } = item;
			const temp = {
				location: `${province}, ${name}`,
				id: id,
			};
			return temp;
		});
		const tempFilteredLocation = transformedLocation.filter((item) => {
			const temp = transformLanguage(item.location);
			//startwith kiem ky tu
			return temp.startsWith(inputLocation.location);
		});
		setFilteredLocation(tempFilteredLocation);
	}, [inputLocation]);

	const setInputLocationHandle = (location: string, id: string) => {
		setTitle(location);
		setInputLocation({ location, id });
	};
	const submitHandle = (e: FormEvent) => {
		e.preventDefault();
		if (!inputLocation.location) return;
		setTitle(inputLocation.location);
		navigation(`roomList/${inputLocation.id}`);
	};
	return (
		<Container>
			<Logo to='/'>
				<img src='../../images/logo.svg' alt='logo' />
			</Logo>
			<Search onSubmit={submitHandle} hide={hideSearch}>
				<button type='button' ref={ref} style={{ position: 'relative' }}>
					<h5 className='AnyWhere' onClick={() => setDisableInput(false)}>
						{title}
					</h5>
					<Input
						placeholder='Enter Location'
						disableInput={disableInput}
						onChange={onFilterLocationHandle}
						value={inputLocation.location}
					/>
					<ModalLocationNav
						locationList={filteredLocation}
						disableInput={disableInput}
						setInputLocation={setInputLocationHandle}
						setDisableInput={setDisableInput}
					/>
				</button>
				<div className='vertical-stripe'></div>
				<button type='button'>
					<h5>Any week</h5>
				</button>
				<div className='vertical-stripe'></div>
				<button>
					<h5 className='gray'>Add guests</h5>
				</button>
				<button type='submit' className='btn-search flex-center'>
					<HiOutlineSearch />
				</button>
			</Search>
			<Nav>
				<a className='btn' href='https://github.com/thaiduy1704'>
					Become A Host
				</a>
				<div className='translate flex-center btn'>
					<AiOutlineGlobal />
				</div>
				<button
					className={`${
						isUserModalOpen ? 'active login flex-center' : 'login flex-center'
					}`}
					onClick={() => setIsUserModalOpen(!isUserModalOpen)}>
					<AiOutlineMenu />
					<AiOutlineUser />
				</button>
				{isUserModalOpen && <ModalNavbar />}
			</Nav>
		</Container>
	);
};

export default Navbar;
