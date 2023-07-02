import { FC } from 'react';

import { useSelector } from 'react-redux';

import styles from './Today.module.scss';

import { EmptyTasks } from 'components/EmptyTasks/EmptyTasks';
import { Task } from 'components/Task/Task';

import { RootState } from 'features/store';
import { taskState } from 'features/task/taskSlice';

export const Today: FC = () => {
	const { todayTasks } = useSelector<RootState, taskState>(
		state => state.tasks
	);

	return !todayTasks.length ? (
		<EmptyTasks />
	) : (
		<div className={styles.today}>
			<div className={styles.header}>
				<h1>Today</h1>
			</div>

			<div className={styles.content}>
				{todayTasks.map(task => (
					<Task key={task.id} {...task} taskType='inbox' />
				))}
			</div>
		</div>
	);
};
