import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    // state's name
    name: "user",
    // init state
    initialState: {
      email: null,
      nickname : null,
    },
    // reducer
    reducers: {
        login: (state, action) => {
          state.email = action.payload.email
          state.nickname = action.payload.nickname
        },
        logout : (state) => {
          state.email = null
          state.nickname = null
        }

    },
});
export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;