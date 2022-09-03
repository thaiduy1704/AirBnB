import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRoom } from '../../../@types/Room';
import { getRoomDetailById, getRoomListByLocationId } from './RoomThunk';

export interface IRoomState {
	roomList: IRoom[];
	roomSelected: IRoom | null;
	locationId: string;
	isLoading: boolean;
	successMsg: string;
	error: string;
}

const initialState: IRoomState = {
	roomList: [],
	roomSelected: null,
	locationId: '61697f97efe193001c0a5b69',
	isLoading: false,
	successMsg: '',
	error: '',
};

const roomSlice = createSlice({
	name: 'room',
	initialState,
	reducers: {
		selectLocaiton: (state: IRoomState, action: PayloadAction<string>) => {
			state.locationId = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getRoomListByLocationId.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(getRoomListByLocationId.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.roomList = payload;
		});
		builder.addCase(getRoomListByLocationId.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});

		//GetRoomById
		builder.addCase(getRoomDetailById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getRoomDetailById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.roomSelected = payload;
		});
		builder.addCase(getRoomDetailById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
	},
});

export const { selectLocaiton } = roomSlice.actions;

export default roomSlice.reducer;
