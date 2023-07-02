import { configureStore } from '@reduxjs/toolkit';

import awardSlice from './award/awardSlice';
import taskSlice from './task/taskSlice';
import themeSlice from './theme/themeSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
	reducer: {
		theme: themeSlice,
		user: userSlice,
		award: awardSlice,
		tasks: taskSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
