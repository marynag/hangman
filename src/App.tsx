import styles from './App.module.scss';
import { FC } from 'react';
import WordField from './components/wordField/wordField.tsx';

const App: FC = () => {
	return (
		<div className={styles.App}>
			<WordField />
		</div>
	);
};

export default App;
