import React from 'react';
import Button, { SelectButton } from './Button';
import styles from './../styles/modules/app.module.scss';

export default function AppHeader() {
	return (
		<div className={styles.appHeader}>
			<Button variant='primary'>Add Task</Button>
			<SelectButton id='status'>
				<option value='all'>All</option>
				<option value='incomplete'>Incomplete</option>
				<option value='complete'>Completed</option>
			</SelectButton>
		</div>
	);
}
