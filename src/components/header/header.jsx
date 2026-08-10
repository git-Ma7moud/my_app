import { FaSearch } from "react-icons/fa";
import styles from "../../cssModules/header.module.css";
const Header = () => {
	return (
		<ul className={styles.header_container}>
			<li></li>
			<li className={styles.search_bar}>
				<FaSearch className={styles.icon} />
				<input
					type='text'
					className={styles.search_input}
				/>
			</li>
		</ul>
	);
};

export default Header;
