import { Timestamp } from '@angular/fire/firestore';
import { LocationDetails, LocationModel } from './location.model';

export interface Item {
  timestamp: Timestamp;
  typeOfRequest: TypeOfRequest;
  images: string[];
  description: string;
  title: string;
  adPackage: AdPackages;
  categoryId: string;
  category: string;
  id: string;
  expirationDate: DateExpiration;
  location: LocationDetails;
  userId: string;
}

export enum AdPackages {
  SiteOnly, AppOnly, SiteAndApp, None
}

export enum DateExpiration {
  THREEDAYS, SEVENDAYS,
}

// create a class from Item interface
export class ItemModel implements Item {
  timestamp: Timestamp;
  typeOfRequest: TypeOfRequest;
  images: string[];
  description: string;
  title: string;
  adPackage: AdPackages;
  category: string;
  categoryId: string;
  id: string;
  expirationDate: DateExpiration;
  location: LocationModel;
  userId: string;

  constructor() {
    this.timestamp = Timestamp.now();
    this.typeOfRequest = TypeOfRequest.Request;
    this.images = [];
    this.description = '';
    this.title = '';
    this.adPackage = AdPackages.None;
    this.categoryId = '';
    this.category = '';
    this.id = '';
    this.expirationDate = DateExpiration.THREEDAYS;
    this.location = new LocationModel();
    this.userId = '';
  }

}

export enum TypeOfRequest {
  Request = 1,
  Trade = 2,
  Offer = 3,
}

