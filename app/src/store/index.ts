import { configureStore, Store } from "@reduxjs/toolkit";

import articles from "./articleSlice";
import profile from "./profileSlice";
import tags from "./tagsSlice";

const store = configureStore({
  reducer: { articles, profile, tags },
  devTools: true,
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
