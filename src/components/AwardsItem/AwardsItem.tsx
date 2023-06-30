import React from 'react';

import styles from './AwardsItem.module.scss';

import { AiFillLock } from 'react-icons/ai';
import steveTemp from 'assets/steve.png';

export const AwardsItem = () => {
	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<div className={styles.locked}>
					<span>
						<AiFillLock />
					</span>
					<p>Need to reach 5 lvl</p>
				</div>
				<img src={steveTemp} alt='steve' />
			</div>
			<div className={styles.description}>
				<h1>Steve</h1>
				<button disabled={true} className={styles.disabled}>
					Select
				</button>
			</div>
		</div>
	);
};
