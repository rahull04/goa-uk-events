import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import eventReducer from './event.reducer';
import commonReducer from './common.reducer';
import userReducer from './user.reducer';

const encryptor = encryptTransform({
  secretKey: '2wd3KicKiF',
});

const persistConfig = {
  key: 'ZUWam',
  storage,
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  event: eventReducer,
  common: commonReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type StoreState = ReturnType<typeof rootReducer>;
