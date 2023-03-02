import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composedEnhancer);

export const persistor = persistStore(store);
