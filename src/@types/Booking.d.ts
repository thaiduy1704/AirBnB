import { IRoom } from "./Room";
import { IUser } from "./User";

export interface IBooking {
  deleteAt: boolean;
  id: string;
  roomId: IRoom;
  userId: IUser | null;
  startDate: Date;
  endDate: Date;
  price: float;
  total: float;
}
