import Sidebar from "../components/sidebar/Sidebar";
import styles from "../cssModules/AddTask.module.css";
import Content from "../components/content/Content";
import Header from "../components/header/Header";

const AddTask = () => {
	// ✅ لو الـ Header محتاج دوال في صفحة الإضافة

	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.page_container}>
				<Header />
				<Content />
			</div>
		</div>
	);
};

export default AddTask;
