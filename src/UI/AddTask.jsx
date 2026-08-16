import Header from "../components/header/header";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "../cssModules/AddTask.module.css";
import Content from "../components/content/Content";
const AddTask = () => {
	return (
		<div className={styles.container}>
			<Sidebar></Sidebar>
			<div className={styles.page_container}>
				<Header></Header>
				<Content></Content>
			</div>
		</div>
	);
};

export default AddTask;
