import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { dashboardReducer } from "./dashboard/slice.js";
import { ordersReducer } from "./orders/slice.js";
import { productsReducer } from "./products/slice.js";
import { suppliersReducer } from "./suppliers/slice.js";

const persistConfig = {
  key: "root-auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    dashboard: dashboardReducer,
    orders: ordersReducer,
    products: productsReducer,
    suppliers: suppliersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
