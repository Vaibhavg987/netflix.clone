import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const subscribeSlice = createSlice({
  name: "subscribe",
  initialState: {
    subscribe: false,
  },
  reducers: {
    setSubscribe: (state, action) => {
      state.subscription = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const { setSubscribe } = subscribeSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSubscribe = (state) => state.subscribe.subscribe;

// export default { user: userSlice.reducer, subscribe: subscribeSlice.reducer };
export default userSlice.reducer;
