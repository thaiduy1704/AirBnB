import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './features/Auth/AuthSlice';
import BookingSlice from './features/Booking/BookingSlice';
import locationReducer from './features/Location/LocationSlice';
import roomReducer from './features/Room/RoomSlice';
import bookingReducer from './features/Booking/BookingSlice';
export const store = configureStore({
	reducer: {
		room: roomReducer,
		location: locationReducer,
		auth: authReducer,
		booking: bookingReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
