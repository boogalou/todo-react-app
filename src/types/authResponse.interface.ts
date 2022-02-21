export interface ResponseAuthData {
  accessToken: string;
  refreshToken: string;
  user: UserAuthData;
}

export type UserAuthData = {
  _id: string;
  _name: string;
  _email: string;
  isActivated: boolean;
}