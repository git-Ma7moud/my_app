import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [], // مصفوفة المهام
};

const TasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			const newTask = {
				id: Date.now(), // ID فريد
				title: action.payload, // نص المهمة
			};
			state.tasks.push(newTask);
		},
		deleteTask: (state, action) => {
			// action.payload = ID المهمة المطلوب حذفها
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
	},
});

export const { addTask, deleteTask } = TasksSlice.actions;
export default TasksSlice.reducer;
