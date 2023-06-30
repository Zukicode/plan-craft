import { FC } from 'react';

import styles from './Awards.module.scss';
import { AwardsItem } from 'components/AwardsItem/AwardsItem';

export const Awards: FC = () => {
	return (
		<div className={styles.awards}>
			<div className={styles.header}>
				<h1>Awards</h1>
			</div>

			<div className={styles.content}>
				<AwardsItem />
				<AwardsItem />
				<AwardsItem />
				<AwardsItem />
				<AwardsItem />
			</div>
		</div>
	);
};
