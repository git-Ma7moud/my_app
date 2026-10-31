import styles from "../../../cssModules/content.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fav, taskState } from "../../../RTK/TasksSlice";
import { useSearchParams } from "react-router-dom";

const ContentContainer = () => {
	const tasks = useSelector((state) => state.tasks.tasks);

	const [searchParams] = useSearchParams()
	console.log(...searchParams)

	const dispatch = useDispatch();

	const handleFav = (taskId, value) => {
		dispatch(fav({ id: taskId, value }));
	};

	const handleTaskState = (taskId, value) => {
		dispatch(taskState({ id: taskId, value }));
	};

	const filteredTasks = () => {
		let result = [...tasks];

		if (searchParams.get("t")) {
			result = result.filter(
				(task) => task.title === searchParams.get("t")
			);
		}

		if (searchParams.get("f") === "fav") {
			result = result.filter(
				(task) => task.fav === true
			);
		}
		if (searchParams.get("s") === "inprog") {
			result = result.filter(
				(task) => {
					return task.stateOfTask === "in progress"
				}
			);
		}
		if (searchParams.get("s") === "finished!") {
			result = result.filter(
				(task) => task.stateOfTask === "finished!"
			);
		}
		if (searchParams.get("s") === "later...") {
			result = result.filter(
				(task) => task.stateOfTask === "later..."
			);
		}

		if (searchParams.get("d") === "Latest") {
			result = result.sort((a, b) => b.id - a.id);
		}

		if (searchParams.get("d") === "Oldest") {
			result = result.sort((a, b) => a.id - b.id);
		}

		return result;
	};
	console.log(filteredTasks())

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
			{filteredTasks().map((task) => (
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
