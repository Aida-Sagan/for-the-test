import { CardItem } from './CardItem';
import styles from './CardList.module.scss';

export const CardList = () => {
	const cards = [
		{
			title: 'Креативный дизайн',
			description:
				'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
			icon: '✨',
			category: 'Дизайн',
			rating: 4.9,
		},
		{
			title: 'Быстрая разработка',
			description:
				'Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.',
			icon: '🚀',
			category: 'Разработка',
			rating: 4.8,
		},
		{
			title: 'Мобильная оптимизация',
			description:
				'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
			icon: '📱',
			category: 'Оптимизация',
			rating: 4.7,
		},
	];

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Инновационные решения для вашего бизнеса</h2>
			<div className={styles.grid}>
				{cards.map((card) => (
					<CardItem key={card.title} {...card} />
				))}
			</div>
		</section>
	);
};
