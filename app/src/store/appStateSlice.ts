import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { AuthData } from "../model/User";

type AppState = { currentUser: AuthData | null };
const initialState: AppState = { currentUser: null };

const AppStateSlice: Slice<AppState> = createSlice({
  name: "appState",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<AuthData>) {
      state.currentUser = action.payload
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

export const selectCurrentUser = (state: AppState) => state.currentUser;

export default AppStateSlice.reducer;
