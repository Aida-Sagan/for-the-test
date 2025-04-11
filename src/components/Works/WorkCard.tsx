import styles from './WorkCard.module.scss';

interface WorkCardProps {
	index: number;
}

export const WorkCard = ({ index }: WorkCardProps) => {
	return (
		<div className={styles.card}>
			<span className={styles.placeholder}>Проект {index + 1}</span>
			<div className={styles.overlay}>
				<h3>E-commerce платформа</h3>
				<p>Веб-платформа</p>
				<button>Подробнее</button>
			</div>
		</div>
	);
};
