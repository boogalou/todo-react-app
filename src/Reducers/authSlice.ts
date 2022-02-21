import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseAuthData, UserAuthData } from '../types/authResponse.interface';

interface AuthState {
  user: UserAuthData;
  isAuth: boolean;
  isFetch: boolean

}

const initialState: AuthState = {
  user: {
    _id: '',
    _name: '',
    _email: '',
    isActivated: false,
  },
  isFetch: false,
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
    },

  dataFetching(state) {
      state.isFetch = !state.isFetch;
  },

  }
});

export const { setUser, setAuth, dataFetching } = authSlice.actions;
export default authSlice.reducer;
