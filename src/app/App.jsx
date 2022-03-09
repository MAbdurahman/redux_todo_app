import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './../components/PageTitle';
import AppHeader from './../components/AppHeader';
import AppContent from './../components/AppContent';
import styles from './../styles/modules/app.module.scss';

export default function App() {
	return (
		<>
			<div className='container'>
				<PageTitle>ToDo List</PageTitle>
				<div className={styles.app__wrapper}>
					<AppHeader />
					<AppContent />
				</div>
			</div>
			<Toaster
				position='bottom-right'
				toastOptions={{
					style: {
						fontSize: '1.5rem',
					},
				}}
			/>
		</>
	);
}
