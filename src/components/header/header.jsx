import { FaBars, FaSearch } from "react-icons/fa";
import styles from "../../cssModules/header.module.css";
const Header = () => {
	return (
		<ul className={styles.header_container}>
			<li className={styles.sidebar_button}>
				<button
					style={{
						fontSize: "24px",
						background: "none",
						border: "none",
						cursor: "pointer",
					}}>
					<FaBars />
				</button>
			</li>
			<li>
				<input
					type='text'
					className={styles.search_input}
				/>
				<FaSearch className={styles.icon} />
			</li>
		</ul>
	);
};

export default Header;
