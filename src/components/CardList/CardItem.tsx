import styles from './CardItem.module.scss';

interface CardItemProps {
	title: string;
	description: string;
	icon: string;
	category: string;
	rating: number;
}

export const CardItem = ({
	title,
	description,
	icon,
	category,
	rating,
}: CardItemProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.icon}>
				<span>{icon}</span>
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className={styles.meta}>
				<span className={styles.rating}>
					<span className={styles.star}>★</span> {rating.toFixed(1)}
				</span>

				<button className={styles.category}>{category}</button>
			</div>
		</div>
	);
};
