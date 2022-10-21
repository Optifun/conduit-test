import { createSlice, Slice } from "@reduxjs/toolkit";
import { Article, Tag } from "../model/Article";
import { User } from "../model/User";

type UserState = {
  list: Article[];
  filter: null | User | Tag;
  loading: boolean;
};

const initialState: UserState = {
  filter: null,
  list: [],
  loading: false,
};

const ProfileState: Slice<UserState> = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {},
});

export default ProfileState.reducer;
