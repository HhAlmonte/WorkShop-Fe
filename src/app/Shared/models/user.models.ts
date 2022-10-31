import { Address } from "./address.models";
import { BaseModel } from "./base.models";

export interface User extends BaseModel {
  address: Address;
  birthDate: Date;
  createdAt: Date;
  email: string;
  firstName: string;
  idNumber: string;
  lastName: string;
  phoneNumbers: string;
  status: number
  updatedAt: Date;
}