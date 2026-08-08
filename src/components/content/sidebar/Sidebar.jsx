// Sidebar.jsx
import styles from "../../../cssModules/sidebar.module.css"; // استيراد الـ CSS Module

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<ul className={styles.sidebar_ul}>
				<li className={styles.home}>
					<a href='#home-page'>
						<i className='fa fa-home'></i>
						<span>home</span>
					</a>
				</li>
				<li className={styles.clients}>
					<a href='#clients-page'>
						<i className='fa fa-users'></i>
						<span>clients</span>
					</a>
				</li>
				<li className={styles.products}>
					<a href='#products-page'>
						<i className='fa fa-shopping-cart'></i>
						<span>products</span>
					</a>
				</li>
				<li className={styles.charts}>
					<a href='#charts-page'>
						<i className='fa fa-chart-pie'></i>
						<span>charts</span>
					</a>
				</li>
				<li className={styles.posts}>
					<a href='#posts-page'>
						<i className='fa fa-file-alt'></i>
						<span>posts</span>
					</a>
				</li>
				<li className={styles.favourite}>
					<a href='#fav-page'>
						<i className='fa fa-star'></i>
						<span>favourites</span>
					</a>
				</li>
				<li className={styles.settings}>
					<a href='#settings-page'>
						<i className='fa fa-cog'></i>
						<span>settings</span>
					</a>
				</li>
				<li className={styles.logout}>
					<a href='#log-out-page'>
						<i className='fa fa-sign-out-alt'></i>
						<span>logout</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
