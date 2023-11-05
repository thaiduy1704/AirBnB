import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../utils/axios";
import { IRoom } from "../../../@types/Room";
import { RootState } from "../../store";
import { UNAUTHENTICATED, UNAUTHORIZED } from "../../../constant/Error/Error";

const URL = "/api/v1/Room";
const URL_BOOKING = "/api/v1/Reservation";
const URl_LOCATION = "/api/v1/Location";
const getAllRoom = createAsyncThunk<IRoom[], void, { state: RootState }>(
  "room/getAllRoom",
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState().auth;
      if (!auth) {
        return thunkAPI.rejectWithValue(UNAUTHENTICATED);
      }
      const {
        user: { type: userType },
        token,
      } = auth;
      if (userType !== "ADMIN") return thunkAPI.rejectWithValue(UNAUTHORIZED);
      const params = {
        method: "GET",
        url: URL,
      };
      const response = await axiosInstance.request(params);
      return response.data;
    } catch (error: any) {
      // console.log(error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getRoomListByLocationId = createAsyncThunk<
  IRoom[],
  string,
  { state: RootState }
>("room/getRoomListByLocationId", async (locationId, thunkAPI) => {
  try {
    const params = {
      method: "GET",
      url: `${URL}/ByLocation/${locationId}`,
    };
    const response = await axiosInstance.request(params);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getRoomDetailById = createAsyncThunk<IRoom, string, { state: RootState }>(
  "room/getRoomDetailById",
  async (roomId, thunkAPI) => {
    try {
      const params = {
        method: "GET",
        url: `${URL}/ById/${roomId}`,
      };
      const response = await axiosInstance(params);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const createNewRoom = createAsyncThunk<string, IRoom, { state: RootState }>(
  "booking/createNewRoom",
  async (newRoom, thunkAPI) => {
    const { auth } = thunkAPI.getState().auth;
    if (!auth) {
      return thunkAPI.rejectWithValue(UNAUTHENTICATED);
    }
    const {
      user: { type: userType },
      token,
    } = auth;
    if (userType !== "ADMIN") return thunkAPI.rejectWithValue(UNAUTHORIZED);
    try {
      const params = {
        method: "POST",
        url: `${URL}`,
        headers: {
          token,
        },
        data: newRoom,
      };
      await axiosInstance.request(params);
      return "Success";
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const bookRoomById = createAsyncThunk<
  string,
  {
    userId: string;
    roomId: string;
    startDate: string;
    endDate: string;
    totalGuests: number;
  },
  { state: RootState }
>("room/bookRoomId", async (bookInfo, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState().auth;
    if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
    const {
      user: { type: userType },
      token,
    } = auth;

    const params = {
      method: "POST",
      url: `${URL_BOOKING}`,
      headers: {
        token,
      },
      data: bookInfo,
    };
    await axiosInstance.request(params);
    return `Room ${bookInfo.roomId} booked success`;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error);
  }
});

const updateRoomById = createAsyncThunk<string, IRoom, { state: RootState }>(
  "room/updateRoomById",
  async (roomDetail, thunkAPI) => {
    const { auth } = thunkAPI.getState().auth;
    if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);
    const {
      user: { type: userType },
      token,
    } = auth;
    if (userType !== "ADMIN") return thunkAPI.rejectWithValue(UNAUTHORIZED);
    const {
      id,
      imageList,
      name,
      homeType,
      roomType,
      totalBathrooms,
      totalBedrooms,
      totalOccupancy,
      address,
      sumary,
      hasTV,
      hasAirCon,
      hasInternet,
      hasKitchen,
      price,
      publisedAt,
      longitude,
      latitude,
      locationId,
      reservationId,
      userId,
    } = roomDetail;
    try {
      const params = {
        method: "PUT",
        url: `${URL}/${id}`,
        headers: {
          token,
        },
        data: {
          id,
          imageList,
          name,
          homeType,
          roomType,
          totalBathrooms,
          totalBedrooms,
          totalOccupancy,
          address,
          sumary,
          hasTV,
          hasAirCon,
          hasInternet,
          hasKitchen,
          price,
          publisedAt,
          longitude,
          latitude,
          locationId,
          reservationId,
          userId,
        },
      };
      await axiosInstance.request(params);
      return "success update room";
    } catch (error: any) {
      return thunkAPI.rejectWithValue("update room false");
    }
  }
);
const deleteRoomById = createAsyncThunk<string, string, { state: RootState }>(
  "room/deleteRoomById",
  async (roomId, thunkAPI) => {
    const { auth } = thunkAPI.getState().auth;

    if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

    const {
      user: { type: userType },
      token,
    } = auth;

    if (userType !== "ADMIN") return thunkAPI.rejectWithValue(UNAUTHORIZED);
    try {
      const params = {
        method: "DELETE",
        url: `${URL}/${roomId}`,
        headers: {
          token,
        },
      };
      await axiosInstance.request(params);
      return "Delete Succes";
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Delete Room Fail");
    }
  }
);

const uploadRoomImageById = createAsyncThunk<
  string,
  { id: string; image: FormData },
  {
    state: RootState;
  }
>("room/uploadRoomImageById", async (room, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState().auth;
    const { id, image } = room;

    if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

    const {
      user: { type: userType },
      token,
    } = auth;

    if (userType !== "ADMIN") return thunkAPI.rejectWithValue(UNAUTHORIZED);

    const params = {
      method: "POST",
      url: `${URL}/upload-image/${id}`,
      headers: {
        token: token,
        "Content-Type": "multipart/form-data",
      },
      data: image,
    };

    await axiosInstance.request(params);

    return "Upload Room Image Successful";
  } catch (error) {
    return thunkAPI.rejectWithValue("Upload Room Image failed");
  }
});

export {
  getRoomListByLocationId,
  getAllRoom,
  getRoomDetailById,
  bookRoomById,
  createNewRoom,
  updateRoomById,
  deleteRoomById,
  uploadRoomImageById,
};
