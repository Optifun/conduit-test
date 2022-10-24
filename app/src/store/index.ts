import { configureStore } from "@reduxjs/toolkit";

import articles from "./articleSlice";
import profile from "./profileSlice";
import tags from "./tagsSlice";
import { userService } from "../services/userService";

const store = configureStore({
  reducer: { articles, profile, tags,
    [userService.reducerPath]: userService.reducer,
  },
  middleware: getDefaultMiddleware => {return getDefaultMiddleware().concat(userService.middleware)},
  devTools: true,
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
