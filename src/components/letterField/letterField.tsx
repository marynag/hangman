import { ChangeEvent } from 'react';

const LetterField = ({ value, onChange }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (e.target.name === 'letter' && Array.isArray(value)) {
			const index = value[e.nativeEvent.eventPhase];
			value[index] = e.nativeEvent.eventPhase;
			onChange(value);
		}
	};
	return <input name='letter' value={value} onChange={handleChange} />;
};

export default LetterField;
