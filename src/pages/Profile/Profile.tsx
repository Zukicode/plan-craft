import styles from './Profile.module.scss';

import { Level } from 'components/Level/Level';

import steveImageTemp from 'assets/steve.png';

export const Profile = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.image}>
				<img src={steveImageTemp} alt='сharacter' />
				<Level />
			</div>

			<div className={styles.description}>
				<div className={styles.mini}>
					<h1>Steve</h1>
				</div>

				<div className={styles.statistic}>
					<div className={styles.firstSection}>
						<div className={styles.blockStat}>
							<p>Tasks completed: </p>
							<span>415</span>
						</div>

						<div className={styles.blockStat}>
							<p>Today completed: </p>
							<span>10</span>
						</div>

						<div className={styles.blockStat}>
							<p>Current level: </p>
							<span>10</span>
						</div>

						<div className={styles.blockStat}>
							<p>Experience: </p>
							<span>505</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
