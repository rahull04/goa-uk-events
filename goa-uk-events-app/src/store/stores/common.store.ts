import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from '../types/common.type';

const initialState: CommonState = {
  isLoading: false,
};

export const commonStore = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoaderRequest: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoaderRequest } = commonStore.actions;
export default commonStore.reducer;
