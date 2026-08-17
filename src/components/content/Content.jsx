import styles from "../../cssModules/content.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../RTK/TasksSlice";
import { useState } from "react";
import ContentContainer from "./features/ContentContainer";

const Content = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");
	const tasks = useSelector((state) => state.tasks.tasks);

	const handleAddTask = (e) => {
		e.preventDefault(); // ← أهم شيء: منع إعادة تحميل الصفحة
		if (!inputValue.trim()) {
			alert("Please enter a task!"); // ← تنبيه لو الحقل فارغ
			return;
		}
		dispatch(addTask(inputValue));
		setInputValue(""); // ← تفريغ الحقل بعد الإضافة
		// اختياري: لو عايز تروح لصفحة المهام بعد الإضافة
		// navigate("/tasks");
	};

	return (
		<div className={styles.content_container}>
			<h2 className={styles.add_task_title}>✨ Add New Task</h2>

			<form
				onSubmit={handleAddTask}
				className={styles.add_task_form}>
				<input
					type='text'
					className={styles.add_task_input}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Write your task here...'
					autoFocus
				/>
				<button
					type='submit'
					className={styles.add_task_submit}>
					➕ Add Task
				</button>
			</form>

			{/* عرض المهام في صفحة الإضافة */}
			<div className={styles.preview_section}>
				<h3 className={styles.preview_title}>📋 Your Tasks</h3>
				<ContentContainer tasks={tasks} />
			</div>
		</div>
	);
};

export default Content;
