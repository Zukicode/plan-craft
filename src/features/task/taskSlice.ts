import { createSlice } from '@reduxjs/toolkit';

import { ITask } from 'types/taskType';

export interface taskState {
	tasks: ITask[];
	todayTasks: ITask[];
}

const initialState: taskState = {
	tasks: [
		{
			id: 0,
			goal: 'Create typescirpt project',
		},
	],
	todayTasks: [],
};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		createTask: (state, { payload }) => {
			state.tasks = [...state.tasks, payload];
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
		},
		createTodayTask: (state, { payload }) => {
			state.todayTasks = [...state.todayTasks, payload];
			localStorage.setItem('todayTasks', JSON.stringify(state.todayTasks));
		},
		deleteTask: (state, { payload }) => {
			state.tasks = state.tasks.filter(task => task.id !== payload);
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
		},
		deleteTodayTask: (state, { payload }) => {
			state.todayTasks = state.todayTasks.filter(task => task.id !== payload);
			localStorage.setItem('todayTasks', JSON.stringify(state.todayTasks));
		},
		setTasks: (state, { payload }) => {
			state.tasks = payload;
		},
		setTodayTasks: (state, { payload }) => {
			state.todayTasks = payload;
		},
	},
});

export const {
	createTask,
	createTodayTask,
	deleteTask,
	deleteTodayTask,
	setTasks,
	setTodayTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
