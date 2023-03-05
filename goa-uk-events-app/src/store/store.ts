import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './stores';

// Persist config
const encryptor = encryptTransform({
  secretKey: '2wd3KicKiF',
});
const persistConfig = {
  key: 'ZUWam',
  storage,
  transforms: [encryptor],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

const persistedStore = persistStore(store);

export { store, persistedStore, sagaMiddleware };
