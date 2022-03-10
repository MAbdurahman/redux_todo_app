import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from './../redux/slices/todoSlice';
import styles from './../styles/modules/todoItem.module.scss';
import { getClasses } from './../utils/getClasses';
import ToDoModal from './ToDoModal';
import CheckButton from './CheckButton';

const child = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export default function ToDoItem({ todo }) {
	//**************** variables ****************//
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(false);
	const [updateModalOpen, setUpdateModalOpen] = useState(false);

	//**************** functions ****************//
	useEffect(() => {
		if (todo.status === 'complete') {
			setChecked(true);
		} else {
			setChecked(false);
		}
	}, [todo.status]);

	const handleCheck = () => {
		setChecked(!checked);
		dispatch(
			updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' })
		);
		toast.success('Successfully Updated ToDo Item!');
	};

	const handleDelete = () => {
		dispatch(deleteTodo(todo.id));
		toast.success('Successfully Deleted ToDo Item!');
	};
	const handleUpdate = () => {
		setUpdateModalOpen(true);
	};
	return (
		<>
			<motion.div className={styles.item} variants={child} >
				<div className={styles.todoDetails}>
					<CheckButton checked={checked} handleCheck={handleCheck} />
					<div className={styles.texts}>
						<p
							className={getClasses([
								styles.todoText,
								todo.status === 'complete' &&
									styles['todoText--completed'],
							])}
						>
							{todo.title}
						</p>
						<p className={styles.time}>
							{format(new Date(todo.time), 'p, MM/dd/yyyy')}
						</p>
					</div>
				</div>
				<div className={styles.todoActions}>
					<div
						className={styles.icon}
						onClick={() => handleUpdate()}
						onKeyDown={() => handleUpdate()}
						tabIndex={0}
						role='button'
					>
						<MdEdit />
					</div>
					<div
						className={styles.icon}
						onClick={() => handleDelete()}
						onKeyDown={() => handleDelete()}
						tabIndex={0}
						role='button'
					>
						<MdDelete />
					</div>
				</div>
			</motion.div>
			<ToDoModal
				type='update'
				modalOpen={updateModalOpen}
				setModalOpen={setUpdateModalOpen}
				todo={todo}
			/>
		</>
	);
}
