import { Awards } from 'pages/Awards/Awards';
import { Inbox } from 'pages/Inbox/Inbox';
import { Profile } from 'pages/Profile/Profile';
import { Settings } from 'pages/Settings/Settings';
import { Today } from 'pages/Today/Today';
import { Route, Routes } from 'react-router-dom';
import {
	AWARDS_ROUTE,
	INBOX_ROUTE,
	PROFILE_ROUTE,
	SETTINGS_ROUTE,
	TODAY_ROUTE,
} from './routes';

export const AppRoute = () => {
	return (
		<Routes>
			<Route path={'*'} element={<Inbox />} />
			<Route path={INBOX_ROUTE} element={<Inbox />} />
			<Route path={TODAY_ROUTE} element={<Today />} />
			<Route path={PROFILE_ROUTE} element={<Profile />} />
			<Route path={SETTINGS_ROUTE} element={<Settings />} />
			<Route path={AWARDS_ROUTE} element={<Awards />} />
		</Routes>
	);
};
