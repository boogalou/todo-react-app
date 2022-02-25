import { createAction } from '@reduxjs/toolkit';
import { LoginRequest, RegistrationRequest } from '../types/authRequest.interface';
import { CompletedRequest } from '../types/completedRequest.interface';
import { TodoCreate } from '../types/todo.create.interface';

export const registrationRequest = createAction<RegistrationRequest>('registrationRequest');
export const loginRequest = createAction<LoginRequest>('loginRequest');
export const logoutRequest = createAction('logoutRequest');
export const checkAuth = createAction('checkAuthRequest');
export const todoCreate = createAction<TodoCreate>('todoCreateRequest');
export const getAllTodos = createAction<{data: { userId: string; }}>('getAllTodosRequest')
export const todoCompleted = createAction<CompletedRequest>('todoCompletedRequest');
export const todoDelete = createAction<{data: { _id: string }}>('todoDeleteRequest');