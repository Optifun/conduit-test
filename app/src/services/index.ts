import { configureStore, } from "@reduxjs/toolkit";

import { userService } from './userService'

const store = configureStore({
  reducer: {
    [userService.reducerPath]: userService.reducer,
  },
  middleware: getDefaultMiddleware => {return getDefaultMiddleware().concat(userService.middleware)},
});

export default store;

export type ServicesState = ReturnType<typeof store.getState>;
export type ServicesDispatch = typeof store.dispatch;
