import React from 'react';

import styles from './Task.module.scss';

import { Checkbox } from 'components/UI/Checkbox/Checkbox';

import { AiOutlineDelete } from 'react-icons/ai';

export const Task = () => {
	return (
		<div className={styles.task}>
			<p>Learn TypeScript</p>
			<div className={styles.buttons}>
				<Checkbox />
				<button className={styles.delete}>
					<AiOutlineDelete />
				</button>
			</div>
		</div>
	);
};
