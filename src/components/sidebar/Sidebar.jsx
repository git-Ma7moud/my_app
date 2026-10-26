import styles from "../../cssModules/sidebar.module.css";
import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react";
import { Link } from "react-router-dom"; // ← استخدم Link بدل a

const Sidebar = () => {
	const [active, setActive] = useState(true);
	const sidebarRef = useRef(null);

	const toggleWidth = () => {
		setActive((prev) => !prev);
	};

	const hideSpanHandle = (state) => {
		if (sidebarRef.current) {
			const span = sidebarRef.current.querySelectorAll("ul li span");
			span.forEach((element) => {
				if (element) {
					element.style.display = state;
				}
			});
		}
	};

	const handleClick = () => {
		if (sidebarRef.current) {
			toggleWidth();
			if (active) {
				sidebarRef.current.style.width = "200px";
				hideSpanHandle("inline-block");
			} else {
				sidebarRef.current.style.width = "60px";
				hideSpanHandle("none");
			}
		}
	};

	return (
		<div
			className={styles.sidebar}
			ref={sidebarRef}>
			<ul className={styles.sidebar_ul}>
				<li
					className={styles.sidebar_button}
					onClick={handleClick}>
					<button>
						<FaBars />
					</button>
				</li>

				<Link to='/'>
					<li className={styles.home}>
						<i className='fa fa-home'></i>
						<span>home</span>
					</li>
				</Link>

				<Link to='/tasks'>
					<li className={styles.posts}>
						<i className='fa fa-file-alt'></i>
						<span>tasks</span>
					</li>
				</Link>

				<Link to='/add-task'>
					<li className={styles.settings}>
						<i className='fa fa-plus-circle'></i>
						<span>add task</span>
					</li>
				</Link>
				<Link
					className={styles.logout}
					to='/'>
					<li >
						<i className='fa fa-sign-out-alt'></i>
						<span>logout</span>
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default Sidebar;
