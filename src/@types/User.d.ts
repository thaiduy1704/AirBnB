export interface IUser {
  tickets: string[] | null;
  deleteAt: boolean;
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: string;
  address: string;
  type: "ADMIN" | "USER" | "OWNER" | "";
  __v: number;
  avatar?: string;
}
