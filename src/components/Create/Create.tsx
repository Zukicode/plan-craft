import { FC, useState } from 'react';

import styles from './Create.module.scss';

import { AiOutlinePlus } from 'react-icons/ai';

interface CreateProps {
	handleChangeModal: (type: boolean) => void;
}

export const Create: FC<CreateProps> = ({ handleChangeModal }) => {
	const [isVisible, setVisible] = useState<boolean>(false);
	const toggleMenu = () => setVisible(!isVisible);

	const openCreateTaskModal = () => {
		handleChangeModal(true);
		setVisible(false);
	};

	return (
		<div className={styles.createContainer}>
			<div
				className={
					isVisible ? `${styles.choose} ${styles.visible}` : styles.choose
				}
			>
				<ul>
					<li onClick={openCreateTaskModal}>
						<span>
							<AiOutlinePlus />
						</span>
						<p>New task</p>
					</li>
				</ul>
			</div>

			<button onClick={toggleMenu} className={styles.create}>
				<AiOutlinePlus />
			</button>
		</div>
	);
};
