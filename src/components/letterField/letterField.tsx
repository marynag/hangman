import { ChangeEvent } from 'react';
import styles from './letterFiels.module.css';

const LetterField = ({ value, onChange }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (e.target.name === 'letter' && Array.isArray(value)) {
			const index = value[e.nativeEvent.eventPhase];
			value[index] = e.nativeEvent.eventPhase;
			onChange(value);
		}
	};
	return (
		<input
			className={styles.userInput}
			name='letter'
			value={value}
			onChange={handleChange}
		/>
	);
};

export default LetterField;
