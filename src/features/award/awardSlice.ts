import { createSlice } from '@reduxjs/toolkit';
import { ISkin } from 'types/skinType';

export interface awardState {
	skins: ISkin[];
}

const initialState: awardState = {
	skins: [],
};

export const awardSlice = createSlice({
	name: 'award',
	initialState,
	reducers: {
		setAwardSkins: (state, { payload }) => {
			state.skins = [...payload];
		},
	},
});

export const { setAwardSkins } = awardSlice.actions;

export default awardSlice.reducer;
