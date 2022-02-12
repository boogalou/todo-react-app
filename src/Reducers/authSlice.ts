import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseAuthData, UserAuthData } from '../types/auth.interface';

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
    setUser(state, {payload}) {
      state.user = { ...payload.user };
    },

    setAuth(state) {
      state.isAuth = !state.isAuth
    }


  }
});

export const { setUser, setAuth } = authSlice.actions;
export default authSlice.reducer;
