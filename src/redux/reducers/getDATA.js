import { createSlice } from "@reduxjs/toolkit";

const getDATA = createSlice({
	name:"getDATA",
	initialState:{
		Products:[]
	},
	reducers:{
		getProducts(state, action){
			state.Products = action.payload.data;
			return state;
	}}
})

export default getDATA.reducer;
export const { getProducts } = getDATA.actions;
