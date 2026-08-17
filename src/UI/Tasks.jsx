import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import ContentContainer from "../components/content/features/ContentContainer";
import styles from "../cssModules/tasks.module.css";

const Tasks = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortType, setSortType] = useState("Latest");
	const tasks = useSelector((state) => state.tasks.tasks);

	// 🔍 للتصحيح
	console.log("📦 All tasks from Redux:", tasks);
	console.log("🔍 Search term in Tasks:", searchTerm);
	console.log("📊 Sort type in Tasks:", sortType);

	// ===== 1. فلترة المهام حسب البحث =====
	const filteredTasks = useMemo(() => {
		// لو مفيش مهام
		if (!tasks || tasks.length === 0) {
			console.log("❌ No tasks found");
			return [];
		}

		// لو مفيش كلمة بحث، أرجع كل المهام
		if (!searchTerm.trim()) {
			console.log("📋 No search term, returning all tasks");
			return tasks;
		}

		// فلترة المهام
		const filtered = tasks.filter((task) => {
			const taskTitle = task.title?.toLowerCase() || "";
			const search = searchTerm.toLowerCase().trim();
			return taskTitle.includes(search);
		});

		console.log("🔍 Filtered tasks:", filtered);
		return filtered;
	}, [tasks, searchTerm]);

	// ===== 2. ترتيب المهام =====
	const sortedTasks = useMemo(() => {
		if (!filteredTasks || filteredTasks.length === 0) {
			console.log("❌ No filtered tasks to sort");
			return [];
		}

		// نسخ المصفوفة
		const tasksToSort = [...filteredTasks];

		// الترتيب حسب النوع
		switch (sortType) {
			case "Latest":
				tasksToSort.sort((a, b) => b.id - a.id);
				console.log("📊 Sorted by Latest");
				break;
			case "Oldest":
				tasksToSort.sort((a, b) => a.id - b.id);
				console.log("📊 Sorted by Oldest");
				break;
			case "favourites":
				tasksToSort.sort((a, b) => (b.fav ? 1 : 0) - (a.fav ? 1 : 0));
				console.log("📊 Sorted by Favourites");
				break;
			default:
				console.log("📊 No valid sort type");
				break;
		}

		console.log("📊 Sorted tasks:", tasksToSort);
		return tasksToSort;
	}, [filteredTasks, sortType]);

	// 🔍 للتأكد من الـ sortedTasks
	console.log("✅ Final sortedTasks being passed:", sortedTasks);

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
				<ContentContainer tasks={sortedTasks} />
			</div>
		</div>
	);
};

export default Tasks;
