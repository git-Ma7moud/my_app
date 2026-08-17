import Sidebar from "../components/sidebar/Sidebar";
import styles from "../cssModules/AddTask.module.css";
import Content from "../components/content/Content";
import Header from "../components/header/Header";
import { useState } from "react"; // ← لازم تستورد useState

const AddTask = () => {
	// ✅ لو الـ Header محتاج دوال في صفحة الإضافة
	const [searchTerm, setSearchTerm] = useState("");
	const [sortType, setSortType] = useState("Latest");

	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.page_container}>
				<Header
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					sortType={sortType}
					setSortType={setSortType}
				/>
				<Content />
			</div>
		</div>
	);
};

export default AddTask;
