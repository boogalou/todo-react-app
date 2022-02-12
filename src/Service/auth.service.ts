import { AxiosResponse } from 'axios';
import { apiService } from '../api';
import { ResponseAuthData } from '../types/auth.interface';
import { RegistrationData } from '../components/Auth/userAuth.interface';

class AuthService {
  public async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<ResponseAuthData>> {
    return apiService.post<ResponseAuthData>(
      `/login`, {email, password});
  }

  public async registration({name, email, password}: RegistrationData): Promise<AxiosResponse<ResponseAuthData>> {
    return apiService.post<ResponseAuthData>(
      `/registration`, {name, email, password});
  }

  public async logout(): Promise<void> {
    return apiService.post(`/logout`);
  }

}

const authService = new AuthService();
export {authService}
