import { useRef, useEffect } from "react";
import styles from "../../cssModules/content.module.css";
const Content = () => {
	const reatchDel = () => {
		const del = document.querySelectorAll(".del");
		del.forEach((e) => {
			e.onclick = function () {
				e.parentElement.remove();
				localStorage.clear();
				localStorage.setItem("tasks", taskContainerRef.current.innerHTML);
			};
		});
	};

	const taskContainerRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		if (localStorage.getItem("tasks")) {
			taskContainerRef.current.innerHTML = localStorage.getItem("tasks");
			reatchDel();
		}
	}, []);

	const subButton = (e) => {
		e.preventDefault();
		if (inputRef.current.value) {
			const cliked = document.createElement("div");
			cliked.className = "cliked";
			cliked.innerHTML = inputRef.current.value;

			const del = document.createElement("button");
			del.className = "del";
			del.innerText = "del";
			del.onclick = function (e) {
				e.preventDefault();
				del.parentElement.remove();
				localStorage.clear();
				localStorage.setItem("tasks", taskContainerRef.current.innerHTML);
			};

			cliked.appendChild(del);
			taskContainerRef.current.appendChild(cliked);
			localStorage.setItem("tasks", taskContainerRef.current.innerHTML);
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
