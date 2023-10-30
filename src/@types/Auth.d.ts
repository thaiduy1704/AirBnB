import { IUser } from "./User";

export interface IAuth {
  message: string;
  user: IUser;
  token: string;
  roleList: string[];
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: string;
  address: string;
  type?: "ADMIN" | "USER" | "OWNER";
}
