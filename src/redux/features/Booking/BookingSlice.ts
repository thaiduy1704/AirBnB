import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBooking } from '../../../@types/Booking';
import {
	getBookingList,
	getBookingListByTicketId,
	updateBookingListByTicketId,
} from './BookingThunk';
export interface IBookingState {
	bookingList: IBooking[];
	isLoading: boolean;
	error: string;
	bookSelected: IBooking | null;
}
const initialState: IBookingState = {
	bookingList: [],
	isLoading: false,
	error: '',
	bookSelected: null,
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
		builder.addCase(getBookingListByTicketId.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			getBookingListByTicketId.fulfilled,
			(state, { payload }) => {
				state.isLoading = false;
				state.bookSelected = payload;
			}
		);
		builder.addCase(getBookingListByTicketId.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(updateBookingListByTicketId.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			updateBookingListByTicketId.fulfilled,
			(state, { payload }) => {
				state.isLoading = false;
				state.bookSelected = payload;
			}
		);
		builder.addCase(
			updateBookingListByTicketId.rejected,
			(state, { payload }) => {
				state.isLoading = false;
				state.error = payload as string;
			}
		);
	},
});

export default bookingSlice.reducer;
