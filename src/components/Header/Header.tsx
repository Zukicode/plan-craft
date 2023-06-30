import { FC } from 'react';

import styles from './Header.module.scss';

import { BiMenu } from 'react-icons/bi';

import head from 'assets/head.png';
import logoImage from 'assets/logo.svg';
import { Level } from 'components/Level/Level';

interface HeaderProps {
	handleChangeMobilMenu: (value: boolean) => void;
}

export const Header: FC<HeaderProps> = ({ handleChangeMobilMenu }) => {
	return (
		<div className={styles.header}>
			<div className={styles.menu}>
				<div className={styles.hamburgerMenu}>
					<button onClick={() => handleChangeMobilMenu(true)}>
						<BiMenu className={styles.icon} />
					</button>
				</div>
				<div className={styles.logo}>
					<img src={logoImage} alt='logo' />
					<h1>PlanCraft</h1>
				</div>
			</div>

			<div className={styles.statistic}>
				<div className={styles.mobileLevel}>
					<p>
						10 <span>lvl</span>
					</p>
				</div>

				<div className={styles.level}>
					<p>
						1 <span>lvl</span>
					</p>

					<div className={styles.progress}>
						<div className={styles.activeProgress}></div>
					</div>

					<p>
						2 <span>lvl</span>
					</p>

					<p className={styles.exp}>10/100</p>
				</div>
				<div className={styles.headPerson}>
					<img src={head} alt='head' width={'50px'} />
				</div>
			</div>
		</div>
	);
};
