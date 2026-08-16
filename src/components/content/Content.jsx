import styles from "../../cssModules/content.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../../RTK/TasksSlice";
import { useState } from "react";

const Content = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks.tasks); // ← جلب المصفوفة
	const [inputValue, setInputValue] = useState("");

	const handleAddTask = () => {
		if (!inputValue.trim()) return;
		dispatch(addTask(inputValue)); // ← إرسال نص المهمة
		setInputValue("");
	};

	const handleDeleteTask = (taskId) => {
		dispatch(deleteTask(taskId)); // ← إرسال ID المهمة
	};
	return (
		<div className={styles.content_container}>
			<form>
				<input
					type='text'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='add task'
				/>
				<button
					onClick={handleAddTask}
					type='submit'>
					Add Task
				</button>
			</form>
			<div className={styles.tasks_container}>
				{tasks.map((task) => (
					<div key={task.id}>
						<span className={styles.cliked}>
							{task.title}
							<button
								className={styles.del}
								onClick={() => handleDeleteTask(task.id)}>
								Delete
							</button>
						</span>{" "}
						{/* ← عرض نص المهمة */}
					</div>
				))}
			</div>
		</div>
	);
};

export default Content;
