import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Inbox } from 'pages/Inbox/Inbox';
import {
	AWARDS_ROUTE,
	INBOX_ROUTE,
	PROFILE_ROUTE,
	PROJECT_ROUTE,
	SETTINGS_ROUTE,
	TODAY_ROUTE,
} from './routes';
import { Today } from 'pages/Today/Today';
import { Awards } from 'pages/Awards/Awards';
import { Profile } from 'pages/Profile/Profile';
import { Settings } from 'pages/Settings/Settings';
import { Project } from 'pages/Project/Project';

export const AppRoute = () => {
	return (
		<Routes>
			<Route path={'*'} element={<Inbox />} />
			<Route path={INBOX_ROUTE} element={<Inbox />} />
			<Route path={TODAY_ROUTE} element={<Today />} />
			<Route path={PROFILE_ROUTE} element={<Profile />} />
			<Route path={SETTINGS_ROUTE} element={<Settings />} />
			<Route path={PROJECT_ROUTE} element={<Project />} />
			<Route path={AWARDS_ROUTE} element={<Awards />} />
		</Routes>
	);
};
