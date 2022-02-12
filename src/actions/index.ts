import { createAction } from '@reduxjs/toolkit';
import { RegistrationData } from '../components/Auth/userAuth.interface';


export const asyncRequest = createAction<RegistrationData>('asyncRequest');