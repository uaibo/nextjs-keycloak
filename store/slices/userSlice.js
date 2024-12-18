import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    clearUser: (state) => {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
