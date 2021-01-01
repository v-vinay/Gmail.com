import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
      user: null
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: state => {
      state.user = null;
    },
  },
});

export const { logIn, logOut } = UserSlice.actions;

export const selectUser = (state) => state.user.user

export default UserSlice.reducer;
