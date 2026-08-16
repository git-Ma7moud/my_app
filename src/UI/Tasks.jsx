import ContentContainer from "../components/content/features/ContentContainer";
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
					<ContentContainer></ContentContainer>
				</div>
			</div>
		</>
	);
};

export default Tasks;
