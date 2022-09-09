import { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { loginThunk } from '../../redux/features/Auth/AuthThunk';
import { useLocalStorage } from '../../redux/hooks/useLocalStorage';
import Loading from '../Loading/Loading';
interface IRememberLogin {
	children: ReactNode;
}

const RememberLogin = ({ children }: IRememberLogin) => {
	const [userLogin] = useLocalStorage('userLogin', {
		email: '',
		password: '',
		token: '',
	});
	const { isLoading } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (userLogin.token) {
			dispatch(
				loginThunk({
					email: userLogin.email,
					password: userLogin.password,
				})
			);
		}
	}, []);
	if (isLoading) return <Loading />;

	return <>{children}</>;
};

export default RememberLogin;
