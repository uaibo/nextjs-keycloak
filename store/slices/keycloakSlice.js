import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  refreshToken: null
};

const keycloakSlice = createSlice({
  name: 'keycloak',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    clearKeycloak(state) {
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setToken, setRefreshToken, clearKeycloak } = keycloakSlice.actions;
export default keycloakSlice.reducer;

