import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    // state's name
    name: "user",
    // init state
    initialState: {
      nickname : null,
      accessToken : null
    },
    // reducer
    reducers: {
        login: (state, action) => {
          state.nickname = action.payload.nickname
          state.accessToken = action.payload.accessToken
        },
        refreshAccessToken: (state, action) => {
          state.accessToken = action.payload.accessToken
        },
        logout : (state) => {
          state.nickname = null
          state.accessToken = null
        }

    },
});
export const { login, refreshAccessToken, logout } = UserSlice.actions;
export default UserSlice.reducer;