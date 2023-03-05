import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types/user.type';

const initialState: UserState = {
  isAuthenticated: false,
  isAuthenticating: false,
  profile: {},
};

export const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserRequest: (state) => {
      state.isAuthenticating = true;
    },
    loginUserSuccess: (state, action) => {
      state.profile = action.payload;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
    },
    loginUserFailure: (state) => {
      state.isAuthenticating = false;
    },
    logOutUserRequest: (state) => {
      state.profile = {};
      state.isAuthenticated = false;
    },
  },
});

export const { loginUserRequest, loginUserSuccess, loginUserFailure, logOutUserRequest } = userStore.actions;
export default userStore.reducer;
