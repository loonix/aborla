import { LocationDetails } from './location.model';

export interface Item {
  typeOfRequest: TypeOfRequest;
  images: string[];
  description: string;
  title: string;
  adPackage: string;
  categoryId: string;
  id: string;
  expirationDate: Date;
  username?: string;
  location: LocationDetails;
  userId: string;
}


export enum TypeOfRequest {
  Request = 1,
  Trade = 2,
  Offer = 3,
}

