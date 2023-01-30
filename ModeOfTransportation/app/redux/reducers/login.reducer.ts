import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface InitialState {
  firstName: string;
}

const initialState: InitialState = {
  firstName: '',
};

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.firstName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {update} = login.actions;

export default login.reducer;
