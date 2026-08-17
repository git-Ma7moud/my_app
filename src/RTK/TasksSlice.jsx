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
				favourite: false,
				stateOfTask: "in progress",
			};
			state.tasks.push(newTask);
		},
		deleteTask: (state, action) => {
			// action.payload = ID المهمة المطلوب حذفها
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		fav: (state, action) => {
			const { id, value } = action.payload;
			state.tasks = state.tasks.map((task) => {
				if (task.id === id) {
					return { ...task, fav: value };
				}
				return task;
			});
		},
		taskState: (state, action) => {
			const { id, value } = action.payload;
			state.tasks = state.tasks.map((task) => {
				if (task.id === id) {
					return { ...task, stateOfTask: value };
				}
				return task;
			});
		},
	},
});

export const { addTask, deleteTask, fav, taskState } = TasksSlice.actions;
export default TasksSlice.reducer;
