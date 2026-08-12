import { useRef } from "react";
import styles from "../../cssModules/content.module.css";
const Content = () => {
	const inputRef = useRef(null);
	const taskContainerRef = useRef(null);
	const subButton = (e) => {
		e.preventDefault();
		if (inputRef.current.value) {
			const cliked = document.createElement("div");
			cliked.className = styles.cliked;
			cliked.innerHTML = inputRef.current.value;

			const del = document.createElement("button");
			del.className = styles.del;
			del.innerText = "del";
			del.onclick = function (e) {
				e.preventDefault();
				del.parentElement.remove();
			};

			cliked.appendChild(del);
			taskContainerRef.current.appendChild(cliked);
			// localStorage.setItem("a", taskContainerRef.current.innerHTML);
			inputRef.current.value = "";
		}
	};
	return (
		<div className={styles.content_container}>
			<form>
				<input
					type='text'
					ref={inputRef}
				/>
				<button
					type='submit'
					onClick={subButton}>
					Add Task
				</button>
			</form>
			<div
				className={styles.tasks_container}
				ref={taskContainerRef}></div>
		</div>
	);
};

export default Content;
