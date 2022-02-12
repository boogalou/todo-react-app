export interface ResponseAuthData {
  accessToken: string;
  refreshToken: string;
  user: UserAuthData;
}

export type  UserAuthData = {
  id: string;
  name: string;
  email: string;
  isActivated: boolean;
}