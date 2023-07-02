import { FC, useState } from 'react';

import styles from './CreateTask.module.scss';

import { createTask, createTodayTask } from 'features/task/taskSlice';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

interface CreateTaskProps {
	handleChangeModal: (type: boolean) => void;
}

export const CreateTask: FC<CreateTaskProps> = ({ handleChangeModal }) => {
	const [value, setValue] = useState<string>('');

	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const createNewTask = () => {
		if (!value) return;

		if (pathname === '/inbox') {
			console.log('create in inbox');

			let newTask = {
				id: Math.random(),
				goal: value,
			};

			dispatch(createTask(newTask));
		} else if (pathname === '/today') {
			console.log('create in today');

			let newTaskToday = {
				id: Math.random(),
				goal: value,
			};

			dispatch(createTodayTask(newTaskToday));
		} else {
			console.log('page for not create');
		}

		handleChangeModal(false);
	};

	return (
		<div className={styles.createTask}>
			<div className={styles.modalCreate}>
				<div className={styles.header}>
					<h1>New Task</h1>
					<button onClick={() => handleChangeModal(false)}>
						<AiOutlineClose />
					</button>
				</div>

				<div className={styles.content}>
					<input
						type='text'
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder='Enter the task here'
					/>
					<button onClick={createNewTask}>Create</button>
				</div>
			</div>
		</div>
	);
};
