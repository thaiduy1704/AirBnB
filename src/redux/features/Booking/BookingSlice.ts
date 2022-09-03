import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBooking } from '../../../@types/Booking';
import { getBookingList } from './BookingThunk';
export interface IBookingState {
	bookingList: IBooking[];
	isLoading: boolean;
	error: string;
}
const initialState: IBookingState = {
	bookingList: [],
	isLoading: false,
	error: '',
};

const bookingSlice = createSlice({
	name: 'booking',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getBookingList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getBookingList.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.bookingList = payload;
		});
		builder.addCase(getBookingList.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
	},
});
