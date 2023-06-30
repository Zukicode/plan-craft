import React, { FC, useState } from 'react';

import styles from './Begin.module.scss';

import steveTemp from 'assets/steve.png';
import headChooseTemp from 'assets/head.png';

import { ISkin } from 'types/skinType';

import { useDispatch } from 'react-redux';
import { setUser } from 'features/user/userSlice';

const beginCharcters: ISkin[] = [
	{
		id: Math.random(),
		name: 'Steve',
		needLevel: 1,
		image:
			'https://lh3.googleusercontent.com/NgYj3DoxTihNJ2lvIBO_0zXkj3eocVvxKrerC9WLqfeWPqbw4SH4PAF509cKvSI1weZ3ug-412GGUM3C_i5x_Q=s400',
		headImage:
			'https://pm1.aminoapps.com/7616/bc3b22a89815985dc74b830a01ad331c0d3e9f86r1-768-768v2_uhq.jpg',
	},
	{
		id: Math.random(),
		name: 'Alex',
		needLevel: 1,
		image:
			'https://lh3.googleusercontent.com/6HHVr4M6Qvf7zzOS2vfmBZb0KMPoEaSkmA7FttaOvAMxgcvPWJ6Q083SmlgPsyhlVHWxr_SOgzl8wVGWWgTRMA',
		headImage:
			'https://i.pinimg.com/originals/a9/a4/ec/a9a4ec03fa9afc407028ca40c20ed774.jpg',
	},
	{
		id: Math.random(),
		name: 'Zombie',
		needLevel: 1,
		image:
			'https://lh3.googleusercontent.com/GXg92wfzRk5JV9E4fvNm24ELl_m0aXzvPxPQ0pMZP7tvf4q9eaqPQ6QcSXpuY97TXU2twWhcEtPwW2QAp43ymQ=s400',
		headImage:
			'https://minecraftfaces.com/wp-content/bigfaces/big-zombie-face.png',
	},
];

export const Begin: FC = () => {
	const dispatch = useDispatch();

	const [page, setPage] = useState<number>(0);
	const [name, setName] = useState<string>('');
	const [error, setError] = useState<boolean>(false);
	const [selectedCharcter, setCharcter] = useState<ISkin>({
		id: Math.random(),
		name: 'Steve',
		needLevel: 1,
		image:
			'https://lh3.googleusercontent.com/NgYj3DoxTihNJ2lvIBO_0zXkj3eocVvxKrerC9WLqfeWPqbw4SH4PAF509cKvSI1weZ3ug-412GGUM3C_i5x_Q=s400',
		headImage:
			'https://pm1.aminoapps.com/7616/bc3b22a89815985dc74b830a01ad331c0d3e9f86r1-768-768v2_uhq.jpg',
	});
	const [chooseCharcterNum, setCharcterNum] = useState(0);

	const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setError(false);
		setName(e.target.value);
	};

	const confirmSelectNamed = () => {
		if (name) {
			setPage(1);
			setError(false);
		} else {
			setError(true);
		}
	};

	const confirmSelectedCharcter = (selectedNum: number) => {
		setCharcterNum(selectedNum);
		setCharcter(beginCharcters[selectedNum]);
	};

	const confirmCreateUser = () => {
		const newUser = {
			name: name,
			activeSkin: { ...selectedCharcter },
			currentLevel: 1,
			allTasks: 0,
			todayTasks: 0,
			experience: 0,
		};
		dispatch(setUser(newUser));
	};

	return (
		<div className={styles.begin}>
			{page === 0 ? (
				<div className={styles.name}>
					<input
						type='text'
						value={name}
						onChange={e => onChangeName(e)}
						placeholder='Name'
					/>
					{error && <p>This field cannot be empty</p>}
					<button onClick={confirmSelectNamed}>Continue</button>
				</div>
			) : (
				<div className={styles.chooseCharcter}>
					<div className={styles.charcters}>
						<img src={selectedCharcter.image} alt='activeCharcter' />

						<div className={styles.selectsButton}>
							<div
								className={
									chooseCharcterNum === 0
										? `${styles.selectButton} ${styles.active}`
										: styles.selectButton
								}
								onClick={() => confirmSelectedCharcter(0)}
							>
								<img
									src={beginCharcters[0].headImage}
									alt='selectImg'
									width={'50px'}
								/>
								<p>{beginCharcters[0].name}</p>
							</div>

							<div
								className={
									chooseCharcterNum === 1
										? `${styles.selectButton} ${styles.active}`
										: styles.selectButton
								}
								onClick={() => confirmSelectedCharcter(1)}
							>
								<img
									src={beginCharcters[1].headImage}
									alt='selectImg'
									width={'50px'}
								/>
								<p>{beginCharcters[1].name}</p>
							</div>

							<div
								className={
									chooseCharcterNum === 2
										? `${styles.selectButton} ${styles.active}`
										: styles.selectButton
								}
								onClick={() => confirmSelectedCharcter(2)}
							>
								<img
									src={beginCharcters[2].headImage}
									alt='selectImg'
									width={'50px'}
								/>
								<p>{beginCharcters[2].name}</p>
							</div>
						</div>
					</div>

					<div className={styles.buttons}>
						<button onClick={() => setPage(0)}>Back</button>
						<button onClick={confirmCreateUser}>Confirm</button>
					</div>
				</div>
			)}
		</div>
	);
};
