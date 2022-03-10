import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import ToDoModal from './ToDoModal';
import { updateFilterStatus } from './../redux/slices/todoSlice';
import styles from './../styles/modules/app.module.scss';

export default function AppHeader() {
	//**************** variables ****************//
	const [modalOpen, setModalOpen] = useState(false);
	const initialFilterStatus = useSelector(state => state.todo.filterStatus);
	const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
	const dispatch = useDispatch();

	//**************** functions ****************//
	const updateFilter = e => {
		setFilterStatus(e.target.value);
		dispatch(updateFilterStatus(e.target.value));
	};

	return (
		<div className={styles.appHeader}>
			<Button variant='primary' onClick={() => setModalOpen(true)}>
				Add ToDo
			</Button>
			<SelectButton
				id='status'
				onChange={e => updateFilter(e)}
				value={filterStatus}
			>
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
