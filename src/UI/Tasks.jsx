import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import ContentContainer from "../components/content/features/ContentContainer";
import styles from "../cssModules/tasks.module.css";

const Tasks = () => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.page_container}>
				<Header />
				<ContentContainer />
			</div>
		</div>
	);
};

export default Tasks;
