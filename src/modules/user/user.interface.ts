import { Types } from "mongoose";

// enum e nam dilam ata tar value dilam ata
export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
  GUIDE = "GUIDE",
}

export interface IAuthProvider {
  provider: 'goggle' | 'credentials';
  providerId: string;
}

export enum IsActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface Iuser {
  name : string;
  email : string;
  password : string;
  phone?: string;
  picture?: string;
  adress?: string;
  isDeleted?: string;
  isActive?: IsActive;
  isVerified?: string;
  role: Role;
  // this authprovider might be multiple, from googgle, gmail login
  auths: IAuthProvider[];
  // user might have multiple bookings (booking id represent that booking)
  bookings?: Types.ObjectId[];
  guide?: Types.ObjectId[];
}
