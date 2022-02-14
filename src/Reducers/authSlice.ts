import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseAuthData, UserAuthData } from '../types/authResponse.interface';

interface AuthState {
  user: UserAuthData;
  isAuth: boolean;

}

const initialState: AuthState = {
  user: {
    id: '',
    name: '',
    email: '',
    isActivated: false,
  },

  isAuth: false,
};

const authSlice = createSlice({
  name: 'authUser',
  initialState,

  reducers: {
    setUser(state, action: PayloadAction<ResponseAuthData>) {
      state.user = action.payload.user;
    },

    setAuth(state,  action : PayloadAction<boolean>) {
      state.isAuth = action.payload;
    }


  }
});

export const { setUser, setAuth } = authSlice.actions;
export default authSlice.reducer;
