import { combineReducers } from 'redux';
import eventReducer from './event';

const rootReducer = combineReducers({
  event: eventReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

export default rootReducer;
