import styles from "../../../cssModules/content.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../../RTK/TasksSlice";

const ContentContainer = () => {
	const dispatch = useDispatch();

	const tasks = useSelector((state) => state.tasks.tasks);
	const handleDeleteTask = (taskId) => {
		dispatch(deleteTask(taskId)); // ← إرسال ID المهمة
	};
	return (
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
					</span>
				</div>
			))}
		</div>
	);
};

export default ContentContainer;
