import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Checkuser, CreateAccount, LoginUser, Updateuser } from "./AuthApi";

const initialState = {
  status: "idle",
  user: 'rihsi',
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

export const loggeduser = (state) => state.user;
export default AuthSlice.reducer