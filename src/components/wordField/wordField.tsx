import LetterField from '../letterField/letterField.tsx';
import { useState, useEffect } from 'react';
import { IWord } from '../../interfaces.ts';
import { LETTERS } from '../../constants/constants.ts';
import { fetchData } from '../../requests/requests.ts';

const WordField = () => {
	const [userWord, setUserWord] = useState<IWord[]>(LETTERS);
	const [word, setWord] = useState<IWord>();

	useEffect(() => {
		const getData = async () => {
			const data = await fetchData();
			setWord(data);
		};
		getData();
	}, []);

	const handleSubmit = () => {
		const userInput = userWord.join('');
		const isWordsMatch = userInput === word;
	};
	return (
		<>
			{userWord.map((letter, index) => {
				return (
					<LetterField
						key={letter}
						letter={letter}
						onChange={setUserWord}
						word={userWord}
						position={index}
					/>
				);
			})}
			{console.log(word)}
			<button onClick={handleSubmit}>Submit</button>
		</>
	);
};

export default WordField;
