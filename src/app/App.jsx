import React from 'react';
import PageTitle from './../components/PageTitle';
import AppHeader from './../components/AppHeader';
import styles from './../styles/modules/app.module.scss';

export default function App() {
	return (
		<>
			<div className='container'>
				<PageTitle>ToDo List</PageTitle>
				<div className={styles.app__wrapper}>
					<AppHeader />
				</div>
			</div>
		</>
	);
}
