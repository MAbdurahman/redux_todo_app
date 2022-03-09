import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import styles from './../styles/modules/modal.module.scss';
import Button from './Button';

export default function ToDoModal({ type, modalOpen, setModalOpen, todo }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.closeButton}>
					<MdOutlineClose />
				</div>
				<form className={styles.form}>
					<h1 className={styles.formTitle}>Add Task</h1>
					<label htmlFor='title'>
						Title
						<input
							type='text'
							id='title'
							// value={title}
							// onChange={e => setTitle(e.target.value)}
						/>
					</label>
					<label htmlFor='type'>
						Status
						<select
							id='type'
							// value={status}
							// onChange={e => setStatus(e.target.value)}
						>
							<option value='incomplete'>Incomplete</option>
							<option value='complete'>Completed</option>
						</select>
					</label>
					<div className={styles.buttonContainer}>
						<Button type='submit' variant='primary'>
							{/* {type === 'add' ? 'Add Task' : 'Update Task'} */}
                     Add Task
						</Button>
						<Button
							variant='secondary'
							// onClick={() => setModalOpen(false)}
						>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
