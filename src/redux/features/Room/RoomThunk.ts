import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../utils/axios';
import { IRoom } from '../../../@types/Room';
import { RootState } from '../../store';
import { UNAUTHENTICATED, UNAUTHORIZED } from '../../../constant/Error/Error';

const URL = '/api/rooms';

const getAllRoom = createAsyncThunk<IRoom[], void, { state: RootState }>(
	'room/getAllRooms',
	async (_, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;
			if (!auth) {
				return thunkAPI.rejectWithValue(UNAUTHENTICATED);
			}
			const {
				user: { type: userType },
				token,
			} = auth;
			if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
			const params = {
				method: 'GET',
				url: `${URL}`,
				header: {
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
const getRoomListByLocationId = createAsyncThunk<
	IRoom[],
	void,
	{ state: RootState }
>('room/getRoomListByLocationId', async (_, thunkAPI) => {
	const { room } = thunkAPI.getState();
	try {
		const params = {
			method: 'GET',
			url: `${URL}?locationId=${room.locationId}`,
		};
		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

const getRoomDetailById = createAsyncThunk<IRoom, string, { state: RootState }>(
	'room/getRoomDetailById',
	async (roomId, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: `${URL}/${roomId}`,
			};
			const response = await axiosInstance(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
const createNewRoom = createAsyncThunk<string, IRoom, { state: RootState }>(
	'booking/createNewRoom',
	async (newRoom, thunkAPI) => {
		const { auth } = thunkAPI.getState().auth;
		if (!auth) {
			return thunkAPI.rejectWithValue(UNAUTHENTICATED);
		}
		const {
			user: { type: userType },
			token,
		} = auth;
		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
		try {
			const params = {
				method: 'POST',
				url: `${URL}`,
				headers: {
					token,
				},
				data: newRoom,
			};
			await axiosInstance.request(params);
			return 'Success';
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
const bookRoomById = createAsyncThunk<
	string,
	{ roomId: string; checkIn: string; checkOut: string },
	{ state: RootState }
>('room/bookRoomId', async (bookInfo, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;
		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
		const {
			user: { type: userType },
			token,
		} = auth;
		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
		const params = {
			method: 'POST',
			url: `${URL}/booking`,
			headers: {
				token,
			},
			data: bookInfo,
		};
		await axiosInstance.request(params);
		return `Room ${bookInfo.roomId} booked success`;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

const updateRoomById = createAsyncThunk<string, IRoom, { state: RootState }>(
	'room/updateRoomById',
	async (roomDetail, thunkAPI) => {
		const { auth } = thunkAPI.getState().auth;
		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
		const {
			user: { type: userType },
			token,
		} = auth;
		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
		const {
			name,
			guests,
			bedRoom,
			bath,
			description,
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
			locationId,
			_id,
		} = roomDetail;
		try {
			const params = {
				method: 'PUT',
				url: `${URL}/${_id}`,
				headers: {
					token,
				},
				data: {
					name,
					guests,
					bedRoom,
					bath,
					description,
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
					locationId,
				},
			};
			await axiosInstance.request(params);
			return 'success update room';
		} catch (error: any) {
			return thunkAPI.rejectWithValue('update room false');
		}
	}
);
const deleteRoomById = createAsyncThunk<string, string, { state: RootState }>(
	'room/deleteRoomById',
	async (roomId, thunkAPI) => {
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const {
			user: { type: userType },
			token,
		} = auth;

		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);
		try {
			const params = {
				method: 'DELETE',
				url: `${URL}/${roomId}`,
				headers: {
					token,
				},
			};
			await axiosInstance.request(params);
			return 'Delete Succes';
		} catch (error: any) {
			return thunkAPI.rejectWithValue('Delete Room Fail');
		}
	}
);

const uploadRoomImageById = createAsyncThunk<
	string,
	{ id: string; image: FormData },
	{
		state: RootState;
	}
>('room/uploadRoomImageById', async (room, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;
		const { id, image } = room;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const {
			user: { type: userType },
			token,
		} = auth;

		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const params = {
			method: 'POST',
			url: `${URL}/upload-image/${id}`,
			headers: {
				token: token,
				'Content-Type': 'multipart/form-data',
			},
			data: image,
		};

		await axiosInstance.request(params);

		return 'Upload Room Image Successful';
	} catch (error) {
		return thunkAPI.rejectWithValue('Upload Room Image failed');
	}
});

export {
	getRoomListByLocationId,
	getAllRoom,
	getRoomDetailById,
	bookRoomById,
	createNewRoom,
	updateRoomById,
	deleteRoomById,
	uploadRoomImageById,
};
