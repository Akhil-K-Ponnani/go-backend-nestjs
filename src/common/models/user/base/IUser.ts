export interface IUser {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  displayImage?: string;
  status: string;
  createdAt?: number;
  updatedAt?: number;
  deletedAt?: number;
}
