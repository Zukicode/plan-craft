import { FC } from 'react';

import styles from './Task.module.scss';

import { Checkbox } from 'components/UI/Checkbox/Checkbox';

import { AiOutlineDelete } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'features/store';
import { deleteTask, deleteTodayTask } from 'features/task/taskSlice';
import { addExperience, userState } from 'features/user/userSlice';
import { ITask } from 'types/taskType';

interface TaskProps extends ITask {
	taskType: string;
}

export const Task: FC<TaskProps> = ({ id, goal, taskType }) => {
	const dispatch = useDispatch();

	const { user } = useSelector<RootState, userState>(state => state.user);

	const finishTask = () => {
		const typeExp = typeof user?.experience === 'number';
		const newUserUpdateExperience = {
			...user,
			experience: typeExp && user.experience + 10,
		};

		dispatch(
			addExperience({
				newLevelUser: newUserUpdateExperience,
				typeTask: taskType,
			})
		);
		removeTask();
	};

	const removeTask = () => {
		dispatch(deleteTask(id));
		dispatch(deleteTodayTask(id));
	};

	return (
		<div className={styles.task}>
			<p>{goal}</p>
			<div className={styles.buttons}>
				<Checkbox handleClick={finishTask} />
				<button onClick={removeTask} className={styles.delete}>
					<AiOutlineDelete />
				</button>
			</div>
		</div>
	);
};
