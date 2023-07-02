import { FC, useEffect, useState } from 'react';

import styles from './Header.module.scss';

import { BiMenu } from 'react-icons/bi';

import logoImage from 'assets/logo.svg';

import { useNavigate } from 'react-router-dom';
import { INBOX_ROUTE, PROFILE_ROUTE } from 'routes/routes';

import { RootState } from 'features/store';
import { userState } from 'features/user/userSlice';
import { useSelector } from 'react-redux';

interface HeaderProps {
	handleChangeMobilMenu: (value: boolean) => void;
}

export const Header: FC<HeaderProps> = ({ handleChangeMobilMenu }) => {
	const navigate = useNavigate();
	const { user } = useSelector<RootState, userState>(state => state.user);

	const [currentLevel, setCurrentLevel] = useState<number | undefined>(
		user?.currentLevel
	);

	useEffect(() => {
		setCurrentLevel(user?.currentLevel);
	}, [user?.currentLevel]);

	return (
		<div className={styles.header}>
			<div className={styles.menu}>
				<div className={styles.hamburgerMenu}>
					<button onClick={() => handleChangeMobilMenu(true)}>
						<BiMenu className={styles.icon} />
					</button>
				</div>
				<div onClick={() => navigate(INBOX_ROUTE)} className={styles.logo}>
					<img src={logoImage} alt='logo' />
					<h1>PlanCraft</h1>
				</div>
			</div>

			<div className={styles.statistic}>
				<div className={styles.mobileLevel}>
					<p>
						{user?.currentLevel} <span>lvl</span>
					</p>
				</div>

				<div className={styles.level}>
					<p>
						{user?.currentLevel} <span>lvl</span>
					</p>

					<div className={styles.progress}>
						<div
							style={{ width: `${user?.experience}%` }}
							className={styles.activeProgress}
						></div>
					</div>

					<p>
						{typeof currentLevel === 'number' && currentLevel + 1}{' '}
						<span>lvl</span>
					</p>

					<p className={styles.exp}>{user?.experience}/100</p>
				</div>
				<div
					onClick={() => navigate(PROFILE_ROUTE)}
					className={styles.headPerson}
				>
					<img src={user?.activeSkin.headImage} alt='head' width={'50px'} />
				</div>
			</div>
		</div>
	);
};
