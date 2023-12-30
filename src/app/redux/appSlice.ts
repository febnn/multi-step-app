import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Addon, Option } from "../types/types";

export interface AppState {
  name: string;
  email: string;
  phoneNumber: string;
  isMonthly: boolean;
  plan: Option;
  addons?: Addon[];
  userCreated: boolean;
}

const initialState: AppState = {
  name: "",
  email: "",
  phoneNumber: "",
  isMonthly: false,
  plan: {
    title: "Arcade",
    image: "icon-arcade.svg",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  addons: [],
  userCreated: false,
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
    userCreated: (state, action: PayloadAction<boolean>) => {
      state.userCreated = action.payload;
    },
    choosePlan: (state, action: PayloadAction<Option>) => {
      state.plan = action.payload;
    },
    changeMonthly: (state, action: PayloadAction<boolean>) => {
      state.isMonthly = action.payload;
    },
    addDeleteAddon: (state, action: PayloadAction<Addon>) => {
      if (state.addons) {
        const isInArray = state?.addons?.findIndex(
          (obj) => obj.id === action.payload.id
        );
        if (isInArray > -1) {
          state.addons.splice(isInArray, 1);
        } else {
          state.addons.push(action.payload);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeName,
  changeEmail,
  changeNumber,
  userCreated,
  choosePlan,
  changeMonthly,
  addDeleteAddon,
} = appSlice.actions;

export default appSlice.reducer;
