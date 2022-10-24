import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Tag } from "../model/Article";

type TagsState = { list: Tag[]; selectedTag: Tag | null };
const initialState: TagsState = { list: [], selectedTag: null };

const TagsState: Slice<TagsState> = createSlice({
  name: "tags",
  initialState: initialState,
  reducers: {
    setTags(state, action: PayloadAction<Tag[]>) {
      state.list = action.payload
    },
    selectTag(state, action: PayloadAction<Tag>) {
      if (state.list.indexOf(action.payload) != -1) {
        state.selectedTag = action.payload;
      }
    },
    unSelectTag(state, action: PayloadAction) {
      state.selectedTag = null;
    }
  },
});

export default TagsState.reducer;
