import React from 'react';

import styles from './Checkbox.module.scss';

import { MdDone } from 'react-icons/md';

export const Checkbox = () => {
	return (
		<div className={styles.checkbox}>
			<span className={styles.icon}>
				<MdDone />
			</span>
		</div>
	);
};
