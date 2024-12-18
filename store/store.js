import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import keycloakReducer from "@/store/slices/keycloakSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(
  userPersistConfig,
  userReducer,
);

const keycloakPersistConfig = {
   key: "kc",
   storage,
 };


const persistedKeycloakReducer = persistReducer(
  keycloakPersistConfig,
  keycloakReducer,
);

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: persistedUserReducer,
      keycloak: persistedKeycloakReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const makePersistor = (store) => persistStore(store);
