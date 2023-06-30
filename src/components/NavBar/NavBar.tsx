import { FC } from 'react';

import styles from './NavBar.module.scss';

import { firstLetterToUpperCase, listOfMenu } from 'utils/activeSideBar';

interface NavBarProps {
	activeDir: string;
	changeDirection: (menuItem: string) => void;
}

export const NavBar: FC<NavBarProps> = ({ activeDir, changeDirection }) => {
	return (
		<div className={styles.navbar}>
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
	);
};
