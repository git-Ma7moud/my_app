import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "../cssModules/home.module.css";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.page_container}>
				<div className={styles.home_content}>
					<h1 className={styles.home_title}>📋 Welcome to Task Manager</h1>
					<p className={styles.home_subtitle}>
						Organize your tasks efficiently and boost your productivity!
					</p>
					<button
						className={styles.add_task_btn}
						onClick={() => navigate("/add-task")}>
						➕ Add New Task
					</button>

					<div className={styles.home_stats}>
						<div className={styles.stat_card}>
							<span className={styles.stat_number}>0</span>
							<span className={styles.stat_label}>Total Tasks</span>
						</div>
						<div className={styles.stat_card}>
							<span className={styles.stat_number}>0</span>
							<span className={styles.stat_label}>Completed</span>
						</div>
						<div className={styles.stat_card}>
							<span className={styles.stat_number}>0</span>
							<span className={styles.stat_label}>In Progress</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
