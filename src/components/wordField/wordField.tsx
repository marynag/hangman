import LetterField from '../letterField/letterField.tsx';
import { useState } from 'react';
import { IWord } from '../../interfaces.ts';
import { LETTERS } from '../../constants/constants.ts';

const WordField = () => {
	const [word, setWord] = useState<IWord[]>(LETTERS);

	const handleSubmit = () => {
		console.log(word.join(''));
	};
	return (
		<>
			{word.map((letter, index) => {
				return (
					<LetterField
						key={letter}
						letter={letter}
						onChange={setWord}
						word={word}
						position={index}
					/>
				);
			})}
			<button onClick={handleSubmit}>Submit</button>
		</>
	);
};

export default WordField;
