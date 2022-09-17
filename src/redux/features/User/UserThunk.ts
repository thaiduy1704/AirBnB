import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../utils/axios';
import { RootState } from '../../store';
import { IUser } from '../../../@types/User';
import { IRegister } from '../../../@types/Auth';
import { UNAUTHENTICATED, UNAUTHORIZED } from '../../../constant/Error/Error';

const URL = '/api/users';

const getAllUsers = createAsyncThunk<IUser[], void, { state: RootState }>(
	'user/getAllUsers',
	async (_, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;
			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
			const {
				user: { type: userType },
				token,
			} = auth;
			if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
			const params = {
				method: 'GET',
				url: `${URL}`,
				headers: {
					token,
				},
			};
			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
const getUserById = createAsyncThunk<IUser, string, { state: RootState }>(
	'user/getUserById',
	async (userId, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;
			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
			const {
				user: { type: userType },
				token,
			} = auth;
			if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
			const params = {
				method: 'GET',
				url: `${URL}/${userId}`,
				headers: {
					token,
				},
			};
			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const getAllUserPagination = createAsyncThunk<
	IUser[],
	{
		limit: number;
		skip: number;
	},
	{ state: RootState }
>('user/getAllUserPagination', async ({ limit = 0, skip = 10 }, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;
		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
		const {
			user: { type: userType },
			token,
		} = auth;
		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
		const params = {
			method: 'GET',
			url: `${URL}/pagination?skip=${skip}&limit=${limit}`,
			headers: {
				token,
			},
		};
		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

const createUser = createAsyncThunk<string, IUser, { state: RootState }>(
	'user/createUser',
	async (user, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;
			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
			const {
				user: { type: userType },
				token,
			} = auth;
			if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
			const { name, password, email, phone, gender, address, type } = user;
			const params = {
				method: 'POST',
				url: `${URL}`,
				headers: {
					token,
				},
				data: {
					name: name,
					password: password,
					email: email,
					phone: phone,
					gender: gender === 'Man' ? true : false,
					address: address,
					type: type,
				},
			};
			await axiosInstance.request(params);
			return `Create new ${user.type} successfully`;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
const updateUserById = createAsyncThunk<IUser, IUser, { state: RootState }>(
	'user/updateUserById',
	async (user, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;
			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
			const {
				user: { type: userType },
				token,
			} = auth;
			if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
			const { name, password, email, phone, gender, address, type } = user;
			const params = {
				method: 'PUT',
				url: `${URL}/${user._id}`,
				headers: {
					token,
				},
				data: {
					name: name,
					password: password,
					email: email,
					phone: phone,
					gender: gender === 'Man' ? true : false,
					address: address,
					type: type,
				},
			};
			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
const deleteUserById = createAsyncThunk<string, string, { state: RootState }>(
	'user/deleteUserById',
	async (userId, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;
			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
			const {
				user: { type: userType },
				token,
			} = auth;
			if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
			const params = {
				method: 'DELETE',
				url: `${URL}/${userId}`,
				headers: {
					token,
				},
			};
			await axiosInstance.request(params);
			return `Delete user ${userId} successfully`;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const uploadUserAvatar = createAsyncThunk<
	string,
	{ image: FormData },
	{ state: RootState }
>('user/uploadUserAvatar', async (user, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;
		const { image } = user;
		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const {
			user: { type: userType },
			token,
		} = auth;

		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
		const params = {
			method: 'POST',
			url: `${URL}/upload-avatar`,
			headers: {
				token: token,
				'Content-Type': 'multipart/form-data',
			},
			data: image,
		};

		await axiosInstance.request(params);

		return 'Upload User Avatar Successful';
	} catch (error: any) {
		return thunkAPI.rejectWithValue('Upload User Avatar failed');
	}
});

export {
	getAllUsers,
	getUserById,
	getAllUserPagination,
	createUser,
	updateUserById,
	deleteUserById,
	uploadUserAvatar,
};
