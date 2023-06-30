import { Task } from 'components/Task/Task';
import styles from './Today.module.scss';

export const Today = () => {
	return (
		<div className={styles.today}>
			<div className={styles.header}>
				<h1>Today</h1>
			</div>

			<div className={styles.content}>
				<Task />
			</div>
		</div>
	);
};
