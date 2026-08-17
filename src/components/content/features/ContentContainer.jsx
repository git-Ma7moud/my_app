import styles from "../../../cssModules/content.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, fav, taskState } from "../../../RTK/TasksSlice";

const ContentContainer = ({ tasks = [] }) => {
	const dispatch = useDispatch();

	const handleFav = (taskId, value) => {
		dispatch(fav({ id: taskId, value }));
	};

	const handleTaskState = (taskId, value) => {
		dispatch(taskState({ id: taskId, value }));
	};

	const handleDeleteTask = (taskId) => {
		dispatch(deleteTask(taskId));
	};

	// لو مفيش مهام
	if (!tasks || tasks.length === 0) {
		return (
			<div className={styles.tasks_container}>
				<div className={styles.empty_state}>
					<span>📭 No tasks found</span>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.tasks_container}>
			{tasks.map((task) => (
				<div
					key={task.id}
					className={styles.cliked}>
					<span className={styles.task_title}>{task.title}</span>
					<div className={styles.task_actions}>
						<button
							className={`${styles.fav_btn} ${task.fav ? styles.fav_active : ""}`}
							onClick={() => handleFav(task.id, !task.fav)}>
							{task.fav ? "❤️" : "🤍"}
						</button>

						<select
							className={styles.task_select}
							value={task.stateOfTask}
							onChange={(e) => handleTaskState(task.id, e.target.value)}>
							<option value='in progress'>in progress</option>
							<option value='finished!'>✅ finished!</option>
							<option value='later...'>⏰ later...</option>
						</select>

						<button
							className={styles.del}
							onClick={() => handleDeleteTask(task.id)}>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ContentContainer;
