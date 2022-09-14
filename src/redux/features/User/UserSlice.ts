import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../@types/User';
import {
	createUser,
	deleteUserById,
	getAllUserPagination,
	getAllUsers,
	getUserById,
	updateUserById,
} from './UserThunk';

export interface IUserState {
	userList: IUser[];
	userSelected: IUser | null;
	successMsg: string;
	error: string;
	isLoading: boolean;
}

const initialState: IUserState = {
	userList: [],
	userSelected: null,
	successMsg: '',
	error: '',
	isLoading: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getAllUsers.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.userList = payload;
			state.successMsg = 'success getAllUser';
		});
		builder.addCase(getAllUsers.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(getAllUserPagination.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllUserPagination.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.userList = payload;
			state.successMsg = 'success getAllUserPagination';
		});
		builder.addCase(getAllUserPagination.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(getUserById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUserById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.userSelected = payload;
			state.successMsg = 'success getUserById';
		});
		builder.addCase(getUserById.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});
		builder.addCase(createUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(createUser.fulfilled, (state, { payload }) => {
			state.isLoading = false;

			state.successMsg = payload;
		});
		builder.addCase(createUser.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});
		builder.addCase(updateUserById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(updateUserById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.userSelected = payload;
			state.successMsg = 'success updateUserById';
		});
		builder.addCase(updateUserById.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});
		builder.addCase(deleteUserById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deleteUserById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(deleteUserById.rejected, (state, { payload }) => {
			state.isLoading = true;
			if (payload) {
				state.error = payload as string;
			}
		});
	},
});
export default userSlice.reducer;
