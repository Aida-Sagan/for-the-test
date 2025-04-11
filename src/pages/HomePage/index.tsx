import { FC } from 'react';
import s from './HomePage.module.scss';

import { Header } from '@/components/Header/Header.tsx';
import { CardList } from '@/components/CardList';
import { Works } from '@/components/Works';
import { Footer } from '@/components/Footer/Footer';

export const HomePage: FC = () => {
	return (
		<div className={s.wrap}>
			<Header />
			<CardList />
			<Works />
			<Footer />
		</div>
	);
};
