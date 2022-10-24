import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Article } from "../model/Article";
import { ArticleAuthor } from "../model/User";

type UserProfile = {
  articles: Article[];
  user: ArticleAuthor | null
};

const initialState: UserProfile = {
  articles: [],
  user: null
};

const ProfileState: Slice<UserProfile> = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {
    setAuthor(state, action: PayloadAction<ArticleAuthor>) {
      state.user = action.payload;
    },
    setArticles(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
    },
    addArticles(state, action: PayloadAction<Article[]>) {
      state.articles.push(...action.payload);
    }
  },
});

export default ProfileState.reducer;
