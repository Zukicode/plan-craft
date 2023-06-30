import styles from './Profile.module.scss';

import { Level } from 'components/Level/Level';

import { useSelector } from 'react-redux';
import { RootState } from 'features/store';
import { userState } from 'features/user/userSlice';

export const Profile = () => {
	const { user } = useSelector<RootState, userState>(state => state.user);

	return (
		<div className={styles.profile}>
			<div className={styles.image}>
				<img src={user?.activeSkin.image} alt='сharacter' />
				<Level />
			</div>

			<div className={styles.description}>
				<div className={styles.mini}>
					<h1>{user?.name}</h1>
				</div>

				<div className={styles.statistic}>
					<div className={styles.firstSection}>
						<div className={styles.blockStat}>
							<p>Tasks completed: </p>
							<span>{user?.allTasks}</span>
						</div>

						<div className={styles.blockStat}>
							<p>Today completed: </p>
							<span>{user?.todayTasks}</span>
						</div>

						<div className={styles.blockStat}>
							<p>Current level: </p>
							<span>{user?.currentLevel}</span>
						</div>

						<div className={styles.blockStat}>
							<p>Skin: </p>
							<span>{user?.activeSkin.name}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
