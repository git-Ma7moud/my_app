import { FaSearch } from "react-icons/fa";
import styles from "../../cssModules/header.module.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";



const Header = () => {
	const [, setSearchParams] = useSearchParams()
	const [isON, setIsOn] = useState(false);
	const [isONFav, setIsOnFav] = useState(false);

	const handelSort = () => {
		setIsOn((prev) => !prev);
		if (isON) {
			setSearchParams((prev) => {
				prev.set("d", "Latest")
				return prev;
			})
		}

		else {
			setSearchParams((prev) => {
				prev.set("d", "Oldest")
				return prev
			})
		}

	}

	const favHandel = (ele) => {
		if (isONFav) {
			setIsOnFav((prev) => !prev)
			setSearchParams((prev) => {
				prev.set("f", "fav")
				return prev;
			})
		}
		else {
			setIsOnFav((prev) => !prev)
			setSearchParams((prev) => {
				prev.delete("f")
				return prev
			})
		}
	}

	const selectionHandel = (ele) => {

		if (ele === "in progress") {
			setSearchParams((prev) => {
				prev.set("s", "inprog")
				return prev;
			})
		}
		else if (ele === "finished!") {
			setSearchParams((prev) => {
				prev.set("s", "finished!")
				return prev;
			})
		}
		else if (ele === "later...") {
			setSearchParams((prev) => {
				prev.set("s", "later...")
				return prev;
			})
		}
		else if (ele === "...") {
			setSearchParams((prev) => {
				prev.delete("s")
				prev.delete("f")
				return prev;
			})
		}
	}
	return (
		<ul className={styles.header_container}>
			<li className={styles.search_bar}>
				<FaSearch className={styles.icon} />
				<input
					type='text'
					className={styles.search_input}
					placeholder='Search tasks...'
					onChange={(e) => {
						setSearchParams({ t: e.target.value })
					}}
				/>
			</li>

			<li className={styles.header_select_wrapper}>
				<button
					className={styles.header_sort_date}
					onClick={() => {
						handelSort()
					}}
				>
					NOT THERE YET !
				</button>
				<button
					className={styles.header_sort_fav}
					onClick={() => {
						favHandel()
					}}
				>
					{isONFav ? "❤️" : "🤍"}
				</button>
				<select
					className={styles.header_select}
					onChange={(e) => {
						selectionHandel(e.target.value);
					}}>
					<option value='...'> ....</option>
					{/* <option value='favourites'>⭐ Favourites</option> */}
					<option value='in progress'>in progress</option>
					<option value='finished!'>✅ finished!</option>
					<option value='later...'>⏰ later...</option>
				</select>
			</li>
		</ul>
	);
};

export default Header;







