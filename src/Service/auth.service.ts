import axios, { AxiosResponse } from 'axios';
import { apiService } from '../api';
import { ResponseAuthData } from '../types/authResponse.interface';
import { LoginRequest, RegistrationRequest } from '../types/authRequest.interface';

class AuthService {
  public async login({email, password}: LoginRequest): Promise<AxiosResponse<ResponseAuthData>> {
    return apiService.post<ResponseAuthData>(`/login`, {email, password});
  }

  public async registration({name, email, password}: RegistrationRequest): Promise<AxiosResponse<ResponseAuthData>> {
    return apiService.post<ResponseAuthData>(
      `/registration`, {name, email, password});
  }

  public async logout(): Promise<void> {
    return apiService.post(`/logout`);
  }

  public async checkAuth() {
    const response = await axios.get<ResponseAuthData>(`http://localhost:7000/api/refresh`, {
      withCredentials: true
    });
    return response
  }

}

const authService = new AuthService();
export {authService}
