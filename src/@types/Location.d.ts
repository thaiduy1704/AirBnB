import { IRoom } from "./Room";

export interface ILocation {
  deleteAt: boolean;
  id: string;
  name: string;
  province: string;
  country: string;
  modifiedDate: Date;
  roomId: IRoom;
  image: string;
}
