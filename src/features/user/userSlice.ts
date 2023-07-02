import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'types/userType';

export interface userState {
	user: null | IUser;
}

const initialState: userState = {
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload;
			localStorage.setItem('user', JSON.stringify(payload));
		},
		removeUser: state => {
			state.user = null;
			localStorage.removeItem('user');
		},
		addExperience: (state, action) => {
			const { newLevelUser, typeTask } = action.payload;

			if (typeTask === 'inbox') {
				if (newLevelUser.experience > 90) {
					const newLevelUserLocal = {
						...newLevelUser,
						experience: 0,
						allTasks: newLevelUser.allTasks + 1,
						currentLevel: newLevelUser.currentLevel + 1,
					};
					state.user = { ...newLevelUserLocal };
					localStorage.setItem('user', JSON.stringify(newLevelUserLocal));
				} else {
					state.user = {
						...newLevelUser,
						todayTasks: newLevelUser.todayTasks + 1,
					};
					localStorage.setItem(
						'user',
						JSON.stringify({
							...newLevelUser,
							todayTasks: newLevelUser.todayTasks + 1,
						})
					);
				}
			} else if (typeTask === 'today') {
				if (newLevelUser.experience > 90) {
					const newLevelUserLocal = {
						...newLevelUser,
						experience: 0,
						todayTasks: newLevelUser.todayTasks + 1,
						currentLevel: newLevelUser.currentLevel + 1,
					};
					state.user = { ...newLevelUserLocal };
					localStorage.setItem('user', JSON.stringify(newLevelUserLocal));
				} else {
					state.user = {
						...newLevelUser,
						todayTasks: newLevelUser.todayTasks + 1,
					};
					localStorage.setItem(
						'user',
						JSON.stringify({
							...newLevelUser,
							todayTasks: newLevelUser.todayTasks + 1,
						})
					);
				}
			}
		},
	},
});

export const { setUser, removeUser, addExperience } = userSlice.actions;

export default userSlice.reducer;
