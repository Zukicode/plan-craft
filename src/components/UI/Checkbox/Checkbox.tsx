import { FC } from 'react';

import styles from './Checkbox.module.scss';

import { MdDone } from 'react-icons/md';

interface CheckboxProps {
	handleClick: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ handleClick }) => {
	return (
		<div onClick={handleClick} className={styles.checkbox}>
			<span className={styles.icon}>
				<MdDone />
			</span>
		</div>
	);
};
