import { useState } from 'react';

import styles from './Create.module.scss';

import { AiOutlinePlus } from 'react-icons/ai';

export const Create = () => {
	const [isVisible, setVisible] = useState<boolean>(false);
	const toggleMenu = () => setVisible(!isVisible);

	return (
		<div className={styles.createContainer}>
			<div
				className={
					isVisible ? `${styles.choose} ${styles.visible}` : styles.choose
				}
			>
				<ul>
					<li>
						<span>
							<AiOutlinePlus />
						</span>
						<p>New task</p>
					</li>
					<li>
						<span>
							<AiOutlinePlus />
						</span>
						<p>New project</p>
					</li>
				</ul>
			</div>

			<button onClick={toggleMenu} className={styles.create}>
				<AiOutlinePlus />
			</button>
		</div>
	);
};
