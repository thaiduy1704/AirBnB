import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { transformLanguage } from '../../../utils/util';
import { IUser } from '../../../@types/User';
import {
	createUser,
	deleteUserById,
	getAllUserPagination,
	getAllUsers,
	getUserById,
	updateUserById,
	uploadUserAvatar,
} from './UserThunk';
import { uploadLocationImageById } from '../Location/LocationThunk';

export interface IUserState {
	userList: IUser[];
	searchedUser: IUser[];

	userSelected: IUser | null;
	successMsg: string;
	error: string;
	isLoading: boolean;
}

const initialState: IUserState = {
	userList: [],
	searchedUser: [],
	userSelected: null,
	successMsg: '',
	error: '',
	isLoading: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		searchUser: (state: IUserState, action: PayloadAction<string>) => {
			const temp = state.userList.filter((user) => {
				if (!user.name) return false;
				const tempUserName = transformLanguage(user.name);
				return tempUserName.includes(action.payload);
			});

			state.searchedUser = temp;
		},
	},
	extraReducers(builder) {
		builder.addCase(getAllUsers.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.userList = payload;
			state.searchedUser = payload;
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
		builder.addCase(uploadUserAvatar.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(uploadUserAvatar.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(uploadUserAvatar.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});
		
	},
});
export const { searchUser } = userSlice.actions;
export default userSlice.reducer;
