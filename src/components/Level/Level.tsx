import React from 'react';

import styles from './Level.module.scss';

export const Level = () => {
	return (
		<div className={styles.level}>
			<p>
				1 <span>lvl</span>
			</p>

			<div className={styles.progress}>
				<div className={styles.activeProgress}></div>
			</div>

			<p>
				2 <span>lvl</span>
			</p>

			<p className={styles.exp}>10/100</p>
		</div>
	);
};
