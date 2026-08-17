import Content from "../components/content/Content";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "../cssModules/home.module.css";

const Tasks = () => {
	return (
		<>
			<div className={styles.container}>
				<Sidebar></Sidebar>
				<div className={styles.page_container}>
					<Header></Header>
					<Content></Content>
				</div>
			</div>
		</>
	);
};

export default Tasks;
