import { FC } from 'react';

import styles from './NavBarMobile.module.scss';

import logoImage from 'assets/logo.svg';

import { firstLetterToUpperCase, listOfMenu } from 'utils/activeSideBar';

interface NavBarMobileProps {
	activeDir: string;
	changeDirection: (menuItem: string) => void;
	isVisibleMobileMenu: boolean;
	handleChangeMobilMenu: (value: boolean) => void;
}

export const NavBarMobile: FC<NavBarMobileProps> = ({
	activeDir,
	changeDirection,
	isVisibleMobileMenu,
	handleChangeMobilMenu,
}) => {
	return (
		<div
			className={
				isVisibleMobileMenu
					? `${styles.bgBlack} ${styles.active}`
					: styles.bgBlack
			}
			onClick={() => handleChangeMobilMenu(false)}
		>
			<div className={styles.navbar}>
				<div className={styles.logo}>
					<img src={logoImage} alt='logo' />
					<h1>PlanCraft</h1>
				</div>

				<div className={styles.tasks}>
					<ul>
						{listOfMenu.map((menuItem, index) => (
							<li
								key={index}
								onClick={() => changeDirection(menuItem)}
								className={menuItem === activeDir ? styles.active : ''}
							>
								{firstLetterToUpperCase(menuItem)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
