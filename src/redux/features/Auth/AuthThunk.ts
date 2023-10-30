import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "../../../utils/axios";

import { IAuth } from "../../../@types/Auth";

const URL = "/api/v1/Auth";

export interface ILogin {
  personName: string;
  address: string;
  profileImage: string;
  description: string;
  isMarried: boolean;
  phoneNumber: string;
  roleList: string[];
}

const loginThunk = createAsyncThunk<
  IAuth,
  {
    email: string;
    password: string;
  }
>("auth/login", async (user, thunkAPI) => {
  try {
    const params = {
      method: "POST",
      url: `${process.env.REACT_APP_API_DOMAIN}${URL}/login`,
      data: {
        email: user.email,
        password: user.password,
      },
    };

    const response = await axiosInstance.request(params);
    console.log(response);
    console.log("auththunk", response.data);

    const token = {
      email: user.email,
      password: user.password,
      token: response.data.token,
      type: response.data.roleList,
    };
    localStorage.setItem("userLogin", JSON.stringify(token));
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export interface IRegister {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: string;
  address: string;
}

const registerThunk = createAsyncThunk<IAuth, IRegister>(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      // console.log(test);

      const params = {
        method: "POST",
        url: `${URL}/register`,
        data: {
          personName: user.name,
          email: user.email,
          Password: user.password,
          confirmPassword: user.password,

          phone: user.phone,
          birthday: user.birthday,
          gender: user.gender === "Man" ? true : false,
          address: user.address,
        },
      };

      const response = await axiosInstance.request(params);
      thunkAPI.dispatch(
        loginThunk({
          email: user.email,
          password: user.password,
        })
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export { loginThunk, registerThunk };
