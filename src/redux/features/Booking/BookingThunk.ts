import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../../utils/axios';
import { IBooking } from '../../../@types/Booking';

const URL = '/apt/tickets';

const getBookingList = createAsyncThunk<IBooking[]>(
	'booking.getBookingList',
	async (_, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: URL,
			};
			const response = await axiosInstance(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export { getBookingList };
