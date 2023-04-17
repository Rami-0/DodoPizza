import { createSlice } from "@reduxjs/toolkit";
const AuthLocal = JSON.parse(localStorage.getItem('auth'))
export const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isAuth: AuthLocal,
  },
  reducers: {
    setAuth: (state, action)=>{
      state.isAuth = action.payload
    },
  },
});
