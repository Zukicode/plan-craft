import { FC, useState } from 'react';

import styles from './Inbox.module.scss';
import { EmptyTasks } from 'components/EmptyTasks/EmptyTasks';

export const Inbox: FC = () => {
	const [isEmpty, setEmpty] = useState(true);

	return isEmpty ? (
		<EmptyTasks />
	) : (
		<div className={styles.inbox}>
			<div className={styles.header}>
				<h1>Inbox</h1>
			</div>

			<div className={styles.content}></div>
		</div>
	);
};
