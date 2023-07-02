import { FC } from 'react';

import styles from './AwardsItem.module.scss';

import { AiFillLock } from 'react-icons/ai';

import { ISkin } from 'types/skinType';

import { RootState } from 'features/store';
import { setUser, userState } from 'features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const AwardsItem: FC<ISkin> = ({
	id,
	image,
	name,
	needLevel,
	headImage,
}) => {
	const dispatch = useDispatch();

	const { user } = useSelector<RootState, userState>(state => state.user);

	const typeCurrentLevel = typeof user?.currentLevel === 'number';

	const selectNewSkin = () => {
		dispatch(
			setUser({
				...user,
				activeSkin: {
					id,
					name,
					image,
					needLevel,
					headImage,
				},
			})
		);
	};

	return (
		<div className={styles.item}>
			<div className={styles.image}>
				{typeCurrentLevel &&
					(user?.currentLevel >= needLevel ? (
						''
					) : (
						<div className={styles.locked}>
							<span>
								<AiFillLock />
							</span>
							<p>Need to reach {needLevel} lvl</p>
						</div>
					))}

				<img src={image} alt='steve' />
			</div>
			<div className={styles.description}>
				<h1>{name}</h1>
				{user?.activeSkin.name === name ? (
					<button className={styles.disabled}>Selected now</button>
				) : (
					<button
						onClick={selectNewSkin}
						disabled={
							typeCurrentLevel && user?.currentLevel >= needLevel ? false : true
						}
						className={
							typeCurrentLevel && user?.currentLevel >= needLevel
								? ''
								: styles.disabled
						}
					>
						Select
					</button>
				)}
			</div>
		</div>
	);
};
