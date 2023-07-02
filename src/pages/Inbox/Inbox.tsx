import { FC } from 'react';

import styles from './Inbox.module.scss';

import { EmptyTasks } from 'components/EmptyTasks/EmptyTasks';
import { Task } from 'components/Task/Task';

import { RootState } from 'features/store';
import { taskState } from 'features/task/taskSlice';
import { useSelector } from 'react-redux';

export const Inbox: FC = () => {
	const { tasks } = useSelector<RootState, taskState>(state => state.tasks);

	return !tasks.length ? (
		<EmptyTasks />
	) : (
		<div className={styles.inbox}>
			<div className={styles.header}>
				<h1>Inbox</h1>
			</div>

			<div className={styles.content}>
				{tasks.map(task => (
					<Task key={task.id} {...task} taskType='inbox' />
				))}
			</div>
		</div>
	);
};
