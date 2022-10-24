import { createSlice, PayloadAction, Slice, } from "@reduxjs/toolkit";
import { Article, Tag } from "../model/Article";
import { ArticleAuthor, User } from "../model/User";

type FeedState = {
  selectedArticle: Article | null;
  list: Article[];
  filter: null | User | Tag;
  filteredArticles: Article[]
};

const initialState: FeedState = {
  filter: null,
  list: [],
  filteredArticles: [],
  selectedArticle: null
};

const FeedSlice: Slice<FeedState> = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.list = action.payload;
    },
    filterByTag(state, action: PayloadAction<Tag>) {
      const tag = action.payload;
      state.filteredArticles = state.list.filter(a => a.tagList.includes(tag))
    },
    filterByUser(state, action: PayloadAction<ArticleAuthor>) {
      const user = action.payload;
      state.filteredArticles = state.list.filter(a => a.author == user)
    }
  },
});


export default FeedSlice.reducer;
