import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {CreateAccount } from "./AuthApi";

const initialState = {
  status: "idle",
  user: "rishi",
};
export const CreateAccountAsync = createAsyncThunk(
    "Auth/CreateAccount",
    async (userdata) => {
      const response = await CreateAccount(userdata);
      return response.data;
    }
  );
export const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(CreateAccountAsync.pending, (state)=>{
            state.status = "pending";
         })
         .addCase(CreateAccountAsync.fulfilled, (state, actions) =>{
            state.status = 'idle';
            state.user = actions.payload;
         })
    }
})

export const loggeduser = (state) => state.Auth.user;
export default AuthSlice.reducer