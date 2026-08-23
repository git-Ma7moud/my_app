import { FaSearch } from "react-icons/fa";
import styles from "../../cssModules/header.module.css";

// ✅ تأكد من أسماء الـ props
const Header = () => {
	return (
		<ul className={styles.header_container}>
			<li className={styles.search_bar}>
				<FaSearch className={styles.icon} />
				<input
					type='text'
					className={styles.search_input}
					placeholder='Search tasks...'
					onChange={(e) => {
						console.log("🔍 Searching:", e.target.value);
					}}
				/>
			</li>

			<li className={styles.header_select_wrapper}>
				<select
					className={styles.header_select}
					onChange={(e) => {
						console.log("📊 Sorting:", e.target.value);
					}}>
					<option value='favourites'>⭐ Favourites</option>
					<option value='Oldest'>📅 Oldest</option>
					<option value='Latest'>🕐 Latest</option>
				</select>
			</li>
		</ul>
	);
};

export default Header;
