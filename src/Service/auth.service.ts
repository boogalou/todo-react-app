import axios, { AxiosResponse } from 'axios';
import { apiService } from '../api';
import { ResponseAuthData } from '../types/authResponse.interface';
import { LoginRequest, RegistrationRequest } from '../types/authRequest.interface';

class AuthService {
  public async registration({name, email, password}: RegistrationRequest): Promise<AxiosResponse<ResponseAuthData>> {
    return apiService.post<ResponseAuthData>(
      `/registration`, {name, email, password});
  }

  public async login({email, password}: LoginRequest): Promise<AxiosResponse<ResponseAuthData>> {
    return apiService.post<ResponseAuthData>(`/login`, {email, password});
  }

  public async logout(): Promise<void> {
    return apiService.post(`/logout`);
  }

  public async checkAuth() {
    const response = await axios.get<ResponseAuthData>(`https://todo-back-app.herokuapp.com/api/refresh`, {
      withCredentials: true
    });
    return response
  }

}

const authService = new AuthService();
export {authService}
