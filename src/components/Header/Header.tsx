import styles from './Header.module.scss';

const navItems = ['Главная', 'О нас', 'Услуги', 'Портфолио', 'Контакты'];

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>CompanyName</div>
				<nav className={styles.nav}>
					<ul>
						{navItems.map((item) => (
							<li key={item}>
								<a href="#">{item}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
