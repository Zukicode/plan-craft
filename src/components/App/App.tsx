import { useState, useEffect } from 'react';

import styles from './App.module.scss';

import { Header } from 'components/Header/Header';
import { Create } from 'components/Create/Create';
import { NavBar } from 'components/NavBar/NavBar';
import { NavBarMobile } from 'components/NavBarMobile/NavBarMobile';

import { useNavigate, useLocation } from 'react-router-dom';
import { AppRoute } from 'routes/AppRoute';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'features/store';
import { selectTheme, themeState } from 'features/theme/themeSlice';

import { deleteFirstSymbol } from 'utils/activeSideBar';
import { setUser, userState } from 'features/user/userSlice';
import { Begin } from 'pages/Begin/Begin';
import { IUser } from 'types/userType';

export const App = () => {
	const [activeDir, setActiveDir] = useState<string>('inbox');
	const [isVisibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false);

	const { user } = useSelector<RootState, userState>(state => state.user);
	const { theme } = useSelector<RootState, themeState>(state => state.theme);

	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const handleChangeMobilMenu = (value: boolean) => setVisibleMobileMenu(value);

	const changeDirection = (menuItem: string): void => {
		setActiveDir(menuItem);
		navigate(`${menuItem}`);
	};

	useEffect(() => {
		if (location.pathname === '/') navigate('inbox');

		setActiveDir(deleteFirstSymbol(location.pathname));
	}, [location, navigate]);

	useEffect(() => {
		if (localStorage.getItem('user')) {
			const activeUser: any = localStorage.getItem('user');
			dispatch(setUser(JSON.parse(activeUser)));
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem('activeTheme')) {
			dispatch(selectTheme(localStorage.getItem('activeTheme')));
			document.querySelector('body')?.setAttribute('data-theme', theme);
		} else {
			document.querySelector('body')?.setAttribute('data-theme', theme);
			localStorage.setItem('activeTheme', theme);
		}
	}, [theme, dispatch]);

	return user === null ? (
		<Begin />
	) : (
		<div className={styles.application}>
			<Header handleChangeMobilMenu={handleChangeMobilMenu} />
			<Create />

			<NavBarMobile
				activeDir={activeDir}
				changeDirection={changeDirection}
				isVisibleMobileMenu={isVisibleMobileMenu}
				handleChangeMobilMenu={handleChangeMobilMenu}
			/>

			<div className={styles.wrapper}>
				<NavBar activeDir={activeDir} changeDirection={changeDirection} />

				<div className={styles.content}>
					<AppRoute />
				</div>
			</div>
		</div>
	);
};
