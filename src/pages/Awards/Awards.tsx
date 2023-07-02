import { FC, useEffect } from 'react';

import styles from './Awards.module.scss';

import { AwardsItem } from 'components/AwardsItem/AwardsItem';

import skinsData from 'data/skins.json';
import { awardState, setAwardSkins } from 'features/award/awardSlice';
import { RootState } from 'features/store';
import { useDispatch, useSelector } from 'react-redux';

export const Awards: FC = () => {
	const dispatch = useDispatch();
	const { skins } = useSelector<RootState, awardState>(state => state.award);

	useEffect(() => {
		dispatch(setAwardSkins(skinsData.skins));
	}, [dispatch]);

	return (
		<div className={styles.awards}>
			<div className={styles.header}>
				<h1>Awards</h1>
			</div>

			<div className={styles.content}>
				{skins.map(skin => (
					<AwardsItem key={skin.id} {...skin} />
				))}
			</div>
		</div>
	);
};
