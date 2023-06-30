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
			localStorage.setItem('user', payload);
		},
		removeUser: state => {
			state.user = null;
			localStorage.removeItem('user');
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
