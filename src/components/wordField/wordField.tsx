import LetterField from '../letterField/letterField.tsx';
import { useState } from 'react';
import { IWord } from '../../interfaces.ts';
import { LETTERS } from '../../constants/constants.ts';

const WordField = () => {
	const [word, setWord] = useState<IWord[]>(LETTERS);
	return (
		<>
			{word.map((item, index) => {
				return <LetterField key={index} value={item} onChange={setWord} />;
			})}
		</>
	);
};

export default WordField;
