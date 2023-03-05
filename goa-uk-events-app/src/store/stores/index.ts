import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user.store';
import eventReducer from './event.store';
import commonReducer from './common.store';

export const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  common: commonReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
