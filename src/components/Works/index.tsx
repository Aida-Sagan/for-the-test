import styles from './Works.module.scss';
import { WorkCard } from './WorkCard';

const tabs = ['Главная', 'О нас', 'Услуги', 'Портфолио', 'Контакты'];

export const Works = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Наши работы</h2>
			<p className={styles.subtitle}>
				Ознакомьтесь с нашими лучшими проектами в различных категориях
			</p>

			<div className={styles.tabs}>
				{tabs.map((tab, idx) => (
					<button
						key={tab}
						className={`${styles.tab} ${idx === 0 ? styles.active : ''}`}>
						{tab}
					</button>
				))}
			</div>

			<div className={styles.grid}>
				{Array.from({ length: 6 }).map((_, i) => (
					<WorkCard key={i} index={i} />
				))}
			</div>
		</section>
	);
};
