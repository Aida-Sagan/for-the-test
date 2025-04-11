import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import s from './MainLayout.module.scss';
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface MainLayoutProps {
	classNames?: {
		root?: string;
		body?: string;
		footer?: string;
	};
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	classNames,
}) => {
	return (
		<div className={clsx(s.wrap, classNames?.root)}>
			<div className={clsx(s.wrap__body, classNames?.body)}>
				<ErrorBoundary>{children}</ErrorBoundary>
			</div>
		</div>
	);
};
