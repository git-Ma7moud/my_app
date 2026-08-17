import styles from "../../../cssModules/content.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fav, taskState } from "../../../RTK/TasksSlice";

const ContentContainer = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks.tasks);

	const handleFav = (taskId, value) => {
		dispatch(fav({ id: taskId, value }));
	};

	const handleTaskState = (taskId, value) => {
		dispatch(taskState({ id: taskId, value }));
	};

	const handleDeleteTask = (taskId) => {
		dispatch(deleteTask(taskId));
	};

	return (
		<div className={styles.tasks_container}>
			{tasks.map((task) => (
				<div
					key={task.id}
					className={styles.cliked}>
					{/* عنوان المهمة */}
					<span className={styles.task_title}>{task.title}</span>

					{/* الأزرار والإجراءات */}
					<div className={styles.task_actions}>
						{/* ❤️ زرار القلب */}
						<button
							className={`${styles.fav_btn} ${task.fav ? styles.fav_active : ""}`}
							onClick={() => handleFav(task.id, !task.fav)}>
							{task.fav ? "❤️" : "🤍"}
						</button>

						{/* الـ Select */}
						<select
							className={styles.task_select}
							value={task.stateOfTask}
							onChange={(e) => handleTaskState(task.id, e.target.value)}>
							<option value='in progress'>in progress</option>
							<option value='finished!'>✅ finished!</option>
							<option value='later...'>⏰ later...</option>
						</select>

						{/* زرار الحذف */}
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
