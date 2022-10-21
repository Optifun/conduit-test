import { createSlice, Slice } from "@reduxjs/toolkit";
import { Article, Tag } from "../model/Article";
import { User } from "../model/User";

type ArticlesState = {
  list: Article[];
  filter: null | User | Tag;
  loading: boolean;
};

const initialState: ArticlesState = {
  filter: null,
  list: [],
  loading: false,
};

const ArticlesState: Slice<ArticlesState> = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {},
});

export default ArticlesState.reducer;
