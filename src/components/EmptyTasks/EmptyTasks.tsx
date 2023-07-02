import styles from './EmptyTasks.module.scss';

import emptyImage from 'assets/box-empty.png';

export const EmptyTasks = () => {
	return (
		<div className={styles.empty}>
			<img src={emptyImage} alt='emptyBox' />
			<h1>You have no active tasks</h1>
			<p>
				To create a new task, you need to click on the plus sign at the bottom
				right and select create a new task.
			</p>
		</div>
	);
};
