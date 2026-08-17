import styles from "../../cssModules/content.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../RTK/TasksSlice";
import { useState } from "react";
import ContentContainer from "./features/ContentContainer";

const Content = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");

	const handleAddTask = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;
		dispatch(addTask(inputValue)); // ← إرسال نص المهمة
		setInputValue("");
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
			<ContentContainer></ContentContainer>
		</div>
	);
};

export default Content;
