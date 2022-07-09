import { AccountType } from '../enums/account-type.enum';
import { Role } from '../enums/role.enum';

export interface User {
  uid: string;
  accountType: AccountType;
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  role: Role;
  isActive: boolean;
  password?: string;
  address: string;
  postcode: string;
  county: string;
  country: string;
  phoneNumber: string;
}
