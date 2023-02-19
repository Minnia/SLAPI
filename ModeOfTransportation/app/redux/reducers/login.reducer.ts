import {createSlice} from '@reduxjs/toolkit';

type User = {
  firstName: string;
  lastName: string;
  age: string | number;
  id: string;
};
export interface InitialState {
  isLoggedIn: boolean;
  loading: boolean;
  userToken: string;
  error: boolean;
  success: boolean;
  userInfo: User;
}

const initialState: InitialState = {
  isLoggedIn: false,
  loading: false,
  userToken: '',
  error: false,
  success: false,
  userInfo: {
    firstName: '',
    lastName: '',
    age: '' || 0,
    id: '',
  },
};

export const loginUser = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.loading = action.payload.loading;
      state.userToken = action.payload.userToken;
      state.error = action.payload.error;
      state.success = action.payload.success;
      state.userInfo = action.payload.userInfo;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.error = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.loading = false;
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const {login, logout} = loginUser.actions;

export const selectIsLoggdIn = (state: any) => state.loginUser.isLoggedIn;
export const selectUserInfo = (state: any) => state.loginUser.userInfo;

export default loginUser.reducer;
