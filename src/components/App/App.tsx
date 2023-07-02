import { useEffect, useState } from 'react';

import styles from './App.module.scss';

import { Create } from 'components/Create/Create';
import { Header } from 'components/Header/Header';
import { NavBar } from 'components/NavBar/NavBar';
import { NavBarMobile } from 'components/NavBarMobile/NavBarMobile';

import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute } from 'routes/AppRoute';

import { RootState } from 'features/store';
import { selectTheme, themeState } from 'features/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

import { CreateTask } from 'components/CreateTask/CreateTask';
import { setTasks, setTodayTasks } from 'features/task/taskSlice';
import { setUser, userState } from 'features/user/userSlice';
import { Begin } from 'pages/Begin/Begin';
import { deleteFirstSymbol } from 'utils/activeSideBar';

export const App = () => {
	const [activeDir, setActiveDir] = useState<string>('inbox');
	const [isVisibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false);
	const [createTaskModal, setCreateTaskModal] = useState<boolean>(false);

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

	const handleChangeModalCrateTask = (type: boolean) =>
		setCreateTaskModal(type);

	useEffect(() => {
		if (location.pathname === '/') navigate('inbox');

		setActiveDir(deleteFirstSymbol(location.pathname));
	}, [location, navigate]);

	useEffect(() => {
		if (localStorage.getItem('user')) {
			const activeUser: any = localStorage.getItem('user');
			dispatch(setUser(JSON.parse(activeUser)));
		}

		if (localStorage.getItem('tasks')) {
			const activeTasks: any = localStorage.getItem('tasks');
			dispatch(setTasks(JSON.parse(activeTasks)));
		}

		if (localStorage.getItem('todayTasks')) {
			const activeTodayTasks: any = localStorage.getItem('todayTasks');
			dispatch(setTodayTasks(JSON.parse(activeTodayTasks)));
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
			<Create handleChangeModal={handleChangeModalCrateTask} />
			{createTaskModal && (
				<CreateTask handleChangeModal={handleChangeModalCrateTask} />
			)}

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
