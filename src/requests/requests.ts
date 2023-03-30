import IWord from '../interfaces';

export const fetchData = async (): Promise<IWord> => {
	let wordLen = 0;
	let data = { word: undefined };
	while (wordLen !== 5) {
		const response = await fetch(
			'https://www.wordgamedb.com/api/v1/words/random'
		);
		data = await response.json();
		wordLen = data.word.length;
	}
	return data.word;
};
