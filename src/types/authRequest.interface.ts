export interface RegistrationRequest extends LoginRequest{
  name: string;
  confirmPassword: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}