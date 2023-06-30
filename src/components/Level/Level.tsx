import React, { FC, useState } from 'react';

import styles from './Level.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from 'features/store';
import { userState } from 'features/user/userSlice';

export const Level: FC = () => {
	const { user } = useSelector<RootState, userState>(state => state.user);

	const [currentLevel] = useState<number | undefined>(user?.currentLevel);

	return (
		<div className={styles.level}>
			<p>
				{user?.currentLevel} <span>lvl</span>
			</p>

			<div className={styles.progress}>
				<div
					style={{ width: `${user?.experience}%` }}
					className={styles.activeProgress}
				></div>
			</div>

			<p>
				{typeof currentLevel === 'number' && currentLevel + 1} <span>lvl</span>
			</p>

			<p className={styles.exp}>{user?.experience}/100</p>
		</div>
	);
};
