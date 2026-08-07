import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./Cake";
import UserSlice from "./UserSlice";

const Store = configureStore({
	reducer: {
		cake: cakeSlice.reducer,
		User: UserSlice.reducer,
	},
});

export default Store;
