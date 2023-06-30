import { createSlice } from '@reduxjs/toolkit';

export interface themeState {
	theme: string;
}

const initialState: themeState = {
	theme: 'dark',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		selectTheme: (state, action) => {
			if (action.payload === 'light') state.theme = 'light';
			else state.theme = 'dark';
		},
	},
});

export const { selectTheme } = themeSlice.actions;

export default themeSlice.reducer;
