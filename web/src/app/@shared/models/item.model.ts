import { LocationDetails, LocationModel } from './location.model';

export interface Item {
  typeOfRequest: TypeOfRequest;
  images: string[];
  description: string;
  title: string;
  adPackage: string;
  categoryId: string;
  category: string;
  id: string;
  expirationDate: Date;
  username?: string;
  location: LocationDetails;
  userId: string;
}

// create a class from Item interface
export class ItemModel implements Item {
  typeOfRequest: TypeOfRequest;
  images: string[];
  description: string;
  title: string;
  adPackage: string;
  category: string;
  categoryId: string;
  id: string;
  expirationDate: Date;
  username?: string;
  location: LocationModel;
  userId: string;

  constructor() {
    this.typeOfRequest = TypeOfRequest.Request;
    this.images = [];
    this.description = '';
    this.title = '';
    this.adPackage = '';
    this.categoryId = '';
    this.category = '';
    this.id = '';
    this.expirationDate = new Date();
    this.username = '';
    this.location = new LocationModel();
    this.userId = '';
  }

}

export enum TypeOfRequest {
  Request = 1,
  Trade = 2,
  Offer = 3,
}

