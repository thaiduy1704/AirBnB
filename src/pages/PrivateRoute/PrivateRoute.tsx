import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';

export interface IPrivateRoute {
	type?: 'ADMIN' | 'CLIENT';
	children: ReactNode;
}

const PrivateRoute = ({ children, type = 'CLIENT' }: IPrivateRoute) => {
	const { auth } = useAppSelector((store) => store.auth);
	if (!auth) {
		return <Navigate to='/' />;
	}
	if (auth?.user.type !== type) {
		return <Navigate to='/' />;
	}
	return <>{children};</>;
};

export default PrivateRoute;
