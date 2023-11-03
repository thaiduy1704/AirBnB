import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../../../@types/Auth";
import { loginThunk, registerThunk } from "./AuthThunk";
import { error } from "console";

export interface IAuthState {
  isLoading: boolean;
  error: string;
  auth: IAuth | null;
  isAuthenticated: boolean;
  userType: "ADMIN" | "USER" | "OWNER" | "";
}

const initialState: IAuthState = {
  isLoading: false,
  error: "",
  isAuthenticated: false,
  auth: null,
  userType: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: IAuthState) => {
      state.isAuthenticated = false;
      state.userType = "";
      state.auth = null;
      localStorage.removeItem("userLogin");
    },
  },
  extraReducers(builder) {
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;

      if (payload.roleList) {
        const roles = payload.roleList;

        if (roles.includes("Admin")) {
          state.userType = "ADMIN";
        } else if (roles.includes("User")) {
          state.userType = "USER";
        } else if (roles.includes("Owner")) {
          state.userType = "OWNER";
        } else {
          state.userType = "";
        }
      }
      // state.auth = {
      //   message: "Login Succesfull",
      //   user: {
      //     name: payload.personName,
      //     address: payload.address,
      //     phone: payload.phoneNumber,
      //     type: state.userType,
      //   },
      // };
      state.auth = payload;
      if (state.auth && state.auth.user) {
        state.auth.user.type = state.userType;
      }
      state.error = "";
      console.log("auth slice", state.auth.user);
    });
    builder.addCase(loginThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.isAuthenticated = false;
        state.error = payload as string;
      }
    });

    builder.addCase(registerThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.auth = payload;
      state.error = "";
    });
    builder.addCase(registerThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.isAuthenticated = false;
        state.error = payload as string;
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
