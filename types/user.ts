export interface UserType {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  bio?: string;
  avatarUrl?: string;
  firmCode?: string;
}

export interface RegisterDataType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password: string;
  firmCode?: string;
  termsAccepted?: boolean;
  
}

export type LoginDataType = {
  email: string;
  password: string;
};
