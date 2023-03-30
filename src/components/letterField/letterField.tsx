import styles from './letterFiels.module.css';
import { ChangeEvent } from 'react';

const LetterField = ({ letter, word, onChange, position }) => {
	const handleChange =
		(position: number) => (e: ChangeEvent<HTMLInputElement>) => {
			if (e.target.name === 'letter' && Array.isArray(word)) {
				const newWord = [...word];
				newWord[position] = e.target.value;
				onChange(newWord);
			}
		};
	return (
		<input
			className={styles.userInput}
			name='letter'
			value={letter}
			id={letter}
			maxLength='1'
			onChange={handleChange(position)}
		/>
	);
};

export default LetterField;
