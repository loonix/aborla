export interface Item {
  typeOfRequest: TypeOfRequest;
  images: string[];
  location: string;
  description: string;
  title: string;
  adPackage: string;
  categoryId: string;
  id: string;
  expirationDate: Date;
}

export enum TypeOfRequest {
  Request = 1,
  Trade = 2,
  Offer = 3,
}
