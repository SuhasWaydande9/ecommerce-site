import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getDATA from "./reducers/getDATA";


const rootReducer = combineReducers({
	getDATA
})

const store = configureStore({
	reducer:rootReducer,
	devTools:true,
})


export default store;
