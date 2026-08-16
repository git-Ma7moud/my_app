import Sidebar from "../components/sidebar/Sidebar";
import styles from "../cssModules/AddTask.module.css";
import Content from "../components/content/Content";
const AddTask = () => {
	return (
		<div className={styles.container}>
			<Sidebar></Sidebar>
			<div className={styles.page_container}>
				<Content></Content>
			</div>
		</div>
	);
};

export default AddTask;
