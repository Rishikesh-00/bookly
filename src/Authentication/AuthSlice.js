import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Checkuser, CreateAccount, Loginuser, UpdatePassword } from "./AuthApi";

const initialState = {
  status: "idle",
  user: null,
  error:null,
  userExist:false,
};
export const CreateAccountAsync = createAsyncThunk(
    "Auth/CreateAccount",
    async (userdata) => {
      const response = await CreateAccount(userdata);
      return response.data;
    }
  );

  export const LoginuserAsync = createAsyncThunk(
    "Auth/Loginuser",
    async (userdata) => {
      const response = await Loginuser(userdata);
      return response.data;
    }
  );
  export const CheckuserAsync = createAsyncThunk(
    "Auth/Checkuser",
    async (userdata) => {
      const response = await Checkuser(userdata);
      return response.data;
    }
  );
  export const UpdatePasswordAshync = createAsyncThunk(
    "Auth/UpdatePassword",
    async (userdata) => {
      const response = await UpdatePassword(userdata);
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
         .addCase(LoginuserAsync.pending,(state)=>{
          state.status="Pending";
         })
         .addCase(LoginuserAsync.fulfilled,(state,actions)=>{
          state.status='idle';
          state.user=actions.payload;
         })
         .addCase(LoginuserAsync.rejected,(state,actions)=>{
          state.status='rejected';
          state.error=actions.payload;
         })
         .addCase(CheckuserAsync.pending,(state)=>{
          state.status='pending';
         })
         .addCase(CheckuserAsync.fulfilled,(state)=>{
          state.status='idle';
          state.userExist=true;
         })
         .addCase(UpdatePasswordAshync.pending,(state)=>{
          state.status='pending';
         })
         .addCase(UpdatePasswordAshync.fulfilled,(state,actions)=>{
          state.status='idle';
          state.user=actions.payload;
         })
    }
})

export const loggeduser = (state) => state.Auth.user;
export default AuthSlice.reducer