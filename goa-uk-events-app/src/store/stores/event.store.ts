import { createSlice } from '@reduxjs/toolkit';
import { EventState } from '../types';

const initialState: EventState = {
  events: [],
  error: null,
  pending: false,
};

export const eventStore = createSlice({
  name: 'event',
  initialState,
  reducers: {
    fetchEventsRequest: (state) => {
      state.pending = true;
    },
    fetchEventsSuccess: (state, action) => {
      state.events = action.payload;
      state.pending = false;
    },
    fetchEventsFailure: (state) => {
      state.pending = false;
    },
  },
});

export const { fetchEventsRequest, fetchEventsSuccess, fetchEventsFailure } = eventStore.actions;
export default eventStore.reducer;
