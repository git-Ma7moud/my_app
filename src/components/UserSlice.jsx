import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("UserSlice/fetchUsers", () => {
	return axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.data.map((user) => user.name));
});

const initialState = { loading: false, data: [], error: "" };

const UserSlice = createSlice({
	name: "UserSlice",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export default UserSlice;
