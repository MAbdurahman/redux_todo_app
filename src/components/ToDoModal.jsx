import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from '../redux/slices/todoSlice';
import styles from './../styles/modules/modal.module.scss';
import Button from './Button';

export default function ToDoModal({ type, modalOpen, setModalOpen, todo }) {
	//**************** variables ****************//
	const [title, setTitle] = useState('');
	const [status, setStatus] = useState('incomplete');
	const dispatch = useDispatch();

	//**************** functions ****************//
	useEffect(() => {
		if (type === 'update' && todo) {
			setTitle(todo.title);
			setStatus(todo.status);
		} else {
			setTitle('');
			setStatus('incomplete');
		}
	}, [type, todo, modalOpen]);
	const handleSubmit = e => {
		e.preventDefault();
		if (title === '') {
			toast.error('A Task Title Is Required!');
			return;
		}
		if (title && status) {
			if (type === 'add') {
				dispatch(
					addTodo({
						id: uuid(),
						title,
						status,
						time: new Date().toLocaleString(),
					})
				);
				toast.success('Successfully Added New Task!');
			}
			if (type === 'update') {
				if (todo.title !== title || todo.status !== status) {
					dispatch(updateTodo({ ...todo, title, status }));
					toast.success('Task Updated successfully');
				} else {
					toast.error('Click Cancel - No Update Performed!');
					return;
				}
			}
			setModalOpen(false);
		}
	};
	return (
		<>
			{modalOpen && (
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<div
							className={styles.closeButton}
							onKeyDown={() => setModalOpen(false)}
							onClick={() => setModalOpen(false)}
							role='button'
							tabIndex={0}
						>
							<MdOutlineClose />
						</div>
						<form className={styles.form} onSubmit={e => handleSubmit(e)}>
							<h1 className={styles.formTitle}>
								{type === 'add' ? 'Add' : 'Update'} TODO
							</h1>
							<label htmlFor='title'>
								Title
								<input
									type='text'
									id='title'
									value={title}
									onChange={e => setTitle(e.target.value)}
								/>
							</label>
							<label htmlFor='type'>
								Status
								<select
									id='type'
									value={status}
									onChange={e => setStatus(e.target.value)}
								>
									<option value='incomplete'>Incomplete</option>
									<option value='complete'>Completed</option>
								</select>
							</label>
							<div className={styles.buttonContainer}>
								<Button type='submit' variant='primary'>
									{type === 'add' ? 'Add ToDo' : 'Update ToDo'}
								</Button>
								<Button
									variant='secondary'
									onClick={() => setModalOpen(false)}
								>
									Cancel
								</Button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
