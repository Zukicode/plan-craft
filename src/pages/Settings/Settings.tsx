import { FC, useEffect } from 'react';

import styles from './Settings.module.scss';

import darkThemeImage from 'assets/dark-theme.png';
import lightThemeImage from 'assets/light-theme.png';

import { useDispatch } from 'react-redux';
import { selectTheme } from 'features/theme/themeSlice';

export const Settings: FC = () => {
	const dispatch = useDispatch();

	const changeActiveTheme = (selectedTheme: string) => {
		dispatch(selectTheme(selectedTheme));
		localStorage.setItem('activeTheme', selectedTheme);
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
		</div>
	);
};
