import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import ToDoModal from './ToDoModal';
import styles from './../styles/modules/app.module.scss';

export default function AppHeader() {
	//**************** variables ****************//
	const [modalOpen, setModalOpen] = useState(false);
	const dispatch = useDispatch();
	return (
		<div className={styles.appHeader}>
			<Button variant='primary' onClick={() => setModalOpen(true)}>
				Add ToDo
			</Button>
			<SelectButton id='status'>
				<option value='all'>All</option>
				<option value='incomplete'>Incomplete</option>
				<option value='complete'>Completed</option>
			</SelectButton>
			<ToDoModal
				type='add'
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
			/>
		</div>
	);
}
