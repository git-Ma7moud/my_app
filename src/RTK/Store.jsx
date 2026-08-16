import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./TasksSlice";

// تحميل البيانات من localStorage
const loadState = () => {
	try {
		const serializedState = localStorage.getItem("tasks");
		if (serializedState === null) return undefined;
		return { tasks: JSON.parse(serializedState) };
	} catch (err) {
		return err;
	}
};

// حفظ البيانات في localStorage
const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("tasks", serializedState);
	} catch (err) {
		return err;
	}
};

const store = configureStore({
	reducer: {
		tasks: tasksReducer,
	},
	preloadedState: loadState(), // تحميل البيانات المخزنة
});

// حفظ البيانات عند أي تغيير
store.subscribe(() => {
	saveState(store.getState().tasks);
});

export default store;
