import { createSlice, Slice, PayloadAction } from "@reduxjs/toolkit";
import { Tag } from "../model/Article";

type TagsState = { list: Tag[]; loading: false };
const initialState: TagsState = { list: [], loading: false };

const TagsState: Slice<TagsState> = createSlice({
  name: "tags",
  initialState: initialState,
  reducers: {
    fetchTags(state, action: PayloadAction<void>) {},
  },
});

export default TagsState.reducer;
