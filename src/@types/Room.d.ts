import { ILocation } from "./Location";
import { IImage } from "./Image";
import { IBooking } from "./Booking";
import { IUser } from "./User";
export interface IRoom {
  id: string;
  imageList: IImage[];
  name: string;
  homeType: string;
  roomType: string;
  totalOccupancy: interger;
  totalBedrooms: interger;
  totalBathrooms: interger;
  address: string;
  sumary: string;
  hasTV: boolean;
  hasKitchen: boolean;
  hasAirCon: boolean;
  hasInternet: boolean;
  price: float;
  publisedAt: Date;
  latitude: float;
  longitude: float;
  locationId: ILocation;
  reservationId: IBooking;
  userId: IUser;
}
