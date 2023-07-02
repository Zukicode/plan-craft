import { FC } from 'react';

import styles from './Settings.module.scss';

import darkThemeImage from 'assets/dark-theme.png';
import lightThemeImage from 'assets/light-theme.png';

import { RootState } from 'features/store';
import { setTasks, setTodayTasks } from 'features/task/taskSlice';
import { selectTheme } from 'features/theme/themeSlice';
import { setUser, userState } from 'features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Settings: FC = () => {
	const dispatch = useDispatch();
	const { user } = useSelector<RootState, userState>(state => state.user);

	const changeActiveTheme = (selectedTheme: string) => {
		dispatch(selectTheme(selectedTheme));
		localStorage.setItem('activeTheme', selectedTheme);
	};

	const handleRemoveAccount = () => {
		dispatch(setUser(null));
		dispatch(setTasks([]));
		dispatch(setTodayTasks([]));
		localStorage.removeItem('user');
		localStorage.removeItem('todayTasks');
		localStorage.removeItem('tasks');
	};

	const handleResetProfile = () => {
		const newUser = {
			name: user !== null && user.name,
			activeSkin: user !== null && { ...user.activeSkin },
			currentLevel: 1,
			allTasks: 0,
			todayTasks: 0,
			experience: 0,
		};

		dispatch(setUser(newUser));
		localStorage.setItem('user', JSON.stringify(newUser));
	};

	return (
		<div className={styles.settings}>
			<div className={styles.header}>
				<h1>Settings</h1>
			</div>

			<div className={styles.selectTheme}>
				<div onClick={() => changeActiveTheme('dark')} className={styles.dark}>
					<div className={styles.image}>
						<img src={darkThemeImage} alt='theme-dark' width={'250px'} />
					</div>
					<h1>Dark</h1>
				</div>

				<div
					onClick={() => changeActiveTheme('light')}
					className={styles.light}
				>
					<div className={styles.image}>
						<img src={lightThemeImage} alt='theme-light' width={'250px'} />
					</div>
					<h1>Light</h1>
				</div>
			</div>

			<div className={styles.removeAccont}>
				<button onClick={handleResetProfile}>Reset profile</button>
				<button onClick={handleRemoveAccount}>Remove account</button>
			</div>
		</div>
	);
};
