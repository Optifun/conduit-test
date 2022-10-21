import { AnyAction, createAsyncThunk, createSlice, PayloadAction, Slice, } from "@reduxjs/toolkit";
import { Article, Tag } from "../model/Article";
import { User } from "../model/User";
import { AsyncResult } from "../infrastructure/types";
import { Pause } from "../infrastructure/utils";

type ArticlesState = AsyncResult<string> & {
  list: Article[];
  filter: null | User | Tag;
};

const initialState: ArticlesState = {
  errors: [],
  filter: null,
  list: [],
  loading: false,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchAll",
  async function () {
    await Pause(800);
    return [
      {
        slug: "ASDW0",
        title: "ASDW",
        body: "ASDWWWWW",
        author: {
          username: "Authorrr",
          bio: "1234",
          image: "none",
          following: false,
        },
        createdAt: new Date(Date.now()),
        description: "ASDWewqe",
        favoritesCount: 1,
        updatedAt: new Date(Date.now()),
        tagList: [],
        favorited: false,
      },
      {
        slug: "ASDW1",
        title: "ASDW",
        body: "ASDWWWWW",
        author: {
          username: "Authorrr",
          bio: "1234",
          image: "none",
          following: false,
        },
        createdAt: new Date(Date.now()),
        description: "ASDWewqe",
        favoritesCount: 1,
        updatedAt: new Date(Date.now()),
        tagList: [],
        favorited: false,
      },
      {
        slug: "ASDW2",
        title: "ASDW",
        body: "ASDWWWWW",
        author: {
          username: "Authorrr",
          bio: "1234",
          image: "none",
          following: false,
        },
        createdAt: new Date(Date.now()),
        description: "ASDWewqe",
        favoritesCount: 1,
        updatedAt: new Date(Date.now()),
        tagList: [],
        favorited: false,
      },
    ];
  }
);

const ArticlesState: Slice<ArticlesState> = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.loading = true;
        state.errors = [];
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.errors.push(action.payload);
        state.loading = false;
      });
  },
});

const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

export default ArticlesState.reducer;
