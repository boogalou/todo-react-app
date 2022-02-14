import { createAction } from '@reduxjs/toolkit';
import { LoginRequest, RegistrationRequest } from '../types/authRequest.interface';
import { TodoItem } from '../types/todo.interface';

export const registrationRequest = createAction<RegistrationRequest>('registrationRequest');
export const loginRequest = createAction<LoginRequest>('loginRequest');
export const logoutRequest = createAction('logoutRequest');
export const checkAuth = createAction('checkAuthRequest');
export const todoCreate = createAction<TodoItem>('todoCreate');