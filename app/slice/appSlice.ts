import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  name: string;
  email: string;
  phoneNumber: string;
  isMonthly: boolean;
  plan: string;
  addons: string[];
}

const initialState: AppState = {
  name: "",
  email: "",
  phoneNumber: "",

  isMonthly: true,
  plan: "Arcade",
  addons: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changeNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { changeName, changeEmail, changeNumber } = appSlice.actions;

export default appSlice.reducer;
