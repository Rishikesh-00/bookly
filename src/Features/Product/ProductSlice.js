import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FetchProduct } from "./ProductAPI"

const initialState={
    status:'idle',
    products:[],
    product:[],
    similarproduct:[],
    totalitems:0
}
export const FetchProductAsync= createAsyncThunk("Product/FetchProduct",async({sort,pagination})=>
{
    console.log("working");
    const response = await FetchProduct(sort,pagination);
    return response.data;
})

export const Productslice=createSlice({
    name:"Product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(FetchProductAsync.pending,(state)=>{
            state.status='pending';
        })
        .addCase(FetchProductAsync.fulfilled,(state,actions)=>{
            state.status='idle';
            console.log(actions.payload)
            state.products=actions.payload.products;
            state.totalitems=actions.payload.totalitems;
        })
    }
});
export const  TotalProducts=(state)=>state.Product.products;
export const  TotalItems=(state)=>state.Product.totalitems;

export default Productslice.reducer;