import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoom } from "../../../@types/Room";
import { transformLanguage } from "../../../utils/util";
import {
  bookRoomById,
  createNewRoom,
  deleteRoomById,
  getAllRoom,
  getRoomDetailById,
  getRoomListByLocationId,
  updateRoomById,
  uploadRoomImageById,
} from "./RoomThunk";

export interface IRoomState {
  roomList: IRoom[];
  searchedRoom: IRoom[];
  roomSelected: IRoom | null;
  locationId: string;
  isLoading: boolean;
  successMsg: string;
  error: string;
}

const initialState: IRoomState = {
  roomList: [],
  searchedRoom: [],
  roomSelected: null,
  locationId: "bc75d699-6d38-4b61-472f-08dbdc4f7d85",
  isLoading: false,
  successMsg: "",
  error: "",
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    selectLocaiton: (state: IRoomState, action: PayloadAction<string>) => {
      state.locationId = action.payload;
    },
    searchRoom: (state: IRoomState, action: PayloadAction<string>) => {
      const temp = state.roomList.filter((room) => {
        if (!room.name) return false;
        const tempRoomName = transformLanguage(room.name);
        return tempRoomName.includes(action.payload);
      });

      state.searchedRoom = temp;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllRoom.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAllRoom.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = "get all room Success";
      state.roomList = payload;
      state.searchedRoom = payload;
    });
    builder.addCase(getAllRoom.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });

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
    builder.addCase(bookRoomById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(bookRoomById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    });
    builder.addCase(bookRoomById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });
    builder.addCase(createNewRoom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createNewRoom.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    });
    builder.addCase(createNewRoom.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });
    builder.addCase(updateRoomById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateRoomById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    });
    builder.addCase(updateRoomById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });
    builder.addCase(deleteRoomById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteRoomById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    });
    builder.addCase(deleteRoomById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });
    builder.addCase(uploadRoomImageById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadRoomImageById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    });
    builder.addCase(uploadRoomImageById.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload as string;
      }
    });
  },
});

export const { selectLocaiton, searchRoom } = roomSlice.actions;

export default roomSlice.reducer;
