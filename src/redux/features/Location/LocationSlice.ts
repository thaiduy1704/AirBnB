import { createSlice } from '@reduxjs/toolkit';
import { ILocation } from '../../../@types/Location';
import {
	createLocation,
	deleteLocationById,
	getLocationList,
	getLocationListById,
	updateLocationById,
} from './LocationThunk';

export interface ILocationState {
	locationList: ILocation[];
	isLoading: boolean;
	locationSelect: ILocation | null;
	successMsg: string;
	error: string;
}

const initialState: ILocationState = {
	locationList: [],
	locationSelect: null,
	isLoading: false,
	successMsg: '',
	error: '',
};

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getLocationList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getLocationList.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.locationList = payload;
		});
		builder.addCase(getLocationList.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(getLocationListById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getLocationListById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.locationSelect = payload;
		});
		builder.addCase(getLocationListById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});

		builder.addCase(createLocation.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(createLocation.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(createLocation.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(updateLocationById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(updateLocationById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(updateLocationById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(deleteLocationById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deleteLocationById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(deleteLocationById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
	},
});

export default locationSlice.reducer;
