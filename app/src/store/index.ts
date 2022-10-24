import { configureStore } from "@reduxjs/toolkit";

import articleFeed from "./feedSlice";
import profile from "./profileSlice";
import tags from "./tagsSlice";
import appState from "./appStateSlice";
import { articleService } from '../services/articleService'
import { userService } from "../services/userService";

const store = configureStore({
  reducer: {
    articleFeed, profile, tags, appState,
    [userService.reducerPath]: userService.reducer,
    [articleService.reducerPath]: articleService.reducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat([
        userService.middleware,
        articleService.middleware
      ])
  },
  devTools: true,
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
