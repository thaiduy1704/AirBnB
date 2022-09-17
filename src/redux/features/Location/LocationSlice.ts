import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocation } from '../../../@types/Location';
import { transformLanguage } from '../../../utils/util';
import {
	createLocation,
	deleteLocationById,
	getLocationList,
	getLocationListById,
	updateLocationById,
	uploadLocationImageById,
} from './LocationThunk';

export interface ILocationState {
	locationList: ILocation[];
	searchedLocation: ILocation[];
	isLoading: boolean;
	locationSelect: ILocation | null;
	successMsg: string;
	error: string;
}

const initialState: ILocationState = {
	locationList: [],
	searchedLocation: [],
	locationSelect: null,
	isLoading: false,
	successMsg: '',
	error: '',
};

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		searchLocation: (state: ILocationState, action: PayloadAction<string>) => {
			const temp = state.locationList.filter((location) => {
				if (!location.name) return false;
				const tempLocationName = transformLanguage(location.name);
				return tempLocationName.includes(action.payload);
			});
			state.searchedLocation = temp;
		},
	},
	extraReducers(builder) {
		builder.addCase(getLocationList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getLocationList.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.locationList = payload;
			state.searchedLocation = payload;
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
		builder.addCase(uploadLocationImageById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(uploadLocationImageById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(uploadLocationImageById.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});
	},
});
export const { searchLocation } = locationSlice.actions;
export default locationSlice.reducer;
